function api_call(input) {
    $.ajax({
	//url: "https://intern-master-deploy.herokuapp.com/getUserJobSuggestionsUYfzhMeZUTThs0pgFEYVJlSlLD43",
        //url: "https://intern-master-deploy.herokuapp.com/getUserProjectSuggestionsUYfzhMeZUTThs0pgFEYVJlSlLD43",
	url: "https://intern-master-deploy.herokuapp.com/updateUsers",

        method: 'GET'
    });
}

$( document ).ready(function() {
    // request when clicking on the button
    $('#btn').click(function() {
        var input = $("#input").val();
        api_call(input);
        input = "";
    });
});

