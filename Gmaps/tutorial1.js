// Initialize and add the map
function initMap() {
  // The location of university of New Orleans
  const uno = { lat: 30.0287, lng: -90.0659 };
  // The map, centered at University of New Orleans
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uno,
  });
  // The marker, positioned at UNO
  const marker = new google.maps.Marker({
    position: uno,
    map: map,
  });
}