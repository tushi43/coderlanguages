    function locate(){
        navigator.geolocation.getCurrentPosition(initialize,fail);
    }

    function initialize(position) {
        var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		var mapOptions = {
          zoom: 8,
          center: myLatLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map_canvas'),
                                      mapOptions);
        var userMarker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });
      }
	  
     function fail(){
         alert('Navigator.geolocation failed, may not be supported');
     }