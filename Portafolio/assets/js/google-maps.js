function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 12.129000, lng: -86.266277};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Managua, NCA' // Title Location
    });
}