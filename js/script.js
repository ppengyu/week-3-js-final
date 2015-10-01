console.log("Test 1");

var initialize = function(){

    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      //WHERE TO CENTER THE MAP
      zoom: 8,
      //ZOOM LEVEL OF THE MAP
      mapTypeId: google.maps.MapTypeId.ROADMAP
      //THE TYPE OF MAP I USE
    };
	var map = new google.maps.Map(mapCanvas);


};

window.onload = initialize();
 // google.maps.event.addDomListener(window, 'load', initialize);