System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "app/*": "src/*.js",
    "users/*": "src/users/*.js",
    "material-start/*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "app": {
      "format": "register",
      "defaultExtension": "js"
    }
  },

  map: {
    "@uirouter/angularjs": "npm:@uirouter/angularjs@1.0.15",
    "angular": "github:angular/bower-angular@1.5.8",
    "angular-animate": "github:angular/bower-angular-animate@1.5.8",
    "angular-aria": "github:angular/bower-angular-aria@1.5.8",
    "angular-filter": "npm:angular-filter@0.5.17",
    "angular-loading-bar": "github:chieffancypants/angular-loading-bar@0.9.0",
    "angular-markdown-directive": "npm:angular-markdown-directive@0.3.1",
    "angular-material": "github:angular/bower-material@master",
    "angular-messages": "github:angular/bower-angular-messages@1.5.8",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.8",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.6.10",
    "angular-ui/ui-router": "github:angular-ui/ui-router@1.0.15",
    "babel-core": "npm:babel-core@6.26.0",
    "babel-loader": "npm:babel-loader@6.4.1",
    "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.23.0",
    "babel-polyfill": "npm:babel-polyfill@6.26.0",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.24.1",
    "babel-preset-stage-0": "npm:babel-preset-stage-0@6.24.1",
    "babel-register": "npm:babel-register@6.26.0",
    "babel-runtime": "npm:babel-runtime@6.26.0",
    "chai": "npm:chai@3.5.0",
    "chart": "github:chartjs/Chart.js@2.7.1",
    "components/jquery": "github:components/jquery@3.2.1",
    "connect-history-api-fallback": "npm:connect-history-api-fallback@1.5.0",
    "css": "github:systemjs/plugin-css@0.1.36",
    "css-loader": "npm:css-loader@0.19.0",
    "del": "npm:del@2.2.2",
    "firebase": "github:firebase/firebase-bower@4.9.0",
    "flat-color-icons": "npm:flat-color-icons@1.1.0",
    "fs": "github:jspm/nodelibs-fs@0.1.2",
    "fs-walk": "npm:fs-walk@0.0.1",
    "github-api": "npm:github-api@3.0.0",
    "gulp": "npm:gulp@3.9.1",
    "gulp-rename": "npm:gulp-rename@1.2.2",
    "gulp-template": "npm:gulp-template@3.1.0",
    "gulp-util": "npm:gulp-util@3.0.8",
    "hansottowirtz/simplemde-angular": "github:hansottowirtz/simplemde-angular@0.0.3",
    "html-webpack-plugin": "npm:html-webpack-plugin@1.7.0",
    "immstruct": "npm:immstruct@2.0.0",
    "jquery": "github:components/jquery@3.2.1",
    "json": "github:systemjs/plugin-json@0.1.2",
    "jtblin/angular-chart.js": "github:jtblin/angular-chart.js@1.1.1",
    "karma": "npm:karma@0.13.22",
    "karma-chai": "npm:karma-chai@0.1.0",
    "karma-chrome-launcher": "npm:karma-chrome-launcher@0.2.3",
    "karma-mocha": "npm:karma-mocha@0.2.2",
    "karma-mocha-reporter": "npm:karma-mocha-reporter@1.3.0",
    "karma-sourcemap-loader": "npm:karma-sourcemap-loader@0.3.7",
    "karma-webpack": "npm:karma-webpack@1.8.1",
    "kmturley/angularfire": "github:kmturley/angularfire@2.3.0",
    "lodash": "npm:lodash@4.17.5",
    "lodash-node": "npm:lodash-node@3.10.2",
    "mocha": "npm:mocha@2.5.3",
    "myname": "npm:underscore@1.8.3",
    "ng-annotate-loader": "npm:ng-annotate-loader@0.0.10",
    "ng-file-upload": "npm:ng-file-upload@12.2.13",
    "node-libs-browser": "npm:node-libs-browser@0.5.3",
    "node-sass": "npm:node-sass@3.13.1",
    "raw-loader": "npm:raw-loader@0.5.1",
    "run-sequence": "npm:run-sequence@1.2.2",
    "sass-loader": "npm:sass-loader@4.1.1",
    "showdown": "github:showdownjs/showdown@1.8.6",
    "simplemde": "npm:simplemde@1.11.2",
    "style-loader": "npm:style-loader@0.12.4",
    "supports-color": "npm:supports-color@3.2.3",
    "text": "github:systemjs/plugin-text@0.0.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "webpack": "npm:webpack@1.15.0",
    "webpack-dev-middleware": "npm:webpack-dev-middleware@1.12.2",
    "webpack-hot-middleware": "npm:webpack-hot-middleware@2.22.1",
    "yargs": "npm:yargs@3.32.0",
    "github:angular/bower-angular-animate@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-aria@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-messages@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-mocks@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-sanitize@1.6.10": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-material@master": {
      "angular": "github:angular/bower-angular@1.5.8",
      "angular-animate": "github:angular/bower-angular-animate@1.5.8",
      "angular-aria": "github:angular/bower-angular-aria@1.5.8",
      "angular-messages": "github:angular/bower-angular-messages@1.5.8",
      "css": "github:systemjs/plugin-css@0.1.36"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.1.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.12.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.4.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:@uirouter/angularjs@1.0.15": {
      "@uirouter/core": "npm:@uirouter/core@5.0.17",
      "angular": "npm:angular@1.6.10",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@uirouter/core@5.0.17": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:accepts@1.3.1": {
      "mime-types": "npm:mime-types@2.1.18",
      "negotiator": "npm:negotiator@0.6.0"
    },
    "npm:acorn-dynamic-import@2.0.2": {
      "acorn": "npm:acorn@4.0.13"
    },
    "npm:acorn@2.6.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:acorn@4.0.13": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:acorn@5.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ajv-keywords@1.5.1": {
      "ajv": "npm:ajv@6.4.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:ajv-keywords@3.1.0": {
      "ajv": "npm:ajv@6.4.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:ajv@4.11.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "co": "npm:co@4.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:ajv@6.4.0": {
      "fast-deep-equal": "npm:fast-deep-equal@1.1.0",
      "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json-schema-traverse": "npm:json-schema-traverse@0.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "uri-js": "npm:uri-js@3.0.2"
    },
    "npm:align-text@0.1.4": {
      "kind-of": "npm:kind-of@3.2.2",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.6.1"
    },
    "npm:alter@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "stable": "npm:stable@0.1.7"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular-filter@0.5.17": {
      "angular": "npm:angular@1.6.10"
    },
    "npm:ansi-gray@0.1.1": {
      "ansi-wrap": "npm:ansi-wrap@0.1.0"
    },
    "npm:anymatch@1.3.2": {
      "micromatch": "npm:micromatch@2.3.11",
      "normalize-path": "npm:normalize-path@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:anymatch@2.0.0": {
      "micromatch": "npm:micromatch@3.1.10",
      "normalize-path": "npm:normalize-path@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:are-we-there-yet@1.1.4": {
      "delegates": "npm:delegates@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:argparse@1.0.10": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:arr-diff@2.0.0": {
      "arr-flatten": "npm:arr-flatten@1.1.0"
    },
    "npm:array-union@1.0.2": {
      "array-uniq": "npm:array-uniq@1.0.3"
    },
    "npm:asn1.js@4.10.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:async@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:async@2.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "lodash": "npm:lodash@4.17.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asynckit@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:atob@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:autoprefixer@6.7.7": {
      "browserslist": "npm:browserslist@1.7.7",
      "caniuse-db": "npm:caniuse-db@1.0.30000830",
      "normalize-range": "npm:normalize-range@0.1.2",
      "num2fraction": "npm:num2fraction@1.2.2",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:aws4@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:axios@0.15.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "follow-redirects": "npm:follow-redirects@1.0.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:babel-code-frame@6.26.0": {
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@3.0.2"
    },
    "npm:babel-core@6.26.0": {
      "babel-code-frame": "npm:babel-code-frame@6.26.0",
      "babel-generator": "npm:babel-generator@6.26.1",
      "babel-helpers": "npm:babel-helpers@6.24.1",
      "babel-messages": "npm:babel-messages@6.23.0",
      "babel-register": "npm:babel-register@6.26.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "babylon": "npm:babylon@6.18.0",
      "convert-source-map": "npm:convert-source-map@1.5.1",
      "debug": "npm:debug@2.6.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json5": "npm:json5@0.5.1",
      "lodash": "npm:lodash@4.17.5",
      "minimatch": "npm:minimatch@3.0.4",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "private": "npm:private@0.1.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.7",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-generator@6.26.1": {
      "babel-messages": "npm:babel-messages@6.23.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "detect-indent": "npm:detect-indent@4.0.0",
      "jsesc": "npm:jsesc@1.3.0",
      "lodash": "npm:lodash@4.17.5",
      "source-map": "npm:source-map@0.5.7",
      "trim-right": "npm:trim-right@1.0.1"
    },
    "npm:babel-helper-bindify-decorators@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.24.1": {
      "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-call-delegate@6.24.1": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-define-map@6.26.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "lodash": "npm:lodash@4.17.5"
    },
    "npm:babel-helper-explode-assignable-expression@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-explode-class@6.24.1": {
      "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-function-name@6.24.1": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-get-function-arity@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-hoist-variables@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-optimise-call-expression@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-regex@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "lodash": "npm:lodash@4.17.5"
    },
    "npm:babel-helper-remap-async-to-generator@6.24.1": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-replace-supers@6.24.1": {
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
      "babel-messages": "npm:babel-messages@6.23.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helpers@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0"
    },
    "npm:babel-loader@6.4.1": {
      "babel-core": "npm:babel-core@6.26.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "find-cache-dir": "npm:find-cache-dir@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "loader-utils": "npm:loader-utils@0.2.17",
      "mkdirp": "npm:mkdirp@0.5.1",
      "object-assign": "npm:object-assign@4.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "webpack": "npm:webpack@2.7.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:babel-messages@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-check-es2015-constants@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-async-generator-functions@6.24.1": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1",
      "babel-plugin-syntax-async-generators": "npm:babel-plugin-syntax-async-generators@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-async-to-generator@6.24.1": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-class-constructor-call@6.24.1": {
      "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0"
    },
    "npm:babel-plugin-transform-class-properties@6.24.1": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0"
    },
    "npm:babel-plugin-transform-decorators@6.24.1": {
      "babel-helper-explode-class": "npm:babel-helper-explode-class@6.24.1",
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-do-expressions@6.22.0": {
      "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "lodash": "npm:lodash@4.17.5"
    },
    "npm:babel-plugin-transform-es2015-classes@6.24.1": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.26.0",
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1",
      "babel-messages": "npm:babel-messages@6.23.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-for-of@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-function-name@6.24.1": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-literals@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.24.1": {
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.0": {
      "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-modules-umd@6.24.1": {
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-object-super@6.24.1": {
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-parameters@6.24.1": {
      "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.24.1",
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-spread@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1": {
      "babel-helper-regex": "npm:babel-helper-regex@6.26.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1": {
      "babel-helper-regex": "npm:babel-helper-regex@6.26.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "regexpu-core": "npm:regexpu-core@2.0.0"
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.24.1": {
      "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.24.1",
      "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-export-extensions@6.22.0": {
      "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-function-bind@6.22.0": {
      "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-object-rest-spread@6.26.0": {
      "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-regenerator@6.26.0": {
      "regenerator-transform": "npm:regenerator-transform@0.10.1"
    },
    "npm:babel-plugin-transform-runtime@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-strict-mode@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-polyfill@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "core-js": "npm:core-js@2.5.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
    },
    "npm:babel-preset-es2015@6.24.1": {
      "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.22.0",
      "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0",
      "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.26.0",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.24.1",
      "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.24.1",
      "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.23.0",
      "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.23.0",
      "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.24.1",
      "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.22.0",
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1",
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.0",
      "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1",
      "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.24.1",
      "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.24.1",
      "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.24.1",
      "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.22.0",
      "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1",
      "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.22.0",
      "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0",
      "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1",
      "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.26.0"
    },
    "npm:babel-preset-stage-0@6.24.1": {
      "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.22.0",
      "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.22.0",
      "babel-preset-stage-1": "npm:babel-preset-stage-1@6.24.1"
    },
    "npm:babel-preset-stage-1@6.24.1": {
      "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.24.1",
      "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.22.0",
      "babel-preset-stage-2": "npm:babel-preset-stage-2@6.24.1"
    },
    "npm:babel-preset-stage-2@6.24.1": {
      "babel-plugin-syntax-dynamic-import": "npm:babel-plugin-syntax-dynamic-import@6.18.0",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.24.1",
      "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.24.1",
      "babel-preset-stage-3": "npm:babel-preset-stage-3@6.24.1"
    },
    "npm:babel-preset-stage-3@6.24.1": {
      "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.22.0",
      "babel-plugin-transform-async-generator-functions": "npm:babel-plugin-transform-async-generator-functions@6.24.1",
      "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.24.1",
      "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.24.1",
      "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.26.0"
    },
    "npm:babel-register@6.26.0": {
      "babel-core": "npm:babel-core@6.26.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "core-js": "npm:core-js@2.5.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "home-or-tmp": "npm:home-or-tmp@2.0.0",
      "lodash": "npm:lodash@4.17.5",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map-support": "npm:source-map-support@0.4.18"
    },
    "npm:babel-runtime@6.26.0": {
      "core-js": "npm:core-js@2.5.5",
      "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
    },
    "npm:babel-template@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "babylon": "npm:babylon@6.18.0",
      "lodash": "npm:lodash@4.17.5"
    },
    "npm:babel-traverse@6.26.0": {
      "babel-code-frame": "npm:babel-code-frame@6.26.0",
      "babel-messages": "npm:babel-messages@6.23.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "babylon": "npm:babylon@6.18.0",
      "debug": "npm:debug@2.6.9",
      "globals": "npm:globals@9.18.0",
      "invariant": "npm:invariant@2.2.4",
      "lodash": "npm:lodash@4.17.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.17.5",
      "to-fast-properties": "npm:to-fast-properties@1.0.3"
    },
    "npm:babylon@6.18.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64id@0.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:base@0.11.2": {
      "cache-base": "npm:cache-base@1.0.1",
      "class-utils": "npm:class-utils@0.3.6",
      "component-emitter": "npm:component-emitter@1.2.1",
      "define-property": "npm:define-property@1.0.0",
      "isobject": "npm:isobject@3.0.1",
      "mixin-deep": "npm:mixin-deep@1.3.1",
      "pascalcase": "npm:pascalcase@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:batch@0.5.3": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "tweetnacl": "npm:tweetnacl@0.14.5"
    },
    "npm:beeper@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:better-assert@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:binary-extensions@1.11.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:block-stream@0.0.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:bluebird@2.11.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bluebird@3.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:blueimp-tmpl@2.5.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:body-parser@1.18.2": {
      "bytes": "npm:bytes@3.0.0",
      "content-type": "npm:content-type@1.0.4",
      "debug": "npm:debug@2.6.9",
      "depd": "npm:depd@1.1.2",
      "http-errors": "npm:http-errors@1.6.2",
      "iconv-lite": "npm:iconv-lite@0.4.19",
      "on-finished": "npm:on-finished@2.3.0",
      "qs": "npm:qs@6.5.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "raw-body": "npm:raw-body@2.3.2",
      "type-is": "npm:type-is@1.6.16",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:brace-expansion@1.1.11": {
      "balanced-match": "npm:balanced-match@1.0.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@0.1.5": {
      "expand-range": "npm:expand-range@0.1.1"
    },
    "npm:braces@1.8.5": {
      "expand-range": "npm:expand-range@1.8.2",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.2"
    },
    "npm:braces@2.3.2": {
      "arr-flatten": "npm:arr-flatten@1.1.0",
      "array-unique": "npm:array-unique@0.3.2",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "fill-range": "npm:fill-range@4.0.0",
      "isobject": "npm:isobject@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeat-element": "npm:repeat-element@1.1.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "snapdragon-node": "npm:snapdragon-node@2.1.1",
      "split-string": "npm:split-string@3.1.0",
      "to-regex": "npm:to-regex@3.0.2"
    },
    "npm:browserify-aes@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.1": {
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "browserify-des": "npm:browserify-des@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
    },
    "npm:browserify-des@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.6"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.3",
      "parse-asn1": "npm:parse-asn1@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify-zlib@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@1.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserslist@1.7.7": {
      "caniuse-db": "npm:caniuse-db@1.0.30000830",
      "electron-to-chromium": "npm:electron-to-chromium@1.3.42",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.11",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@4.9.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.11",
      "isarray": "npm:isarray@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.1.0": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.11"
    },
    "npm:bufferutil@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.10.0"
    },
    "npm:builtin-modules@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:builtin-status-codes@3.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:cache-base@1.0.1": {
      "collection-visit": "npm:collection-visit@1.0.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "get-value": "npm:get-value@2.0.6",
      "has-value": "npm:has-value@1.0.0",
      "isobject": "npm:isobject@3.0.1",
      "set-value": "npm:set-value@2.0.0",
      "to-object-path": "npm:to-object-path@0.3.0",
      "union-value": "npm:union-value@1.0.0",
      "unset-value": "npm:unset-value@1.0.0"
    },
    "npm:camel-case@1.2.2": {
      "sentence-case": "npm:sentence-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:camelcase-keys@2.1.0": {
      "camelcase": "npm:camelcase@2.1.1",
      "map-obj": "npm:map-obj@1.0.1"
    },
    "npm:caniuse-api@1.6.1": {
      "browserslist": "npm:browserslist@1.7.7",
      "caniuse-db": "npm:caniuse-db@1.0.30000830",
      "lodash.memoize": "npm:lodash.memoize@4.1.2",
      "lodash.uniq": "npm:lodash.uniq@4.5.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:center-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4",
      "lazy-cache": "npm:lazy-cache@1.0.4"
    },
    "npm:chai@3.5.0": {
      "assertion-error": "npm:assertion-error@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:change-case@2.3.1": {
      "camel-case": "npm:camel-case@1.2.2",
      "constant-case": "npm:constant-case@1.1.2",
      "dot-case": "npm:dot-case@1.1.2",
      "is-lower-case": "npm:is-lower-case@1.1.3",
      "is-upper-case": "npm:is-upper-case@1.1.2",
      "lower-case": "npm:lower-case@1.1.4",
      "lower-case-first": "npm:lower-case-first@1.0.2",
      "param-case": "npm:param-case@1.1.2",
      "pascal-case": "npm:pascal-case@1.1.2",
      "path-case": "npm:path-case@1.1.2",
      "sentence-case": "npm:sentence-case@1.1.3",
      "snake-case": "npm:snake-case@1.1.2",
      "swap-case": "npm:swap-case@1.1.2",
      "title-case": "npm:title-case@1.1.2",
      "upper-case": "npm:upper-case@1.1.3",
      "upper-case-first": "npm:upper-case-first@1.1.2"
    },
    "npm:chokidar@1.7.0": {
      "anymatch": "npm:anymatch@1.3.2",
      "async-each": "npm:async-each@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.1.3",
      "glob-parent": "npm:glob-parent@2.0.0",
      "inherits": "npm:inherits@2.0.3",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.1.0"
    },
    "npm:chokidar@2.0.3": {
      "anymatch": "npm:anymatch@2.0.0",
      "async-each": "npm:async-each@1.0.1",
      "braces": "npm:braces@2.3.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.1.3",
      "glob-parent": "npm:glob-parent@3.1.0",
      "inherits": "npm:inherits@2.0.3",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@4.0.0",
      "normalize-path": "npm:normalize-path@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.1.0",
      "upath": "npm:upath@1.0.4"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clap@1.2.3": {
      "chalk": "npm:chalk@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:class-utils@0.3.6": {
      "arr-union": "npm:arr-union@3.1.0",
      "define-property": "npm:define-property@0.2.5",
      "isobject": "npm:isobject@3.0.1",
      "static-extend": "npm:static-extend@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:clean-css@3.4.28": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:cliui@2.1.0": {
      "center-align": "npm:center-align@0.1.3",
      "right-align": "npm:right-align@0.1.3",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:cliui@3.2.0": {
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "wrap-ansi": "npm:wrap-ansi@2.1.0"
    },
    "npm:clone-stats@0.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:clone@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:clone@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:coa@1.0.4": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.5.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:codemirror-spell-checker@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "typo-js": "npm:typo-js@1.0.3"
    },
    "npm:codemirror@5.36.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:collection-visit@1.0.0": {
      "map-visit": "npm:map-visit@1.0.0",
      "object-visit": "npm:object-visit@1.0.1"
    },
    "npm:color-convert@1.9.1": {
      "color-name": "npm:color-name@1.1.3"
    },
    "npm:color-name@1.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:color-string@0.3.0": {
      "color-name": "npm:color-name@1.1.3"
    },
    "npm:color-support@1.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:color@0.11.4": {
      "clone": "npm:clone@1.0.4",
      "color-convert": "npm:color-convert@1.9.1",
      "color-string": "npm:color-string@0.3.0"
    },
    "npm:colormin@1.1.2": {
      "color": "npm:color@0.11.4",
      "css-color-names": "npm:css-color-names@0.0.4",
      "has": "npm:has@1.0.1"
    },
    "npm:colors@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:combined-stream@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commondir@1.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:concat-stream@1.5.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@2.0.6",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:connect-history-api-fallback@1.5.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:connect@3.6.6": {
      "debug": "npm:debug@2.6.9",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@1.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "parseurl": "npm:parseurl@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "utils-merge": "npm:utils-merge@1.0.1"
    },
    "npm:console-browserify@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "date-now": "npm:date-now@0.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:constant-case@1.1.2": {
      "snake-case": "npm:snake-case@1.1.2",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:constants-browserify@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:convert-source-map@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:convert-source-map@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@2.5.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "md5.js": "npm:md5.js@1.3.4",
      "ripemd160": "npm:ripemd160@2.0.1",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:create-hmac@1.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:cross-spawn@3.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lru-cache": "npm:lru-cache@4.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "which": "npm:which@1.3.0"
    },
    "npm:cross-spawn@5.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lru-cache": "npm:lru-cache@4.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shebang-command": "npm:shebang-command@1.2.0",
      "which": "npm:which@1.3.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.12.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.1",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "diffie-hellman": "npm:diffie-hellman@5.0.3",
      "inherits": "npm:inherits@2.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.14",
      "public-encrypt": "npm:public-encrypt@4.0.2",
      "randombytes": "npm:randombytes@2.0.6",
      "randomfill": "npm:randomfill@1.0.4"
    },
    "npm:crypto-browserify@3.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pbkdf2-compat": "npm:pbkdf2-compat@2.0.1",
      "ripemd160": "npm:ripemd160@0.2.0",
      "sha.js": "npm:sha.js@2.2.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:css-color-names@0.0.4": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-loader@0.19.0": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "cssnano": "npm:cssnano@3.10.0",
      "loader-utils": "npm:loader-utils@0.2.17",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.2.18",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0-beta2",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0-beta1",
      "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0-beta2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-list-map": "npm:source-list-map@0.1.8"
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "cssesc": "npm:cssesc@0.1.0",
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:cssnano@3.10.0": {
      "autoprefixer": "npm:autoprefixer@6.7.7",
      "decamelize": "npm:decamelize@1.2.0",
      "defined": "npm:defined@1.0.0",
      "has": "npm:has@1.0.1",
      "object-assign": "npm:object-assign@4.1.0",
      "postcss": "npm:postcss@5.2.18",
      "postcss-calc": "npm:postcss-calc@5.3.1",
      "postcss-colormin": "npm:postcss-colormin@2.2.2",
      "postcss-convert-values": "npm:postcss-convert-values@2.6.1",
      "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
      "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.1.0",
      "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
      "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
      "postcss-discard-unused": "npm:postcss-discard-unused@2.2.3",
      "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.2",
      "postcss-merge-idents": "npm:postcss-merge-idents@2.1.7",
      "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.2",
      "postcss-merge-rules": "npm:postcss-merge-rules@2.1.2",
      "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
      "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.5",
      "postcss-minify-params": "npm:postcss-minify-params@1.2.2",
      "postcss-minify-selectors": "npm:postcss-minify-selectors@2.1.1",
      "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.1",
      "postcss-normalize-url": "npm:postcss-normalize-url@3.0.8",
      "postcss-ordered-values": "npm:postcss-ordered-values@2.2.3",
      "postcss-reduce-idents": "npm:postcss-reduce-idents@2.4.0",
      "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.1",
      "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.4",
      "postcss-svgo": "npm:postcss-svgo@2.1.6",
      "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "postcss-zindex": "npm:postcss-zindex@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:csso@2.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "clap": "npm:clap@1.2.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:currently-unhandled@0.4.1": {
      "array-find-index": "npm:array-find-index@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:d@1.0.0": {
      "es5-ext": "npm:es5-ext@0.10.42"
    },
    "npm:dashdash@1.14.1": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:debug@2.3.3": {
      "ms": "npm:ms@0.7.2"
    },
    "npm:debug@2.6.9": {
      "ms": "npm:ms@2.0.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:deep-extend@0.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:defaults@1.0.3": {
      "clone": "npm:clone@1.0.4"
    },
    "npm:define-property@0.2.5": {
      "is-descriptor": "npm:is-descriptor@0.1.6"
    },
    "npm:define-property@1.0.0": {
      "is-descriptor": "npm:is-descriptor@1.0.2"
    },
    "npm:define-property@2.0.2": {
      "is-descriptor": "npm:is-descriptor@1.0.2",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:del@2.2.2": {
      "globby": "npm:globby@5.0.0",
      "is-path-cwd": "npm:is-path-cwd@1.0.0",
      "is-path-in-cwd": "npm:is-path-in-cwd@1.0.1",
      "object-assign": "npm:object-assign@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "rimraf": "npm:rimraf@2.6.2"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.1.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:depd@1.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:detect-file@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:detect-indent@4.0.0": {
      "repeating": "npm:repeating@2.0.1"
    },
    "npm:detect-libc@1.0.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:diffie-hellman@5.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.1",
      "randombytes": "npm:randombytes@2.0.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dom-serialize@2.2.1": {
      "custom-event": "npm:custom-event@1.0.1",
      "ent": "npm:ent@2.2.0",
      "extend": "npm:extend@3.0.1",
      "void-elements": "npm:void-elements@2.0.1"
    },
    "npm:domain-browser@1.2.0": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:dot-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.1"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.3",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:end-of-stream@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:engine.io-client@1.8.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "component-emitter": "npm:component-emitter@1.2.1",
      "component-inherit": "npm:component-inherit@0.0.3",
      "debug": "npm:debug@2.3.3",
      "engine.io-parser": "npm:engine.io-parser@1.3.2",
      "has-cors": "npm:has-cors@1.1.0",
      "indexof": "npm:indexof@0.0.1",
      "parsejson": "npm:parsejson@0.0.3",
      "parseqs": "npm:parseqs@0.0.5",
      "parseuri": "npm:parseuri@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "yeast": "npm:yeast@0.1.2"
    },
    "npm:engine.io-parser@1.2.4": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "has-binary": "npm:has-binary@0.1.6",
      "utf8": "npm:utf8@2.1.0"
    },
    "npm:engine.io-parser@1.3.2": {
      "after": "npm:after@0.8.2",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "has-binary": "npm:has-binary@0.1.7",
      "wtf-8": "npm:wtf-8@1.0.0"
    },
    "npm:engine.io@1.8.5": {
      "accepts": "npm:accepts@1.3.1",
      "base64id": "npm:base64id@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@2.2.0",
      "engine.io-parser": "npm:engine.io-parser@1.2.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "ws": "npm:ws@1.0.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:enhanced-resolve@3.4.1": {
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "memory-fs": "npm:memory-fs@0.4.1",
      "object-assign": "npm:object-assign@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tapable": "npm:tapable@0.2.8"
    },
    "npm:ent@2.2.0": {
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:errno@0.1.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prr": "npm:prr@1.0.1"
    },
    "npm:error-ex@1.3.1": {
      "is-arrayish": "npm:is-arrayish@0.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:es5-ext@0.10.42": {
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "next-tick": "npm:next-tick@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.3": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "es6-symbol": "npm:es6-symbol@3.1.1"
    },
    "npm:es6-map@0.1.5": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-set": "npm:es6-set@0.1.5",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "event-emitter": "npm:event-emitter@0.3.5"
    },
    "npm:es6-set@0.1.5": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "event-emitter": "npm:event-emitter@0.3.5"
    },
    "npm:es6-symbol@3.1.1": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42"
    },
    "npm:es6-weak-map@2.0.2": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-symbol": "npm:es6-symbol@3.1.1"
    },
    "npm:escope@3.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "es6-map": "npm:es6-map@0.1.5",
      "es6-weak-map": "npm:es6-weak-map@2.0.2",
      "esrecurse": "npm:esrecurse@4.2.1",
      "estraverse": "npm:estraverse@4.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:esrecurse@4.2.1": {
      "estraverse": "npm:estraverse@4.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:estraverse@4.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:event-emitter@0.3.5": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:evp_bytestokey@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "md5.js": "npm:md5.js@1.3.4",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:execa@0.7.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "cross-spawn": "npm:cross-spawn@5.1.0",
      "get-stream": "npm:get-stream@3.0.0",
      "is-stream": "npm:is-stream@1.1.0",
      "npm-run-path": "npm:npm-run-path@2.0.2",
      "p-finally": "npm:p-finally@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@3.0.2",
      "strip-eof": "npm:strip-eof@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:expand-braces@0.1.2": {
      "array-slice": "npm:array-slice@0.2.3",
      "array-unique": "npm:array-unique@0.2.1",
      "braces": "npm:braces@0.1.5"
    },
    "npm:expand-brackets@0.1.5": {
      "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
    },
    "npm:expand-brackets@2.1.4": {
      "debug": "npm:debug@2.3.3",
      "define-property": "npm:define-property@0.2.5",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "posix-character-classes": "npm:posix-character-classes@0.1.1",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2"
    },
    "npm:expand-range@0.1.1": {
      "is-number": "npm:is-number@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "repeat-string": "npm:repeat-string@0.2.2"
    },
    "npm:expand-range@1.8.2": {
      "fill-range": "npm:fill-range@2.2.3"
    },
    "npm:expand-tilde@2.0.2": {
      "homedir-polyfill": "npm:homedir-polyfill@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:extend-shallow@2.0.1": {
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:extend-shallow@3.0.2": {
      "assign-symbols": "npm:assign-symbols@1.0.0",
      "is-extendable": "npm:is-extendable@1.0.1"
    },
    "npm:extglob@0.3.2": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:extglob@2.0.4": {
      "array-unique": "npm:array-unique@0.3.2",
      "define-property": "npm:define-property@1.0.0",
      "expand-brackets": "npm:expand-brackets@2.1.4",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "fragment-cache": "npm:fragment-cache@0.2.1",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2"
    },
    "npm:extsprintf@1.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fancy-log@1.3.2": {
      "ansi-gray": "npm:ansi-gray@0.1.1",
      "color-support": "npm:color-support@1.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "time-stamp": "npm:time-stamp@1.1.0"
    },
    "npm:fast-json-stable-stringify@2.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fill-range@2.2.3": {
      "is-number": "npm:is-number@2.1.0",
      "isobject": "npm:isobject@2.1.0",
      "randomatic": "npm:randomatic@1.1.7",
      "repeat-element": "npm:repeat-element@1.1.2",
      "repeat-string": "npm:repeat-string@1.6.1"
    },
    "npm:fill-range@4.0.0": {
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "is-number": "npm:is-number@3.0.0",
      "repeat-string": "npm:repeat-string@1.6.1",
      "to-regex-range": "npm:to-regex-range@2.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:finalhandler@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@2.6.9",
      "encodeurl": "npm:encodeurl@1.0.2",
      "escape-html": "npm:escape-html@1.0.3",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "statuses": "npm:statuses@1.3.1",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:find-cache-dir@0.1.1": {
      "commondir": "npm:commondir@1.0.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pkg-dir": "npm:pkg-dir@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:find-up@1.1.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@2.1.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:find-up@2.1.0": {
      "locate-path": "npm:locate-path@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:findup-sync@2.0.0": {
      "detect-file": "npm:detect-file@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-glob": "npm:is-glob@3.1.0",
      "micromatch": "npm:micromatch@3.1.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve-dir": "npm:resolve-dir@1.0.1"
    },
    "npm:fined@1.1.0": {
      "expand-tilde": "npm:expand-tilde@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "object.defaults": "npm:object.defaults@1.1.0",
      "object.pick": "npm:object.pick@1.3.0",
      "parse-filepath": "npm:parse-filepath@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:first-chunk-stream@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:flagged-respawn@1.0.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:flatten@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:follow-redirects@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "debug": "npm:debug@2.3.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:for-own@0.1.5": {
      "for-in": "npm:for-in@1.0.2"
    },
    "npm:for-own@1.0.0": {
      "for-in": "npm:for-in@1.0.2"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@2.1.4": {
      "asynckit": "npm:asynckit@0.4.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "combined-stream": "npm:combined-stream@1.0.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.18",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fragment-cache@0.2.1": {
      "map-cache": "npm:map-cache@0.2.2"
    },
    "npm:fs-access@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "null-check": "npm:null-check@1.0.0"
    },
    "npm:fs-walk@0.0.1": {
      "async": "npm:async@0.9.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fs.realpath@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fsevents@1.1.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.10.0",
      "node-pre-gyp": "npm:node-pre-gyp@0.6.39",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fstream-ignore@1.0.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.11",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fstream@1.0.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "inherits": "npm:inherits@2.0.3",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.6.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gauge@2.7.4": {
      "aproba": "npm:aproba@1.2.0",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "has-unicode": "npm:has-unicode@2.0.1",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@3.0.2",
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "wide-align": "npm:wide-align@1.1.2"
    },
    "npm:gaze@0.5.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "globule": "npm:globule@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gaze@1.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "globule": "npm:globule@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:get-stream@3.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:getpass@0.1.7": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:github-api@3.0.0": {
      "axios": "npm:axios@0.15.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@2.6.9",
      "js-base64": "npm:js-base64@2.4.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "utf8": "npm:utf8@2.1.2"
    },
    "npm:glob-base@0.3.0": {
      "glob-parent": "npm:glob-parent@2.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@3.1.0": {
      "is-glob": "npm:is-glob@3.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-dirname": "npm:path-dirname@1.0.2"
    },
    "npm:glob-stream@3.1.18": {
      "glob": "npm:glob@4.5.3",
      "glob2base": "npm:glob2base@0.0.12",
      "minimatch": "npm:minimatch@2.0.10",
      "ordered-read-streams": "npm:ordered-read-streams@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.6.5",
      "unique-stream": "npm:unique-stream@1.0.0"
    },
    "npm:glob-watcher@0.0.6": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gaze": "npm:gaze@0.5.2"
    },
    "npm:glob2base@0.0.12": {
      "find-index": "npm:find-index@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@3.1.21": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "graceful-fs": "npm:graceful-fs@1.2.3",
      "inherits": "npm:inherits@1.0.2",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:glob@4.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@2.0.10",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@6.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.4",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@7.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs.realpath": "npm:fs.realpath@1.0.0",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.4",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:global-modules@1.0.0": {
      "global-prefix": "npm:global-prefix@1.0.2",
      "is-windows": "npm:is-windows@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve-dir": "npm:resolve-dir@1.0.1"
    },
    "npm:global-prefix@1.0.2": {
      "expand-tilde": "npm:expand-tilde@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "homedir-polyfill": "npm:homedir-polyfill@1.0.1",
      "ini": "npm:ini@1.3.5",
      "is-windows": "npm:is-windows@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "which": "npm:which@1.3.0"
    },
    "npm:globals@9.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:globby@5.0.0": {
      "array-union": "npm:array-union@1.0.2",
      "arrify": "npm:arrify@1.0.1",
      "glob": "npm:glob@7.1.2",
      "object-assign": "npm:object-assign@4.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:globule@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@3.1.21",
      "lodash": "npm:lodash@1.0.2",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:globule@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.2",
      "lodash": "npm:lodash@4.17.5",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glogg@1.0.1": {
      "sparkles": "npm:sparkles@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@1.2.3": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:graceful-fs@3.0.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "natives": "npm:natives@1.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:gulp-rename@1.2.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gulp-template@3.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "gulp-util": "npm:gulp-util@3.0.8",
      "lodash": "npm:lodash@3.10.1",
      "through2": "npm:through2@2.0.3"
    },
    "npm:gulp-util@3.0.8": {
      "array-differ": "npm:array-differ@1.0.0",
      "array-uniq": "npm:array-uniq@1.0.3",
      "beeper": "npm:beeper@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chalk": "npm:chalk@1.1.1",
      "dateformat": "npm:dateformat@2.2.0",
      "fancy-log": "npm:fancy-log@1.3.2",
      "gulplog": "npm:gulplog@1.0.0",
      "has-gulplog": "npm:has-gulplog@0.1.0",
      "lodash._reescape": "npm:lodash._reescape@3.0.0",
      "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.template": "npm:lodash.template@3.6.2",
      "minimist": "npm:minimist@1.2.0",
      "multipipe": "npm:multipipe@0.1.2",
      "object-assign": "npm:object-assign@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@2.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.5.3"
    },
    "npm:gulp@3.9.1": {
      "archy": "npm:archy@1.0.0",
      "chalk": "npm:chalk@1.1.1",
      "deprecated": "npm:deprecated@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gulp-util": "npm:gulp-util@3.0.8",
      "interpret": "npm:interpret@1.1.0",
      "liftoff": "npm:liftoff@2.5.0",
      "minimist": "npm:minimist@1.2.0",
      "orchestrator": "npm:orchestrator@0.3.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pretty-hrtime": "npm:pretty-hrtime@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver": "npm:semver@4.3.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tildify": "npm:tildify@1.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "v8flags": "npm:v8flags@2.1.1",
      "vinyl-fs": "npm:vinyl-fs@0.3.14"
    },
    "npm:gulplog@1.0.0": {
      "glogg": "npm:glogg@1.0.1"
    },
    "npm:har-schema@1.0.5": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:har-validator@2.0.6": {
      "chalk": "npm:chalk@1.1.3",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.17.2",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:har-validator@4.2.1": {
      "ajv": "npm:ajv@4.11.8",
      "har-schema": "npm:har-schema@1.0.5"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:has-binary@0.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-flag@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-gulplog@0.1.0": {
      "sparkles": "npm:sparkles@1.0.0"
    },
    "npm:has-unicode@2.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-value@0.3.1": {
      "get-value": "npm:get-value@2.0.6",
      "has-values": "npm:has-values@0.1.4",
      "isobject": "npm:isobject@2.1.0"
    },
    "npm:has-value@1.0.0": {
      "get-value": "npm:get-value@2.0.6",
      "has-values": "npm:has-values@1.0.0",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:has-values@1.0.0": {
      "is-number": "npm:is-number@3.0.0",
      "kind-of": "npm:kind-of@4.0.0"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.1"
    },
    "npm:hash-base@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash-base@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.3": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:hawk@3.1.3": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:home-or-tmp@2.0.0": {
      "os-homedir": "npm:os-homedir@1.0.2",
      "os-tmpdir": "npm:os-tmpdir@1.0.2"
    },
    "npm:homedir-polyfill@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "parse-passwd": "npm:parse-passwd@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hosted-git-info@2.6.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:html-minifier@1.5.0": {
      "change-case": "npm:change-case@2.3.1",
      "clean-css": "npm:clean-css@3.4.28",
      "commander": "npm:commander@2.9.0",
      "concat-stream": "npm:concat-stream@1.5.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "he": "npm:he@1.0.0",
      "ncname": "npm:ncname@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "relateurl": "npm:relateurl@0.2.7",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "uglify-js": "npm:uglify-js@2.6.4"
    },
    "npm:html-webpack-plugin@1.7.0": {
      "bluebird": "npm:bluebird@3.5.1",
      "blueimp-tmpl": "npm:blueimp-tmpl@2.5.7",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "html-minifier": "npm:html-minifier@1.5.0",
      "lodash": "npm:lodash@3.10.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:http-browserify@1.7.0": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-errors@1.6.2": {
      "depd": "npm:depd@1.1.1",
      "inherits": "npm:inherits@2.0.3",
      "setprototypeof": "npm:setprototypeof@1.0.3",
      "statuses": "npm:statuses@1.5.0"
    },
    "npm:http-proxy@1.16.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "eventemitter3": "npm:eventemitter3@1.2.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "requires-port": "npm:requires-port@1.0.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@1.1.1": {
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.4.1",
      "sshpk": "npm:sshpk@1.14.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:https-browserify@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:iconv-lite@0.4.19": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:immstruct@2.0.0": {
      "eventemitter3": "npm:eventemitter3@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "immutable": "npm:immutable@3.8.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:in-publish@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:indent-string@2.1.0": {
      "repeating": "npm:repeating@2.0.1"
    },
    "npm:inflight@1.0.6": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:invariant@2.2.4": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-absolute@1.0.0": {
      "is-relative": "npm:is-relative@1.0.0",
      "is-windows": "npm:is-windows@1.0.2"
    },
    "npm:is-accessor-descriptor@0.1.6": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-accessor-descriptor@1.0.0": {
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.11.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-buffer@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:is-builtin-module@1.0.0": {
      "builtin-modules": "npm:builtin-modules@1.1.1"
    },
    "npm:is-data-descriptor@0.1.4": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-data-descriptor@1.0.0": {
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:is-descriptor@0.1.6": {
      "is-accessor-descriptor": "npm:is-accessor-descriptor@0.1.6",
      "is-data-descriptor": "npm:is-data-descriptor@0.1.4",
      "kind-of": "npm:kind-of@5.1.0"
    },
    "npm:is-descriptor@1.0.2": {
      "is-accessor-descriptor": "npm:is-accessor-descriptor@1.0.0",
      "is-data-descriptor": "npm:is-data-descriptor@1.0.0",
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:is-equal-shallow@0.1.3": {
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:is-extendable@1.0.1": {
      "is-plain-object": "npm:is-plain-object@2.0.4"
    },
    "npm:is-finite@1.0.2": {
      "number-is-nan": "npm:number-is-nan@1.0.1"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.1"
    },
    "npm:is-glob@2.0.1": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:is-glob@3.1.0": {
      "is-extglob": "npm:is-extglob@2.1.1"
    },
    "npm:is-glob@4.0.0": {
      "is-extglob": "npm:is-extglob@2.1.1"
    },
    "npm:is-lower-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.4"
    },
    "npm:is-my-ip-valid@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:is-my-json-valid@2.17.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "is-my-ip-valid": "npm:is-my-ip-valid@1.0.0",
      "jsonpointer": "npm:jsonpointer@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-number@0.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:is-number@2.1.0": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-number@3.0.0": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-odd@2.0.0": {
      "is-number": "npm:is-number@4.0.0"
    },
    "npm:is-path-cwd@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-path-in-cwd@1.0.1": {
      "is-path-inside": "npm:is-path-inside@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-path-inside@1.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-inside": "npm:path-is-inside@1.0.2"
    },
    "npm:is-plain-object@2.0.4": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:is-relative@1.0.0": {
      "is-unc-path": "npm:is-unc-path@1.0.0"
    },
    "npm:is-svg@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "html-comment-regex": "npm:html-comment-regex@1.1.1"
    },
    "npm:is-unc-path@1.0.0": {
      "unc-path-regex": "npm:unc-path-regex@0.1.2"
    },
    "npm:is-upper-case@1.1.2": {
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:is-windows@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isbinaryfile@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:isexe@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isobject@2.1.0": {
      "isarray": "npm:isarray@1.0.0"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-base64@2.4.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:js-yaml@3.7.0": {
      "argparse": "npm:argparse@1.0.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "esprima": "npm:esprima@2.7.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:json-schema-traverse@0.3.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:json-stable-stringify@1.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:json5@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jsprim@1.4.1": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "extsprintf": "npm:extsprintf@1.3.0",
      "json-schema": "npm:json-schema@0.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.10.0"
    },
    "npm:karma-chai@0.1.0": {
      "chai": "npm:chai@3.5.0",
      "karma": "npm:karma@0.13.22",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:karma-chrome-launcher@0.2.3": {
      "fs-access": "npm:fs-access@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "which": "npm:which@1.3.0"
    },
    "npm:karma-mocha-reporter@1.3.0": {
      "chalk": "npm:chalk@1.1.1",
      "karma": "npm:karma@0.13.22",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:karma-mocha@0.2.2": {
      "mocha": "npm:mocha@2.5.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:karma-sourcemap-loader@0.3.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:karma-webpack@1.8.1": {
      "async": "npm:async@0.9.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "loader-utils": "npm:loader-utils@0.2.17",
      "lodash": "npm:lodash@3.10.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.43",
      "webpack": "npm:webpack@2.7.0",
      "webpack-dev-middleware": "npm:webpack-dev-middleware@1.12.2"
    },
    "npm:karma@0.13.22": {
      "batch": "npm:batch@0.5.3",
      "bluebird": "npm:bluebird@2.11.0",
      "body-parser": "npm:body-parser@1.18.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chokidar": "npm:chokidar@1.7.0",
      "colors": "npm:colors@1.1.2",
      "connect": "npm:connect@3.6.6",
      "core-js": "npm:core-js@2.5.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "di": "npm:di@0.0.1",
      "dom-serialize": "npm:dom-serialize@2.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "expand-braces": "npm:expand-braces@0.1.2",
      "glob": "npm:glob@7.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-proxy": "npm:http-proxy@1.16.2",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "isbinaryfile": "npm:isbinaryfile@3.0.2",
      "lodash": "npm:lodash@3.10.1",
      "log4js": "npm:log4js@0.6.38",
      "mime": "npm:mime@1.6.0",
      "minimatch": "npm:minimatch@3.0.4",
      "optimist": "npm:optimist@0.6.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "rimraf": "npm:rimraf@2.6.2",
      "socket.io": "npm:socket.io@1.7.4",
      "source-map": "npm:source-map@0.5.7",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "useragent": "npm:useragent@2.3.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:kind-of@3.2.2": {
      "is-buffer": "npm:is-buffer@1.1.6"
    },
    "npm:kind-of@4.0.0": {
      "is-buffer": "npm:is-buffer@1.1.6"
    },
    "npm:lazy-cache@1.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lcid@1.0.0": {
      "invert-kv": "npm:invert-kv@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:liftoff@2.5.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "extend": "npm:extend@3.0.1",
      "findup-sync": "npm:findup-sync@2.0.0",
      "fined": "npm:fined@1.1.0",
      "flagged-respawn": "npm:flagged-respawn@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "object.map": "npm:object.map@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rechoir": "npm:rechoir@0.6.2",
      "resolve": "npm:resolve@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:load-json-file@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "parse-json": "npm:parse-json@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-bom": "npm:strip-bom@2.0.0"
    },
    "npm:load-json-file@2.0.0": {
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "parse-json": "npm:parse-json@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "strip-bom": "npm:strip-bom@3.0.0"
    },
    "npm:loader-runner@2.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loader-utils@0.2.17": {
      "big.js": "npm:big.js@3.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "emojis-list": "npm:emojis-list@2.1.0",
      "json5": "npm:json5@0.5.1",
      "object-assign": "npm:object-assign@4.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:loader-utils@1.1.0": {
      "big.js": "npm:big.js@3.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "emojis-list": "npm:emojis-list@2.1.0",
      "json5": "npm:json5@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:locate-path@2.0.0": {
      "p-locate": "npm:p-locate@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash-node@3.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._basetostring@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.clonedeep@4.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.escape@3.2.0": {
      "lodash._root": "npm:lodash._root@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.memoize@4.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.mergewith@4.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.template@3.6.2": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.2.0",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.restparam": "npm:lodash.restparam@3.6.1",
      "lodash.templatesettings": "npm:lodash.templatesettings@3.1.1"
    },
    "npm:lodash.templatesettings@3.1.1": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.2.0"
    },
    "npm:lodash.uniq@4.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:log4js@0.6.38": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "cluster": "github:jspm/nodelibs-cluster@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.34",
      "semver": "npm:semver@4.3.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:loose-envify@1.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:loud-rejection@1.6.0": {
      "currently-unhandled": "npm:currently-unhandled@0.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@3.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lower-case-first@1.0.2": {
      "lower-case": "npm:lower-case@1.1.4"
    },
    "npm:lru-cache@4.1.2": {
      "pseudomap": "npm:pseudomap@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "yallist": "npm:yallist@2.1.2"
    },
    "npm:macaddress@0.2.8": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:make-iterator@1.0.1": {
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:map-visit@1.0.0": {
      "object-visit": "npm:object-visit@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:md5.js@1.3.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:mem@1.1.0": {
      "mimic-fn": "npm:mimic-fn@1.2.0"
    },
    "npm:memory-fs@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "errno": "npm:errno@0.1.7",
      "readable-stream": "npm:readable-stream@2.3.6"
    },
    "npm:meow@3.7.0": {
      "camelcase-keys": "npm:camelcase-keys@2.1.0",
      "decamelize": "npm:decamelize@1.2.0",
      "loud-rejection": "npm:loud-rejection@1.6.0",
      "map-obj": "npm:map-obj@1.0.1",
      "minimist": "npm:minimist@1.2.0",
      "normalize-package-data": "npm:normalize-package-data@2.4.0",
      "object-assign": "npm:object-assign@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "read-pkg-up": "npm:read-pkg-up@1.0.1",
      "redent": "npm:redent@1.0.0",
      "trim-newlines": "npm:trim-newlines@1.0.0"
    },
    "npm:micromatch@2.3.11": {
      "arr-diff": "npm:arr-diff@2.0.0",
      "array-unique": "npm:array-unique@0.2.1",
      "braces": "npm:braces@1.8.5",
      "expand-brackets": "npm:expand-brackets@0.1.5",
      "extglob": "npm:extglob@0.3.2",
      "filename-regex": "npm:filename-regex@2.0.1",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "kind-of": "npm:kind-of@3.2.2",
      "normalize-path": "npm:normalize-path@2.1.1",
      "object.omit": "npm:object.omit@2.0.1",
      "parse-glob": "npm:parse-glob@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-cache": "npm:regex-cache@0.4.4"
    },
    "npm:micromatch@3.1.10": {
      "arr-diff": "npm:arr-diff@4.0.0",
      "array-unique": "npm:array-unique@0.3.2",
      "braces": "npm:braces@2.3.2",
      "define-property": "npm:define-property@2.0.2",
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "extglob": "npm:extglob@2.0.4",
      "fragment-cache": "npm:fragment-cache@0.2.1",
      "kind-of": "npm:kind-of@6.0.2",
      "nanomatch": "npm:nanomatch@1.2.9",
      "object.pick": "npm:object.pick@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:mime-db@1.33.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.18": {
      "mime-db": "npm:mime-db@1.33.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:minimatch@0.2.14": {
      "lru-cache": "npm:lru-cache@2.7.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@3.0.4": {
      "brace-expansion": "npm:brace-expansion@1.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mixin-deep@1.3.1": {
      "for-in": "npm:for-in@1.0.2",
      "is-extendable": "npm:is-extendable@1.0.1"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mocha@2.5.3": {
      "css": "github:systemjs/plugin-css@0.1.36",
      "debug": "npm:debug@2.6.9"
    },
    "npm:multipipe@0.1.2": {
      "duplexer2": "npm:duplexer2@0.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:nan@2.10.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nan@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nanomatch@1.2.9": {
      "arr-diff": "npm:arr-diff@4.0.0",
      "array-unique": "npm:array-unique@0.3.2",
      "define-property": "npm:define-property@2.0.2",
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "fragment-cache": "npm:fragment-cache@0.2.1",
      "is-odd": "npm:is-odd@2.0.0",
      "is-windows": "npm:is-windows@1.0.2",
      "kind-of": "npm:kind-of@6.0.2",
      "object.pick": "npm:object.pick@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:natives@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:ncname@1.0.0": {
      "xml-char-classes": "npm:xml-char-classes@1.0.0"
    },
    "npm:neo-async@2.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:next-tick@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ng-annotate-loader@0.0.10": {
      "loader-utils": "npm:loader-utils@0.2.17",
      "ng-annotate": "npm:ng-annotate@1.2.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "source-map": "npm:source-map@0.4.2"
    },
    "npm:ng-annotate@1.2.2": {
      "acorn": "npm:acorn@2.6.4",
      "alter": "npm:alter@0.2.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "convert-source-map": "npm:convert-source-map@1.1.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.6.1",
      "ordered-ast-traverse": "npm:ordered-ast-traverse@1.1.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "simple-fmt": "npm:simple-fmt@0.1.0",
      "simple-is": "npm:simple-is@0.2.0",
      "source-map": "npm:source-map@0.5.7",
      "stable": "npm:stable@0.1.7",
      "stringmap": "npm:stringmap@0.2.2",
      "stringset": "npm:stringset@0.2.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tryor": "npm:tryor@0.1.2"
    },
    "npm:ng-file-upload@12.2.13": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-gyp@3.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.11",
      "glob": "npm:glob@7.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "minimatch": "npm:minimatch@3.0.4",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nopt": "npm:nopt@3.0.6",
      "npmlog": "npm:npmlog@4.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "osenv": "npm:osenv@0.1.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "request": "npm:request@2.79.0",
      "rimraf": "npm:rimraf@2.6.2",
      "semver": "npm:semver@5.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tar": "npm:tar@2.2.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "which": "npm:which@1.3.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-libs-browser@0.5.3": {
      "assert": "npm:assert@1.4.1",
      "browserify-zlib": "npm:browserify-zlib@0.1.4",
      "buffer": "npm:buffer@3.6.0",
      "console-browserify": "npm:console-browserify@1.1.0",
      "constants-browserify": "npm:constants-browserify@0.0.1",
      "crypto-browserify": "npm:crypto-browserify@3.2.8",
      "domain-browser": "npm:domain-browser@1.2.0",
      "events": "npm:events@1.0.2",
      "http-browserify": "npm:http-browserify@1.7.0",
      "https-browserify": "npm:https-browserify@0.0.0",
      "os-browserify": "npm:os-browserify@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-browserify": "npm:path-browserify@0.0.0",
      "process": "npm:process@0.11.10",
      "punycode": "npm:punycode@1.3.2",
      "querystring-es3": "npm:querystring-es3@0.2.1",
      "readable-stream": "npm:readable-stream@1.1.14",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "timers-browserify": "npm:timers-browserify@1.4.2",
      "tty-browserify": "npm:tty-browserify@0.0.0",
      "url": "npm:url@0.10.3",
      "util": "npm:util@0.10.3",
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:node-libs-browser@2.1.0": {
      "assert": "npm:assert@1.4.1",
      "browserify-zlib": "npm:browserify-zlib@0.2.0",
      "buffer": "npm:buffer@4.9.1",
      "console-browserify": "npm:console-browserify@1.1.0",
      "constants-browserify": "npm:constants-browserify@1.0.0",
      "crypto-browserify": "npm:crypto-browserify@3.12.0",
      "domain-browser": "npm:domain-browser@1.2.0",
      "events": "npm:events@1.0.2",
      "https-browserify": "npm:https-browserify@1.0.0",
      "os-browserify": "npm:os-browserify@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-browserify": "npm:path-browserify@0.0.0",
      "process": "npm:process@0.11.10",
      "punycode": "npm:punycode@1.3.2",
      "querystring-es3": "npm:querystring-es3@0.2.1",
      "readable-stream": "npm:readable-stream@2.3.6",
      "stream-browserify": "npm:stream-browserify@2.0.1",
      "stream-http": "npm:stream-http@2.8.1",
      "string_decoder": "npm:string_decoder@1.0.3",
      "timers-browserify": "npm:timers-browserify@2.0.10",
      "tty-browserify": "npm:tty-browserify@0.0.0",
      "url": "npm:url@0.11.0",
      "util": "npm:util@0.10.3",
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:node-pre-gyp@0.6.39": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "detect-libc": "npm:detect-libc@1.0.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "hawk": "npm:hawk@3.1.3",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nopt": "npm:nopt@4.0.1",
      "npmlog": "npm:npmlog@4.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.2.6",
      "request": "npm:request@2.81.0",
      "rimraf": "npm:rimraf@2.6.2",
      "semver": "npm:semver@5.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tar": "npm:tar@2.2.1",
      "tar-pack": "npm:tar-pack@3.4.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-sass@3.13.1": {
      "async-foreach": "npm:async-foreach@0.1.3",
      "chalk": "npm:chalk@1.1.1",
      "cross-spawn": "npm:cross-spawn@3.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gaze": "npm:gaze@1.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "glob": "npm:glob@7.1.2",
      "in-publish": "npm:in-publish@2.0.0",
      "lodash.assign": "npm:lodash.assign@4.2.0",
      "lodash.clonedeep": "npm:lodash.clonedeep@4.5.0",
      "meow": "npm:meow@3.7.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nan": "npm:nan@2.10.0",
      "node-gyp": "npm:node-gyp@3.6.2",
      "npmlog": "npm:npmlog@4.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "request": "npm:request@2.79.0",
      "sass-graph": "npm:sass-graph@2.2.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:node-sass@4.8.3": {
      "async-foreach": "npm:async-foreach@0.1.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chalk": "npm:chalk@1.1.1",
      "cross-spawn": "npm:cross-spawn@3.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gaze": "npm:gaze@1.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "glob": "npm:glob@7.1.2",
      "in-publish": "npm:in-publish@2.0.0",
      "lodash.assign": "npm:lodash.assign@4.2.0",
      "lodash.clonedeep": "npm:lodash.clonedeep@4.5.0",
      "lodash.mergewith": "npm:lodash.mergewith@4.6.1",
      "meow": "npm:meow@3.7.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nan": "npm:nan@2.10.0",
      "node-gyp": "npm:node-gyp@3.6.2",
      "npmlog": "npm:npmlog@4.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "request": "npm:request@2.79.0",
      "sass-graph": "npm:sass-graph@2.2.4",
      "stdout-stream": "npm:stdout-stream@1.4.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "true-case-path": "npm:true-case-path@1.0.2"
    },
    "npm:nopt@3.0.6": {
      "abbrev": "npm:abbrev@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nopt@4.0.1": {
      "abbrev": "npm:abbrev@1.1.1",
      "osenv": "npm:osenv@0.1.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:normalize-package-data@2.4.0": {
      "hosted-git-info": "npm:hosted-git-info@2.6.0",
      "is-builtin-module": "npm:is-builtin-module@1.0.0",
      "semver": "npm:semver@5.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "validate-npm-package-license": "npm:validate-npm-package-license@3.0.3"
    },
    "npm:normalize-path@2.1.1": {
      "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0"
    },
    "npm:normalize-url@1.9.1": {
      "object-assign": "npm:object-assign@4.1.0",
      "prepend-http": "npm:prepend-http@1.0.4",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "query-string": "npm:query-string@4.3.4",
      "sort-keys": "npm:sort-keys@1.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:npm-run-path@2.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-key": "npm:path-key@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:npmlog@4.1.2": {
      "are-we-there-yet": "npm:are-we-there-yet@1.1.4",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gauge": "npm:gauge@2.7.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "set-blocking": "npm:set-blocking@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:null-check@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:oauth-sign@0.8.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:object-copy@0.1.0": {
      "copy-descriptor": "npm:copy-descriptor@0.1.1",
      "define-property": "npm:define-property@0.2.5",
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:object-visit@1.0.1": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:object.defaults@1.1.0": {
      "array-each": "npm:array-each@1.0.1",
      "array-slice": "npm:array-slice@1.1.0",
      "for-own": "npm:for-own@1.0.0",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:object.map@1.0.1": {
      "for-own": "npm:for-own@1.0.0",
      "make-iterator": "npm:make-iterator@1.0.1"
    },
    "npm:object.omit@2.0.1": {
      "for-own": "npm:for-own@0.1.5",
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:object.pick@1.3.0": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:optimist@0.6.1": {
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:orchestrator@0.3.8": {
      "end-of-stream": "npm:end-of-stream@0.1.5",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sequencify": "npm:sequencify@0.0.7",
      "stream-consume": "npm:stream-consume@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ordered-ast-traverse@1.1.1": {
      "ordered-esprima-props": "npm:ordered-esprima-props@1.1.0"
    },
    "npm:ordered-read-streams@0.1.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-browserify@0.3.0": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-locale@1.4.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "lcid": "npm:lcid@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-locale@2.1.0": {
      "execa": "npm:execa@0.7.0",
      "lcid": "npm:lcid@1.0.0",
      "mem": "npm:mem@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-tmpdir@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:osenv@0.1.5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os-homedir": "npm:os-homedir@1.0.2",
      "os-tmpdir": "npm:os-tmpdir@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:p-limit@1.2.0": {
      "p-try": "npm:p-try@1.0.0"
    },
    "npm:p-locate@2.0.0": {
      "p-limit": "npm:p-limit@1.2.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pako@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:param-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3"
    },
    "npm:parse-asn1@5.1.1": {
      "asn1.js": "npm:asn1.js@4.10.1",
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.14",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:parse-filepath@1.0.2": {
      "is-absolute": "npm:is-absolute@1.0.0",
      "map-cache": "npm:map-cache@0.2.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-root": "npm:path-root@0.1.1"
    },
    "npm:parse-glob@3.0.4": {
      "glob-base": "npm:glob-base@0.3.0",
      "is-dotfile": "npm:is-dotfile@1.0.3",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1"
    },
    "npm:parse-json@2.2.0": {
      "error-ex": "npm:error-ex@1.3.1"
    },
    "npm:parsejson@0.0.3": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseqs@0.0.5": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.5": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseurl@1.3.2": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:pascal-case@1.1.2": {
      "camel-case": "npm:camel-case@1.2.2",
      "upper-case-first": "npm:upper-case-first@1.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3"
    },
    "npm:path-dirname@1.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-exists@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:path-exists@3.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-is-absolute@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-inside@1.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-key@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-parse@1.0.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-root@0.1.1": {
      "path-root-regex": "npm:path-root-regex@0.1.2"
    },
    "npm:path-type@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:path-type@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "pify": "npm:pify@2.3.0"
    },
    "npm:pbkdf2-compat@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:pbkdf2@3.0.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:performance-now@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pify@2.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pinkie-promise@2.0.1": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:pkg-dir@1.0.0": {
      "find-up": "npm:find-up@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:postcss-calc@5.3.1": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "reduce-css-calc": "npm:reduce-css-calc@1.3.0"
    },
    "npm:postcss-colormin@2.2.2": {
      "colormin": "npm:colormin@1.1.2",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-convert-values@2.6.1": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-discard-comments@2.0.4": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-discard-duplicates@2.1.0": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-discard-empty@2.1.0": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-discard-overridden@0.1.1": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-discard-unused@2.2.3": {
      "postcss": "npm:postcss@5.2.18",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-filter-plugins@2.0.2": {
      "postcss": "npm:postcss@5.2.18",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uniqid": "npm:uniqid@4.1.1"
    },
    "npm:postcss-merge-idents@2.1.7": {
      "has": "npm:has@1.0.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-merge-longhand@2.0.2": {
      "postcss": "npm:postcss@5.2.18",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-merge-rules@2.1.2": {
      "browserslist": "npm:browserslist@1.7.7",
      "caniuse-api": "npm:caniuse-api@1.6.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3",
      "vendors": "npm:vendors@1.0.1"
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "object-assign": "npm:object-assign@4.1.0",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-minify-gradients@1.0.5": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-minify-params@1.2.2": {
      "alphanum-sort": "npm:alphanum-sort@1.0.2",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-minify-selectors@2.1.1": {
      "alphanum-sort": "npm:alphanum-sort@1.0.2",
      "has": "npm:has@1.0.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3"
    },
    "npm:postcss-modules-extract-imports@1.0.0-beta2": {
      "postcss": "npm:postcss@5.2.18",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-modules-local-by-default@1.0.0-beta1": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-modules-scope@1.0.0-beta2": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.2.18",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-normalize-charset@1.1.1": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-normalize-url@3.0.8": {
      "is-absolute-url": "npm:is-absolute-url@2.1.0",
      "normalize-url": "npm:normalize-url@1.9.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-ordered-values@2.2.3": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-reduce-idents@2.4.0": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-reduce-initial@1.0.1": {
      "postcss": "npm:postcss@5.2.18",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:postcss-reduce-transforms@1.0.4": {
      "has": "npm:has@1.0.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-selector-parser@2.2.3": {
      "flatten": "npm:flatten@1.0.2",
      "indexes-of": "npm:indexes-of@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:postcss-svgo@2.1.6": {
      "is-svg": "npm:is-svg@2.1.0",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "svgo": "npm:svgo@0.7.2"
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "alphanum-sort": "npm:alphanum-sort@1.0.2",
      "postcss": "npm:postcss@5.2.18",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-zindex@2.2.0": {
      "has": "npm:has@1.0.1",
      "postcss": "npm:postcss@5.2.18",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss@5.2.18": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chalk": "npm:chalk@1.1.3",
      "js-base64": "npm:js-base64@2.4.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "supports-color": "npm:supports-color@3.2.3"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:pseudomap@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:public-encrypt@4.0.2": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.1",
      "randombytes": "npm:randombytes@2.0.6"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@2.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@4.3.4": {
      "object-assign": "npm:object-assign@4.1.0",
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:randomatic@1.1.7": {
      "is-number": "npm:is-number@3.0.0",
      "kind-of": "npm:kind-of@4.0.0"
    },
    "npm:randombytes@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:randomfill@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "randombytes": "npm:randombytes@2.0.6",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:raw-body@2.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "bytes": "npm:bytes@3.0.0",
      "http-errors": "npm:http-errors@1.6.2",
      "iconv-lite": "npm:iconv-lite@0.4.19",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:rc@1.2.6": {
      "deep-extend": "npm:deep-extend@0.4.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.5",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@2.0.1"
    },
    "npm:read-pkg-up@1.0.1": {
      "find-up": "npm:find-up@1.1.2",
      "read-pkg": "npm:read-pkg@1.1.0"
    },
    "npm:read-pkg-up@2.0.0": {
      "find-up": "npm:find-up@2.1.0",
      "read-pkg": "npm:read-pkg@2.0.0"
    },
    "npm:read-pkg@1.1.0": {
      "load-json-file": "npm:load-json-file@1.1.0",
      "normalize-package-data": "npm:normalize-package-data@2.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-type": "npm:path-type@1.1.0"
    },
    "npm:read-pkg@2.0.0": {
      "load-json-file": "npm:load-json-file@2.0.0",
      "normalize-package-data": "npm:normalize-package-data@2.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-type": "npm:path-type@2.0.0"
    },
    "npm:readable-stream@1.0.34": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readable-stream@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@2.0.0",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.1.1",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readdirp@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:rechoir@0.6.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve": "npm:resolve@1.7.1"
    },
    "npm:redent@1.0.0": {
      "indent-string": "npm:indent-string@2.1.0",
      "strip-indent": "npm:strip-indent@1.0.1"
    },
    "npm:reduce-css-calc@1.3.0": {
      "balanced-match": "npm:balanced-match@0.4.2",
      "math-expression-evaluator": "npm:math-expression-evaluator@1.2.17",
      "reduce-function-call": "npm:reduce-function-call@1.0.2"
    },
    "npm:reduce-function-call@1.0.2": {
      "balanced-match": "npm:balanced-match@0.4.2"
    },
    "npm:regenerator-runtime@0.10.5": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:regenerator-runtime@0.11.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:regenerator-transform@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "private": "npm:private@0.1.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:regex-cache@0.4.4": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
    },
    "npm:regex-not@1.0.2": {
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "safe-regex": "npm:safe-regex@1.1.0"
    },
    "npm:regexpu-core@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerate": "npm:regenerate@1.3.3",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:relateurl@0.2.7": {
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:remove-trailing-separator@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:repeat-string@0.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:repeating@2.0.1": {
      "is-finite": "npm:is-finite@1.0.2"
    },
    "npm:replace-ext@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:request@2.79.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.7.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.1",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@2.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.6",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.18",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.3.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.3.4",
      "tunnel-agent": "npm:tunnel-agent@0.4.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "uuid": "npm:uuid@3.2.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:request@2.81.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.7.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "caseless": "npm:caseless@0.12.0",
      "combined-stream": "npm:combined-stream@1.0.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.1",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@2.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@4.2.1",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.18",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "performance-now": "npm:performance-now@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.4.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.3.4",
      "tunnel-agent": "npm:tunnel-agent@0.6.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "uuid": "npm:uuid@3.2.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:require-directory@2.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:require-main-filename@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:resolve-dir@1.0.1": {
      "expand-tilde": "npm:expand-tilde@2.0.2",
      "global-modules": "npm:global-modules@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:resolve@1.7.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-parse": "npm:path-parse@1.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4"
    },
    "npm:rimraf@2.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@2.0.2",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:run-sequence@1.2.2": {
      "chalk": "npm:chalk@1.1.1",
      "gulp-util": "npm:gulp-util@3.0.8"
    },
    "npm:safe-buffer@5.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:safe-regex@1.1.0": {
      "ret": "npm:ret@0.1.15"
    },
    "npm:sass-graph@2.2.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.2",
      "lodash": "npm:lodash@4.17.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "scss-tokenizer": "npm:scss-tokenizer@0.2.3",
      "yargs": "npm:yargs@7.1.0"
    },
    "npm:sass-loader@4.1.1": {
      "async": "npm:async@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "loader-utils": "npm:loader-utils@0.2.17",
      "node-sass": "npm:node-sass@4.8.3",
      "object-assign": "npm:object-assign@4.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "webpack": "npm:webpack@1.15.0"
    },
    "npm:sax@1.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:scss-tokenizer@0.2.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.4.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "source-map": "npm:source-map@0.4.2"
    },
    "npm:semver@4.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sentence-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.4"
    },
    "npm:set-blocking@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:set-value@0.4.3": {
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "is-extendable": "npm:is-extendable@0.1.1",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "to-object-path": "npm:to-object-path@0.3.0"
    },
    "npm:set-value@2.0.0": {
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "is-extendable": "npm:is-extendable@0.1.1",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "split-string": "npm:split-string@3.1.0"
    },
    "npm:setimmediate@1.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.2.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:sha.js@2.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:shebang-command@1.2.0": {
      "shebang-regex": "npm:shebang-regex@1.0.0"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:signal-exit@3.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:simplemde@1.11.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "codemirror": "npm:codemirror@5.36.0",
      "codemirror-spell-checker": "npm:codemirror-spell-checker@1.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "marked": "npm:marked@0.3.19",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:snake-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3"
    },
    "npm:snapdragon-node@2.1.1": {
      "define-property": "npm:define-property@1.0.0",
      "isobject": "npm:isobject@3.0.1",
      "snapdragon-util": "npm:snapdragon-util@3.0.1"
    },
    "npm:snapdragon-util@3.0.1": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:snapdragon@0.8.2": {
      "base": "npm:base@0.11.2",
      "debug": "npm:debug@2.3.3",
      "define-property": "npm:define-property@0.2.5",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "map-cache": "npm:map-cache@0.2.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "source-map": "npm:source-map@0.5.7",
      "source-map-resolve": "npm:source-map-resolve@0.5.1",
      "use": "npm:use@3.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-adapter@0.5.0": {
      "debug": "npm:debug@2.3.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@2.3.1"
    },
    "npm:socket.io-client@1.7.4": {
      "backo2": "npm:backo2@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "component-bind": "npm:component-bind@1.0.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "debug": "npm:debug@2.3.3",
      "engine.io-client": "npm:engine.io-client@1.8.5",
      "has-binary": "npm:has-binary@0.1.7",
      "indexof": "npm:indexof@0.0.1",
      "object-component": "npm:object-component@0.0.3",
      "parseuri": "npm:parseuri@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@2.3.1",
      "to-array": "npm:to-array@0.1.4"
    },
    "npm:socket.io-parser@2.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@2.2.0",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.3.2"
    },
    "npm:socket.io@1.7.4": {
      "debug": "npm:debug@2.3.3",
      "engine.io": "npm:engine.io@1.8.5",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has-binary": "npm:has-binary@0.1.7",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-adapter": "npm:socket.io-adapter@0.5.0",
      "socket.io-client": "npm:socket.io-client@1.7.4",
      "socket.io-parser": "npm:socket.io-parser@2.3.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sort-keys@1.1.2": {
      "is-plain-obj": "npm:is-plain-obj@1.1.0"
    },
    "npm:source-list-map@0.1.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-list-map@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-resolve@0.5.1": {
      "atob": "npm:atob@2.1.0",
      "decode-uri-component": "npm:decode-uri-component@0.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "resolve-url": "npm:resolve-url@0.2.1",
      "source-map-url": "npm:source-map-url@0.4.0",
      "urix": "npm:urix@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:source-map-support@0.4.18": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.2": {
      "amdefine": "npm:amdefine@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sparkles@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:spdx-correct@3.0.0": {
      "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0",
      "spdx-license-ids": "npm:spdx-license-ids@3.0.0"
    },
    "npm:spdx-expression-parse@3.0.0": {
      "spdx-exceptions": "npm:spdx-exceptions@2.1.0",
      "spdx-license-ids": "npm:spdx-license-ids@3.0.0"
    },
    "npm:split-string@3.1.0": {
      "extend-shallow": "npm:extend-shallow@3.0.2"
    },
    "npm:sshpk@1.14.1": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@1.0.0",
      "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.14.1",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "getpass": "npm:getpass@0.1.7",
      "jsbn": "npm:jsbn@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.14.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:static-extend@0.1.2": {
      "define-property": "npm:define-property@0.2.5",
      "object-copy": "npm:object-copy@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:statuses@1.3.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:statuses@1.5.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:stdout-stream@1.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:stream-browserify@2.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@2.3.6"
    },
    "npm:stream-http@2.8.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:string-width@1.0.2": {
      "code-point-at": "npm:code-point-at@1.1.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:string-width@2.1.1": {
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0",
      "strip-ansi": "npm:strip-ansi@4.0.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:string_decoder@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:strip-ansi@4.0.0": {
      "ansi-regex": "npm:ansi-regex@3.0.0"
    },
    "npm:strip-bom@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "first-chunk-stream": "npm:first-chunk-stream@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-utf8": "npm:is-utf8@0.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:strip-bom@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "is-utf8": "npm:is-utf8@0.2.1"
    },
    "npm:strip-indent@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:style-loader@0.12.4": {
      "loader-utils": "npm:loader-utils@0.2.17",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.2.3": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@4.5.0": {
      "has-flag": "npm:has-flag@2.0.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:svgo@0.7.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "coa": "npm:coa@1.0.4",
      "colors": "npm:colors@1.1.2",
      "csso": "npm:csso@2.3.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-yaml": "npm:js-yaml@3.7.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sax": "npm:sax@1.2.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "whet.extend": "npm:whet.extend@0.9.9"
    },
    "npm:swap-case@1.1.2": {
      "lower-case": "npm:lower-case@1.1.4",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:tar-pack@3.4.1": {
      "debug": "npm:debug@2.3.3",
      "fstream": "npm:fstream@1.0.11",
      "fstream-ignore": "npm:fstream-ignore@1.0.5",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "rimraf": "npm:rimraf@2.6.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tar": "npm:tar@2.2.1",
      "uid-number": "npm:uid-number@0.0.6",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:tar@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "block-stream": "npm:block-stream@0.0.9",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.11",
      "inherits": "npm:inherits@2.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through2@2.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:tildify@1.2.0": {
      "os-homedir": "npm:os-homedir@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:timers-browserify@2.0.10": {
      "setimmediate": "npm:setimmediate@1.0.5"
    },
    "npm:title-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:tmp@0.0.33": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os-tmpdir": "npm:os-tmpdir@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:to-arraybuffer@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:to-object-path@0.3.0": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:to-regex-range@2.1.1": {
      "is-number": "npm:is-number@3.0.0",
      "repeat-string": "npm:repeat-string@1.6.1"
    },
    "npm:to-regex@3.0.2": {
      "define-property": "npm:define-property@2.0.2",
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "regex-not": "npm:regex-not@1.0.2",
      "safe-regex": "npm:safe-regex@1.1.0"
    },
    "npm:tough-cookie@2.3.4": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "npm:punycode@1.4.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:true-case-path@1.0.2": {
      "glob": "npm:glob@6.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:tunnel-agent@0.4.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:type-is@1.6.16": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.18"
    },
    "npm:typo-js@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:uglify-js@2.6.4": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "yargs": "npm:yargs@3.10.0"
    },
    "npm:uglify-js@2.8.29": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "yargs": "npm:yargs@3.10.0"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:uglifyjs-webpack-plugin@0.4.6": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "uglify-js": "npm:uglify-js@2.8.29",
      "webpack": "npm:webpack@3.11.0",
      "webpack-sources": "npm:webpack-sources@1.1.0"
    },
    "npm:uid-number@0.0.6": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ultron@1.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:union-value@1.0.0": {
      "arr-union": "npm:arr-union@3.1.0",
      "get-value": "npm:get-value@2.0.6",
      "is-extendable": "npm:is-extendable@0.1.1",
      "set-value": "npm:set-value@0.4.3"
    },
    "npm:uniqid@4.1.1": {
      "macaddress": "npm:macaddress@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uniqs@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:unique-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:unset-value@1.0.0": {
      "has-value": "npm:has-value@0.3.1",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:upath@1.0.4": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:upper-case-first@1.1.2": {
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:uri-js@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "npm:punycode@2.1.0"
    },
    "npm:urix@0.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.11.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0"
    },
    "npm:use@3.1.0": {
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:useragent@2.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lru-cache": "npm:lru-cache@4.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tmp": "npm:tmp@0.0.33",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:utf-8-validate@1.2.2": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.4.0"
    },
    "npm:utf8@2.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uuid@3.2.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:v8flags@2.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:validate-npm-package-license@3.0.3": {
      "spdx-correct": "npm:spdx-correct@3.0.0",
      "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0"
    },
    "npm:vendors@1.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:verror@1.10.0": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "extsprintf": "npm:extsprintf@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vinyl-fs@0.3.14": {
      "defaults": "npm:defaults@1.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob-stream": "npm:glob-stream@3.1.18",
      "glob-watcher": "npm:glob-watcher@0.0.6",
      "graceful-fs": "npm:graceful-fs@3.0.11",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-bom": "npm:strip-bom@1.0.0",
      "through2": "npm:through2@0.6.5",
      "vinyl": "npm:vinyl@0.4.6"
    },
    "npm:vinyl@0.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "clone": "npm:clone@0.2.0",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vinyl@0.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "clone": "npm:clone@1.0.4",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:void-elements@2.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:watchpack@1.5.0": {
      "chokidar": "npm:chokidar@2.0.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "neo-async": "npm:neo-async@2.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:webpack-dev-middleware@1.12.2": {
      "memory-fs": "npm:memory-fs@0.4.1",
      "mime": "npm:mime@1.6.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "time-stamp": "npm:time-stamp@2.0.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "webpack": "npm:webpack@3.11.0"
    },
    "npm:webpack-hot-middleware@2.22.1": {
      "ansi-html": "npm:ansi-html@0.0.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "html-entities": "npm:html-entities@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "npm:querystring@0.2.0",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:webpack-sources@1.1.0": {
      "source-list-map": "npm:source-list-map@2.0.0",
      "source-map": "npm:source-map@0.6.1"
    },
    "npm:webpack@1.15.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "node-libs-browser": "npm:node-libs-browser@0.5.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:webpack@2.7.0": {
      "acorn": "npm:acorn@5.5.3",
      "acorn-dynamic-import": "npm:acorn-dynamic-import@2.0.2",
      "ajv": "npm:ajv@4.11.8",
      "ajv-keywords": "npm:ajv-keywords@1.5.1",
      "async": "npm:async@2.6.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "enhanced-resolve": "npm:enhanced-resolve@3.4.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "interpret": "npm:interpret@1.1.0",
      "json-loader": "npm:json-loader@0.5.7",
      "json5": "npm:json5@0.5.1",
      "loader-runner": "npm:loader-runner@2.3.0",
      "loader-utils": "npm:loader-utils@0.2.17",
      "memory-fs": "npm:memory-fs@0.4.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "node-libs-browser": "npm:node-libs-browser@2.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "supports-color": "npm:supports-color@3.2.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tapable": "npm:tapable@0.2.8",
      "uglify-js": "npm:uglify-js@2.8.29",
      "vm": "github:jspm/nodelibs-vm@0.1.0",
      "watchpack": "npm:watchpack@1.5.0",
      "webpack-sources": "npm:webpack-sources@1.1.0",
      "yargs": "npm:yargs@6.6.0"
    },
    "npm:webpack@3.11.0": {
      "acorn": "npm:acorn@5.5.3",
      "acorn-dynamic-import": "npm:acorn-dynamic-import@2.0.2",
      "ajv": "npm:ajv@6.4.0",
      "ajv-keywords": "npm:ajv-keywords@3.1.0",
      "async": "npm:async@2.6.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "enhanced-resolve": "npm:enhanced-resolve@3.4.1",
      "escope": "npm:escope@3.6.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "interpret": "npm:interpret@1.1.0",
      "json-loader": "npm:json-loader@0.5.7",
      "json5": "npm:json5@0.5.1",
      "loader-runner": "npm:loader-runner@2.3.0",
      "loader-utils": "npm:loader-utils@1.1.0",
      "memory-fs": "npm:memory-fs@0.4.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "node-libs-browser": "npm:node-libs-browser@2.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "supports-color": "npm:supports-color@4.5.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tapable": "npm:tapable@0.2.8",
      "uglifyjs-webpack-plugin": "npm:uglifyjs-webpack-plugin@0.4.6",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0",
      "watchpack": "npm:watchpack@1.5.0",
      "webpack-sources": "npm:webpack-sources@1.1.0",
      "yargs": "npm:yargs@8.0.2"
    },
    "npm:which@1.3.0": {
      "isexe": "npm:isexe@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:wide-align@1.1.2": {
      "string-width": "npm:string-width@1.0.2"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:window-size@0.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:wrap-ansi@2.1.0": {
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:ws@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "bufferutil": "npm:bufferutil@1.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.2.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:y18n@3.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs-parser@4.2.1": {
      "camelcase": "npm:camelcase@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs-parser@5.0.0": {
      "camelcase": "npm:camelcase@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs-parser@7.0.0": {
      "camelcase": "npm:camelcase@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs@3.10.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.0"
    },
    "npm:yargs@3.32.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@2.1.1",
      "cliui": "npm:cliui@3.2.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "string-width": "npm:string-width@1.0.2",
      "window-size": "npm:window-size@0.1.4",
      "y18n": "npm:y18n@3.2.1"
    },
    "npm:yargs@6.6.0": {
      "camelcase": "npm:camelcase@3.0.0",
      "cliui": "npm:cliui@3.2.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-caller-file": "npm:get-caller-file@1.0.2",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "read-pkg-up": "npm:read-pkg-up@1.0.1",
      "require-directory": "npm:require-directory@2.1.1",
      "require-main-filename": "npm:require-main-filename@1.0.1",
      "set-blocking": "npm:set-blocking@2.0.0",
      "string-width": "npm:string-width@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "which-module": "npm:which-module@1.0.0",
      "y18n": "npm:y18n@3.2.1",
      "yargs-parser": "npm:yargs-parser@4.2.1"
    },
    "npm:yargs@7.1.0": {
      "camelcase": "npm:camelcase@3.0.0",
      "cliui": "npm:cliui@3.2.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-caller-file": "npm:get-caller-file@1.0.2",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "read-pkg-up": "npm:read-pkg-up@1.0.1",
      "require-directory": "npm:require-directory@2.1.1",
      "require-main-filename": "npm:require-main-filename@1.0.1",
      "set-blocking": "npm:set-blocking@2.0.0",
      "string-width": "npm:string-width@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "which-module": "npm:which-module@1.0.0",
      "y18n": "npm:y18n@3.2.1",
      "yargs-parser": "npm:yargs-parser@5.0.0"
    },
    "npm:yargs@8.0.2": {
      "camelcase": "npm:camelcase@4.1.0",
      "cliui": "npm:cliui@3.2.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-caller-file": "npm:get-caller-file@1.0.2",
      "os-locale": "npm:os-locale@2.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "read-pkg-up": "npm:read-pkg-up@2.0.0",
      "require-directory": "npm:require-directory@2.1.1",
      "require-main-filename": "npm:require-main-filename@1.0.1",
      "set-blocking": "npm:set-blocking@2.0.0",
      "string-width": "npm:string-width@2.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "which-module": "npm:which-module@2.0.0",
      "y18n": "npm:y18n@3.2.1",
      "yargs-parser": "npm:yargs-parser@7.0.0"
    }
  }
});
