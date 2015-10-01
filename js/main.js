var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -28, lng: 137}
  });


  //Load GeoJSON.
map.data.loadGeoJson("google.json");

  // Color each letter gray. Change the color when the isColorful property
  // is set to true.
  // map.data.setStyle(function(feature) {
  //   var color = 'gray';
  //   if (feature.getProperty('isColorful')) {
  //     color = feature.getProperty('color');
  //   }
  //   return /** @type {google.maps.Data.StyleOptions} */({
  //     fillColor: color,
  //     strokeColor: color,
  //     strokeWeight: 2
  //   });
  // });

  // // When the user clicks, set 'isColorful', changing the color of the letters.
  // map.data.addListener('click', function(event) {
  //   event.feature.setProperty('isColorful', true);
  // });

  // // When the user hovers, tempt them to click by outlining the letters.
  // // Call revertStyle() to remove all overrides. This will use the style rules
  // // defined in the function passed to setStyle()
  // map.data.addListener('mouseover', function(event) {
  //   map.data.revertStyle();
  //   map.data.overrideStyle(event.feature, {strokeWeight: 8});
  // });

  // map.data.addListener('mouseout', function(event) {
  //   map.data.revertStyle();
  // });
 }



// //test the link of js
// console.log("Test 1");

// //the style of the map
// var styles =[
//      {
//      "featureType": "road.arterial",
//      "elementType": "geometry.fill",
//      "stylers": [
//        { "visibility": "on" },
//        { "weight": 8 }
//              ]
//              },{
//              "featureType": "road.arterial",
//              "elementType": "geometry.stroke",
//              "stylers": [
//                { "visibility": "off" },
//                { "weight": 8 },
//                { "color": "#808080" }
//              ]
//              },{
//              "featureType": "road.highway",
//              "elementType": "geometry.fill",
//              "stylers": [
//                { "weight": 8 },
//                { "color": "#ffffff" },
//                { "visibility": "on" }
//              ]
//              },{
//                "featureType": "road.local",
//                "elementType": "geometry.stroke",
//                "stylers": [
//                  { "visibility": "on" },
//                  { "color": "#ffffff" }
//                ]
//              },{
//                  "featureType": "road.local",
//                  "elementType": "geometry",
//                  "stylers": [
//                   { "visibility": "on" },
//                   { "color": "#ffffff" },
//                   { "weight": 4.6 }
//                ]
//              },{
//                "featureType": "road.arterial",
//                "elementType": "geometry.stroke",
//                "stylers": [
//                  { "visibility": "off" }
//                ]
//              },{
//                "featureType": "landscape.man_made",
//                "elementType": "geometry.fill",
//                "stylers": [
//                  { "visibility": "on" },
//                  { "color": "#CEECED" }
//                ]
//              },{
//                 "featureType": "road.highway",
//                 "elementType": "geometry.stroke",
//                 "stylers": [
//                   { "visibility": "off" }
//                 ]
//               },{
//               }
//             ]

// //Upper layers
// var aquabluCoords = [
//       {lat: 40.7299086, lng: -74.0321496},
//       {lat: 40.73049466, lng: -74.03170466},
//       {lat: 40.72973041, lng: -74.03133988}
//   ];

 


// function initialize() {

//         //style the map
//         var styledMap = new google.maps.StyledMapType(styles,
//             {name: "Styled Map"});
        
//           // Create a map object, and include the MapTypeId to add
//           // to the map type control.
//         var mapOptions = {
//             zoom: 19,
//             center: new google.maps.LatLng(40.7299086,-74.0321496),
//             disableDefaultUI: true,
//             mapTypeControlOptions: {
//               mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
//             }
//           };
//         var map = new google.maps.Map(document.getElementById('map'),
//             mapOptions);

//         //Associate the styled map with the MapTypeId and set it to display.
//         map.mapTypes.set('map_style', styledMap);
//         map.setMapTypeId('map_style');

         // Construct the polygon.
  // var aquablu = new google.maps.Polygon({
  //   paths: aquabluCoords,
  //   strokeColor: '#FF0000',
  //   strokeOpacity: 0.8,
  //   strokeWeight: 3,
  //   fillColor: '#FF0000',
  //   fillOpacity: 0.35
  // });


  // aquablu.setMap(map);
  // aquablu.addListener('click', aquaInfo);
  // 	// console.log("aquablu testing");
 

  // // infoWindow = new google.maps.InfoWindow;

  // var aquaInfo = function(){
  //  	console.log("aquablu testing");
  //  };
 //  	$('#aquablu').animate({
	// 	"left":"50vw"
	// },1000);

 //  };

//   function showArrays(event) {

   
// }

  // Add a listener for the click event.
  // aquablu.addListener('click', showArrays);

  // infoWindow = new google.maps.InfoWindow;

//       }


// //operate the function      
google.maps.event.addDomListener(window, 'load', initialize);


