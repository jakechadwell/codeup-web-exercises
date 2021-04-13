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

        var mainMarker = new mapboxgl.Marker({color: 'orange', draggable: true})
            .setLngLat([-97.3308, 32.7555])
            .addTo(weatherMap)


        function dragEnd(){
            var lngLat = mainMarker.getLngLat();
            weatherMap.flyTo({
                center: [lngLat.lng, lngLat.lat]
            });

            console.log(lngLat);
        }
        mainMarker.on('dragend', dragEnd)


        function injectHtml(id, data){
            var string = (data.weather[0].description).toString()
            var textNode = document.createTextNode(string)
            var string1 = (data.humidity).toString()
            var textNode1 = document.createTextNode(string1)
            var string2 = (data.wind_speed).toString()
            var textNode2 = document.createTextNode(string2)
            var string3 = (data.pressure).toString()
            var textNode3 = document.createTextNode(string3)
            var iconcode = data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";


            document.getElementById("wicon"+id).setAttribute('src', iconurl);
            document.getElementById(id).children[0].children[0].innerHTML = (new Date(data.dt * 1000)).toDateString()
            document.getElementById(id).children[1].children[0].innerHTML = "Temp: " + data.temp.min + "&deg;/" + data.temp.max + "&deg;";
            document.getElementById(id).children[1].children[3].children[0].appendChild(textNode);
            document.getElementById(id).children[1].children[3].children[1].appendChild(textNode1);
            document.getElementById(id).children[1].children[3].children[2].appendChild(textNode2);
            document.getElementById(id).children[1].children[3].children[3].appendChild(textNode3);

        }
        function createCards() {
            var apiCallData = results.daily;
            for (var i = 0; i < 5; i++) {
                injectHtml(i, apiCallData[i]);
            }
        }
        createCards();
        console.log(results)
        console.log(new Date(results.daily[0].dt*1000))
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