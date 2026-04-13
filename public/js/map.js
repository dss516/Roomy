let coordinates1 = JSON.parse(coordinates);

    maptilersdk.config.apiKey = mapApiKey ;
    const map = new maptilersdk.Map({
      container: 'map', // container's id or the HTML element in which the SDK will render the map
      style: "base-v4",
      center: coordinates1, // starting position [lng, lat]
      zoom: 13 //starting zoom
    });

    const popup = new maptilersdk.Popup({ offset: 25 }) // Offset prevents the popup from covering the pin
    .setHTML("<p>Exact location provided after booking!</p>");


    const marker = new maptilersdk.Marker({ color: "#FF0000" })
    .setLngLat(coordinates1)
    .setPopup(popup)
    .addTo(map);