// Initialize and add the map
function initMap() {
    // The location of my ancetral home in New York
    const patchoguehouse = { lat: 40.77282767944372, lng: -73.01558827273769 };
    // The map, centered at old home
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: patchoguehouse,
    });
    // The marker, positioned at 264 North Ocean Ave. Patchogue NY
    const marker = new google.maps.Marker({
      position: patchoguehouse,
      map: map,
    });
  }
  