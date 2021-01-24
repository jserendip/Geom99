let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.63619811297952, lng: -1.5112934203748902 },
    zoom: 14,
  });
}
