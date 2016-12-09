$(document).ready(function() {
    $("#app-engine").html(navigator.product);
    $("#app-version").html(navigator.appVersion);
    $("#app-useragent").html(navigator.userAgent);
    $("#app-platform").html(navigator.platform);
    $("#app-language").html(navigator.language);
    navigator.geolocation.getCurrentPosition(function(position) {
        $("#app-geolocation").html("Latitude: " + position.coords.latitude + "<br>" + "Longitude: " + position.coords.longitude);
    });

    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        $("#app-ip").html(data.ip);
    });

    $.getJSON("http://ip-api.com/json", function (data) {
        $("#app-city").html(data.city);
        $("#app-org").html(data.org);
    });
});
