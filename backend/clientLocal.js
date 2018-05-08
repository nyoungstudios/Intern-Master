function api_call(input) {
    $.ajax({
        //url: "http://0.0.0.0:5000/getUserJobSuggestionsUYfzhMeZUTThs0pgFEYVJlSlLD43",
        url: "http://0.0.0.0:5000/getUserProjectSuggestionsUYfzhMeZUTThs0pgFEYVJlSlLD43",
	//url: "http://0.0.0.0:5000/updateUsers",
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

