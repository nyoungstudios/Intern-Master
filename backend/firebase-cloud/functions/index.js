const functions = require('firebase-functions');
const cors = require('cors')({
  origin: true
});
const request = require('request');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
exports.companyLogo = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    let name = req.query.name
    if (!name) {
      name = req.body.name
    }
    var options = {
      url: "https://autocomplete.clearbit.com/v1/companies/suggest?query=" + name,
      headers: {
        'User-Agent': 'request'
      }
    };

    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        var info = JSON.parse(body);
        let opt = {
          url: info[0].logo,
          method: 'GET',
          encoding: null
        }
        request(opt, function(err, response, body) {
          if (!err && response.statusCode === 200) {
            res.set('Content-Type', 'image/png')
            res.send(body);
          }

        })

      }
    }

    request(options, callback);


  });
});
exports.projectLogo = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    let org = req.query.org
    let proj = req.query.proj
    if (!org || !proj) {
      org = req.body.org
      proj = req.body.proj
    }

    var options = {
      url: "https://api.github.com/repos/" + org + "/" + proj + "?client_id=********************&client_secret=****************************************",
      headers: {
        'User-Agent': 'request'
      }
    };

    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        var info = JSON.parse(body);
        let opt = {
          url: info.owner.avatar_url,
          method: 'GET',
          encoding: null
        }
        request(opt, function(err, response, body) {
          if (!err && response.statusCode === 200) {
            res.set('Content-Type', 'image/png')
            res.send(body);
          }
        })

      }
    }

    request(options, callback);


  });
});
