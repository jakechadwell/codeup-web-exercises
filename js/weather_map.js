"use strict";

mapboxgl.accessToken = mapboxToken;

var weatherMap = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/jakechadwell/cknf0f8s64aei17oqvg703v98', // style URL
    center: [-97.3308, 32.7555], // starting position [lng, lat]
    zoom: 12 // starting zoom
});
$(document).ready(function (){
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat:32.7555,
        lon:-97.3308,
        appid: OPEN_WEATHER_APPID,
        units: 'imperial',
    }).done(function (results){
        for(var i = 0; i<5 ; i++){
            var content = "";
            content += "<h2>" + results.daily[i].humidity + "</h2>"
            console.log(content);
            $('.card-header' + i).append(content);
        }
    })

});

// var weatherRequest = $.ajax('https://api.openweathermap.org/data/2.5/onecall');
//
// weatherRequest.done(function (data){
//     data.forEach(function (current){
//         if()
//     })
// })
// $(document).ready(function (){
//     $.get('https://api.openweathermap.org/data/2.5/forecast', {
//         q: 'Fort Worth, US',
//         appid: OPEN_WEATHER_APPID,
//         units: 'imperial',
//     }).done(function (results){
//         console.log(results)
//     })
// });