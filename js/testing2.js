var styles =[
     {
     "featureType": "road.arterial",
     "elementType": "geometry.fill",
     "stylers": [
       { "visibility": "on" },
       { "weight": 8 }
             ]
             },{
             "featureType": "road.arterial",
             "elementType": "geometry.stroke",
             "stylers": [
               { "visibility": "off" },
               { "weight": 8 },
               { "color": "#808080" }
             ]
             },{
             "featureType": "road.highway",
             "elementType": "geometry.fill",
             "stylers": [
               { "weight": 8 },
               { "color": "#ffffff" },
               { "visibility": "on" }
             ]
             },{
               "featureType": "road.local",
               "elementType": "geometry.stroke",
               "stylers": [
                 { "visibility": "on" },
                 { "color": "#ffffff" }
               ]
             },{
                 "featureType": "road.local",
                 "elementType": "geometry",
                 "stylers": [
                  { "visibility": "on" },
                  { "color": "#ffffff" },
                  { "weight": 4.6 }
               ]
             },{
               "featureType": "road.arterial",
               "elementType": "geometry.stroke",
               "stylers": [
                 { "visibility": "off" }
               ]
             },{
               "featureType": "landscape.man_made",
               "elementType": "geometry.fill",
               "stylers": [
                 { "visibility": "on" },
                 { "color": "#CEECED" }
               ]
             },{
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
              }
            ] 



 // This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
// The maximum width of the info window is set to 200 pixels.

function initMap() {


  var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});

  var mapOptions = {
            zoom: 17,
            center: new google.maps.LatLng(40.72873038,-74.03189778),
            disableDefaultUI: true,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
          };
  var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

   map.mapTypes.set('map_style', styledMap);
   
   map.setMapTypeId('map_style');


//Aquablu

//坐标
  var aquabluCoords = {lat: 40.73025481, lng: -74.03160274};
//图形范围
  var aquabluRange = [
      {lat: 40.73065726, lng: -74.03169662},
      {lat: 40.730641, lng: -74.03156251},
      {lat: 40.7305536, lng: -74.03157592},
      {lat: 40.73053124, lng: -74.03147668},
      {lat: 40.73035847, lng: -74.03149545},
      {lat: 40.73032392, lng: -74.03132111},
      {lat: 40.72944382, lng: -74.0314123},
      {lat: 40.72947228, lng: -74.03165907},
      {lat: 40.72954139, lng: -74.03164297},
      {lat: 40.72978936, lng: -74.03187364},
  ];
//画出图形范围
  var aquablu = new google.maps.Polygon({
    paths: aquabluRange,
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  aquablu.setMap(map);

//信息框的内容
  var aquabluContentString = '<div id="content">'+
      '<div id="siteNotice">'+
 '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Aquablu, my apartment</h1>'+
      '<div id="bodyContent">'+
      '<img src="image/002.jpg">'+
      '<p> September 1st, 2015, Kun, Ruoran and me moved to Aquablu and began our journey at United States formally. ' +
      'The view of the my room is perfect! Every morning I can enjoy a super beautiful sunrise.</p>'+
      '<p> We have spent so much time on our rooms. We went to IKEA for 3 times. You know, for the '+
      'girls first got chance to decorate their rooms, how excited it can be!</p> '+
      '<img src="image/001.jpg">'+
      '<img src="image/004.jpg">'+
      '<p> The first day we moved in, we cooked our first dinner together! It was really fun!</p> '+
      '<img src="image/003.jpg">'+
      '</div>'+
      '</div>';

//画信息框
  var aquaInfowindow = new google.maps.InfoWindow({
    content: aquabluContentString,
    maxWidth: 500,
  });

//画坐标icon
  var aquaMarker = new google.maps.Marker({
    position: aquabluCoords,
    map: map,
    title: 'AquaBlu, where I live'
  });
//点击icon跳出信息框
  aquaMarker.addListener('click', function() {
    aquaInfowindow.open(map, aquaMarker);
  });





//Mortan Williams

//坐标
  var mwCoords = {lat: 40.72980562, lng: -74.03249592};
//图形范围
  var mwRange = [
      {lat: 40.72941537, lng: -74.03220356},
      {lat: 40.72950277, lng: -74.0329358},
      {lat: 40.7300414, lng: -74.03282851},
      {lat: 40.72994587, lng: -74.03212577},

  ];
//画出图形范围
  var mw = new google.maps.Polygon({
    paths: mwRange,
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  mw.setMap(map);

//信息框的内容
  var mwContentString = '<div id="content">'+
      '<div id="siteNotice">'+
 '</div>'+
      '<h1 id="firstHeading" class="firstHeading">My favourite supermarket.</h1>'+
      '<div id="bodyContent">'+
      '<img src="image/005.jpg">'+
      '<p> September 1st, 2015, Kun, Ruoran and me moved to Aquablu and began our journey at United States formally. ' +
      'The view of the my room is perfect! Every morning I can enjoy a super beautiful sunrise.</p>'+
      '<p> We have spent so much time on our rooms. We went to IKEA for 3 times. You know, for the '+
      'girls first got chance to decorate their rooms, how excited it can be!</p> '+
      '<img src="image/001.jpg">'+
      '<img src="image/004.jpg">'+
      '<p> The first day we moved in, we cooked our first dinner together! It was really fun!</p> '+
      '<img src="image/003.jpg">'+
      '</div>'+
      '</div>';

//画信息框
  var mwInfowindow = new google.maps.InfoWindow({
    content: mwContentString,
    maxWidth: 500,
  });

//画坐标icon
  var mwMarker = new google.maps.Marker({
    position: mwCoords,
    map: map,
    title: 'AquaBlu, where I live'
  });
//点击icon跳出信息框
  mwMarker.addListener('click', function() {
    mwInfowindow.open(map, mwMarker);
  });



//DuanneReade

//坐标
  var drCoords = {lat: 40.7273726, lng: -74.03044939};
//图形范围
  var drRange = [
      {lat: 40.72800271, lng: -74.03188705},
      {lat: 40.7279336, lng: -74.03131306},
      {lat: 40.72848241, lng: -74.03123796},
      {lat: 40.72853119, lng: -74.03179586},

  ];
//画出图形范围
  var dr = new google.maps.Polygon({
    paths: drRange,
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  dr.setMap(map);

//信息框的内容
  var drContentString = '<div id="content">'+
      '<h1 id="firstHeading" class="firstHeading">View of Manhattan</h1>'+
      '<div id="bodyContent">'+
      '<img src="image/006.jpg">'+
       '<img src="image/007.jpg">'+
      '</div>'+
      '</div>';

//画信息框
  var drInfowindow = new google.maps.InfoWindow({
    content: drContentString,
    maxWidth: 500,
  });

//画坐标icon
  var drMarker = new google.maps.Marker({
    position: drCoords,
    map: map,
    title: 'AquaBlu, where I live'
  });
//点击icon跳出信息框
  drMarker.addListener('click', function() {
    drInfowindow.open(map, drMarker);
  });



//Swimm and fitness

//坐标
  var drCoords = {lat: 40.72761245, lng: -74.03279364};
//图形范围
  var drRange = [
      {lat: 40.72738479, lng: -74.03223038},
      {lat: 40.72769782, lng: -74.03219283},
      {lat: 40.72779538, lng: -74.03343737},
      {lat: 40.72745797, lng: -74.03347492},

  ];
//画出图形范围
  var dr = new google.maps.Polygon({
    paths: drRange,
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  dr.setMap(map);

//信息框的内容
  var drContentString = '<div id="content">'+
      '<div id="siteNotice">'+
 '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Aquablu, my apartment</h1>'+
      '<div id="bodyContent">'+
      '<img src="image/002.jpg">'+
      '<p> September 1st, 2015, Kun, Ruoran and me moved to Aquablu and began our journey at United States formally. ' +
      'The view of the my room is perfect! Every morning I can enjoy a super beautiful sunrise.</p>'+
      '<p> We have spent so much time on our rooms. We went to IKEA for 3 times. You know, for the '+
      'girls first got chance to decorate their rooms, how excited it can be!</p> '+
      '<img src="image/001.jpg">'+
      '<img src="image/004.jpg">'+
      '<p> The first day we moved in, we cooked our first dinner together! It was really fun!</p> '+
      '<img src="image/003.jpg">'+
      '</div>'+
      '</div>';

//画信息框
  var drInfowindow = new google.maps.InfoWindow({
    content: drContentString,
    maxWidth: 500,
  });

//画坐标icon
  var drMarker = new google.maps.Marker({
    position: drCoords,
    map: map,
    title: 'AquaBlu, where I live'
  });
//点击icon跳出信息框
  drMarker.addListener('click', function() {
    drInfowindow.open(map, drMarker);
  });




//long walkaway

//坐标
  var drCoords = {lat: 40.72824256, lng: -74.03162956};
//图形范围
  var drRange = [
      {lat: 40.72945703, lng: -74.03173149},
      {lat: 40.72939809, lng: -74.03100997},
      {lat: 40.72801287, lng: -74.0311414},
      {lat: 40.7279458, lng: -74.03040916},
      {lat: 40.72686443, lng: -74.03042793},
      {lat: 40.72685224, lng: -74.03048426},
      {lat: 40.72788888, lng: -74.03048962},
      {lat: 40.72795189, lng: -74.03117627},
      {lat: 40.72935845, lng: -74.0310958},
      {lat: 40.72942146, lng: -74.03173417},

  ];
//画出图形范围
  var dr = new google.maps.Polygon({
    paths: drRange,
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  dr.setMap(map);

//信息框的内容
  var drContentString = '<div id="content">'+
      '<div id="siteNotice">'+
 '</div>'+
       '<h1 id="firstHeading" class="firstHeading">View of Manhattan</h1>'+
      '<div id="bodyContent">'+
      '<img src="image/006.jpg">'+
       '<img src="image/007.jpg">'+
      '</div>'+
      '</div>';

//画信息框
  var drInfowindow = new google.maps.InfoWindow({
    content: drContentString,
    maxWidth: 500,
  });

//画坐标icon
  var drMarker = new google.maps.Marker({
    position: drCoords,
    map: map,
    title: 'AquaBlu, where I live'
  });
//点击icon跳出信息框
  drMarker.addListener('click', function() {
    drInfowindow.open(map, drMarker);
  });


//starbucks

//坐标
  var drCoords = {lat: 40.72628716, lng: -74.03315842};
//图形范围
  var drRange = [
      {lat: 40.7263583, lng: -74.03310478},
      {lat: 40.72620585, lng: -74.0331316},
      {lat: 40.72621601, lng: -74.03323084},
      {lat: 40.72636846, lng: -74.03319329},

  ];
//画出图形范围
  var dr = new google.maps.Polygon({
    paths: drRange,
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  dr.setMap(map);

//信息框的内容
  var drContentString = '<div id="content">'+
      '<div id="siteNotice">'+
 '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Aquablu, my apartment</h1>'+
      '<div id="bodyContent">'+
      '<img src="image/002.jpg">'+
      '<p> September 1st, 2015, Kun, Ruoran and me moved to Aquablu and began our journey at United States formally. ' +
      'The view of the my room is perfect! Every morning I can enjoy a super beautiful sunrise.</p>'+
      '<p> We have spent so much time on our rooms. We went to IKEA for 3 times. You know, for the '+
      'girls first got chance to decorate their rooms, how excited it can be!</p> '+
      '<img src="image/001.jpg">'+
      '<img src="image/004.jpg">'+
      '<p> The first day we moved in, we cooked our first dinner together! It was really fun!</p> '+
      '<img src="image/003.jpg">'+
      '</div>'+
      '</div>';

//画信息框
  var drInfowindow = new google.maps.InfoWindow({
    content: drContentString,
    maxWidth: 500,
  });

//画坐标icon
  var drMarker = new google.maps.Marker({
    position: drCoords,
    map: map,
    title: 'AquaBlu, where I live'
  });
//点击icon跳出信息框
  drMarker.addListener('click', function() {
    drInfowindow.open(map, drMarker);
  });



}