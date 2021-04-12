"use strict";

mapboxgl.accessToken = mapboxToken;

var newMap = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-97.3322, 32.7518], // starting position [lng, lat]
    zoom: 11 // starting zoom
});
geocode("2401 W 7th St, Fort Worth, TX", mapboxToken).then(function (results){
    var popup = new mapboxgl.Popup()
        .setHTML('<h6>Pho District</h6>')

    new mapboxgl.Marker({color: "orange", draggable: true})
        .setLngLat(results)
        .setPopup(popup)
        .addTo(newMap)

})
