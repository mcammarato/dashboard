$(document).ready(function () {


    // Grab Pocket 

    $.ajax({
        url: '/Home/PocketCall',
        success: function (data) {
            var pocketSource = $('#pocket-template').html();
            var pocketTemplate = Handlebars.compile(pocketSource);
            var pocketHTML = pocketTemplate(data);

            $('#mike-data').html(pocketHTML);
        }
    })

    //Grab Weather Data

    $.get('/Home/WeatherCall', function (response) {
        var temp_f = response['current_observation']['temp_f'];
        var feelslike_f = response['current_observation']['feelslike_f'];
        var city = response['current_observation']['display_location']['city'];
        $('#temp_f').append(temp_f);
        $('#feelslike_f').append(feelslike_f);
        $('#city').append(city);

        // Switch 

        var weather = response['current_observation']['weather'];

        switch (weather) {
            /* Day Time */

            case "Clear": $('#weather-icon').addClass('wi wi-day-sunny');
                break;

            case "Partly Cloudy": $('#weather-icon').addClass('wi wi-day-cloudy');
                break;

            case "Scattered Clouds": $('#weather-icon').addClass('wi wi-day-cloudy-high');
                break;

            case "Overcast": $('#weather-icon').addClass('wi wi-day-sunny-overcast');
                break;

            case "Rain": $('#weather-icon').addClass('wi wi-rain');
                break;

            case "Cloudy": $('#weather-icon').addClass('wi wi-cloud');
                break;

            case "Snow": $('#weather-icon').addClass('wi wi-snow');
                break;

            default: $('#weather-icon').addClass('wi wi-thermometer');
        }

    });

    // Grab Habitica Data
    $.get('/Home/HabiticaCall', function (habiticaResponse) {

        $.each(habiticaResponse.tasks.dailys, function (index, val) {
            $('#todos').append("<p>" + val.text + "</p>");
        });

    });

    // Dragable

    var $draggable = $('.container').draggabilly()


    // Doc ready	
});