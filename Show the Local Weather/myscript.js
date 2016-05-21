var globalUnit = 'c';
$("[name='my-checkbox']").bootstrapSwitch();
loadWeather();

$('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function (event, state) {
    if (state) {
        globalUnit = 'c';
    } else {
        globalUnit = 'f';
    }
    loadWeather();
});

function weather(lat, long) {
    $.simpleWeather({
        location: lat,
        woeid: long,
        unit: globalUnit,
        success: function (weather) {
            $("#location").html(weather.city + ", " + weather.country);
            $("#icon").prop("src", weather.thumbnail)
            $("#weather").html(weather.temp + "&deg;" + weather.units.temp);
        },
        error: function (error) {

        }
    });
}


function loadWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            weather(position.coords.latitude + ',' + position.coords.longitude);
        });
    }
}