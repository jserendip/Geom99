
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,        
    center: { lat: 37.759147895927704, lng: -122.44730171551433 },
    mapTypeId: "terrain",
  });
  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
  map.data.setStyle((feature) => {
    const magnitude = feature.getProperty("mag");
    return {
      icon: getCircle(magnitude),
    };
  });
}

function getCircle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "crimson",
    fillOpacity: 0.2,
    scale: Math.pow(2, magnitude) / 2,
    strokeColor: "white",
    strokeWeight: 0.5,
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}
