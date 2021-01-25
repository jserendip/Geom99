// Initialize and add the map
function initMap() {
    // The location of my ancetral home in New York
    const patchoguehouse = { lat: 45.442046, lng: -78.820583 };
    // The map, centered at old home
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: patchoguehouse,
    });
    // The marker, positioned at 264 North Ocean Ave. Patchogue NY
    const marker = new google.maps.Marker({
      position: patchoguehouse,
      map: map,
    });
  
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  const locations = [      
    { lat: 49.758123, lng: -92.65349 },
    { lat: 48.17812017, lng: -90.22694426 },
    { lat: 49.904122, lng: -93.469178 },
    { lat: 49.068974, lng: -93.904116 },
    { lat: 49.690468, lng: -86.902049 },
    { lat: 49.973826, lng: -92.138543 },
    { lat: 49.6816, lng: -94.2359 },
  ];
  