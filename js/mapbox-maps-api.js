"use strict";

mapboxgl.accessToken = mapboxToken;

var newMap = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-97.3514, 32.7507], // starting position [lng, lat]
    zoom: 9 // starting zoom
});