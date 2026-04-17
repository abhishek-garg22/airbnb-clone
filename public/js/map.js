const mapElement = document.getElementById("map");

const listingLat = parseFloat(mapElement.dataset.lat);
const listingLng = parseFloat(mapElement.dataset.lng);
const listingTitle = mapElement.dataset.title;

const map = L.map("map").setView([listingLat, listingLng], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([listingLat, listingLng])
  .addTo(map)
  .bindPopup(listingTitle)
  .openPopup();
