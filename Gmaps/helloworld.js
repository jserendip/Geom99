let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.772876, lng: -73.015550 },
    zoom: 14,
  });
}
