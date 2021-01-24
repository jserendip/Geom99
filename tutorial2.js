// Initialize and add the map
function initMap() {
    // The location of my ancetral home in New York
    const patchoguehouse = { lat: 40.77282767944372, lng: -73.01558827273769 };
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
  }
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
    { lat: 40.75043120704643, lng: -73.00752451016817 },
    { lat: 40.756347936794874, lng: -73.01679422464042 },
    { lat: 40.74731008253978, lng: -73.02640726187092 },
    { lat: 40.761145463908356, lng: -73.01227249429115 },
    { lat: 40.76011339955494, lng: -73.01160730644708 },
    { lat: 40.76189309106897, lng: -73.01345266627257 },
    { lat: 40.776990109564196, lng: -73.0071119241431 },
  ];
  