let map = L.map("map").setView([41.491773708746436, -71.31542108773986], 17);
let marker = L.marker([41.491773708746436, -71.31542108773986]).addTo(map);

document.querySelector(".leaflet-marker-icon").src = "./assets/icon-location.svg";

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);