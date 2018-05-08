function api_call(input) {
    $.ajax({
        url: "http://intern-master-deploy.herokuapp.com/updateUsers",
        method: 'GET',
        //contentType: 'application/json',
        //data: JSON.stringify(input),
        /*success: function( data, textStatus, jQxhr ){
            $('#api_output').html( data.output );
            $("#input").val("");
        },
        error: function( jqXhr, textStatus, errorThrown ){
            $('#api_output').html( "There was an error" );
            console.log( errorThrown );
        },
        timeout: 3000
*/
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
