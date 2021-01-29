

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: { lat: 2.8, lng: -187.3 },
      mapTypeId: "terrain",
    });
    // Create a <script> tag and set the USGS URL as the source.
    const script = document.createElement("script");
    // This example uses a local copy of the GeoJSON stored at
    // https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojsonp
    script.src =
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojsonp";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  // Loop through the results array and place a marker for each
  // set of coordinates.
  const eqfeed_callback = function (results) {
    const heatmapData = [];
    for (let i = 0; i < results.features.length; i++) {
      const coords = results.features[i].geometry.coordinates;
      const latLng = new google.maps.LatLng(coords[1], coords[0]);
      heatmapData.push(latLng);
    }
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      dissipating: false,
      map: map,
    });
  }
