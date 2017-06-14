var p = document.getElementById('resize');

p.addEventListener('click', function init() {
    p.removeEventListener('click', init, false);
    p.className = p.className + ' resizable';
    var resizer = document.createElement('div');
    resizer.className = 'resizer';
    p.appendChild(resizer);
    resizer.addEventListener('mousedown', initDrag, false);
}, false);

var startX, startY, startWidth, startHeight;

function initDrag(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
    p.style.width = (startWidth + e.clientX - startX) + 'px';
    p.style.height = (startHeight + e.clientY - startY) + 'px';
    console.log(startWidth, e, startX, p.style.width);
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false); document.documentElement.removeEventListener('mouseup', stopDrag, false);
}


$(document).ready(function () {
    // Grab Pocket Data

    $.get('/Home/PocketCall', function (response) {

        var article_title = response['0'];
        var article_url = response['1'];


        $('#pocket-data').append('<p class="pocket-title"><a href="' + article_url + '">' + article_title + '</a></p>');

        //$.each(response, function (index, val) {

        //    $('#pocket-data').append('<p class="pocket-title"><a href="' + article_url + '">' + article_title + '</a></p>');
        //});
    });

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