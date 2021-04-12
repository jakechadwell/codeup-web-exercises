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
        dt: 1618347600,
        appid: OPEN_WEATHER_APPID,
        units: 'imperial',
    }).done(function (results){
        console.log(results.current);
    })
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat:32.7555,
        lon:-97.3308,
        dt: 1618434000,
        appid: OPEN_WEATHER_APPID,
        units: 'imperial',
    }).done(function (results){
        console.log(results.current);
    })
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat:32.7555,
        lon:-97.3308,
        dt: 1618520400,
        appid: OPEN_WEATHER_APPID,
        units: 'imperial',
    }).done(function (results){
        console.log(results.current);
    })
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat:32.7555,
        lon:-97.3308,
        dt: 1618606800,
        appid: OPEN_WEATHER_APPID,
        units: 'imperial',
    }).done(function (results){
        console.log(results.current);
    })
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat:32.7555,
        lon:-97.3308,
        dt: 1618693200,
        appid: OPEN_WEATHER_APPID,
        units: 'imperial',
    }).done(function (results){
        console.log(results.current);
    })
});
// $(document).ready(function (){
//     $.get('https://api.openweathermap.org/data/2.5/forecast', {
//         q: 'Fort Worth, US',
//         appid: OPEN_WEATHER_APPID,
//         units: 'imperial',
//     }).done(function (results){
//         console.log(results)
//     })
// });