var base_tile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  minZoom: 1,
  attribution: 'Map data (c) <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

var baseLayer = {
  "Base Layer": base_tile
};

/*
addition of the wms layers
*/



/*
addition of the tile layers
*/


/*
list of layers to be added
*/
var layer_list = {

};

/*
Bounding box.
*/
var southWest = L.latLng(-90, -180),
  northEast = L.latLng(90, 180),
  bounds = L.latLngBounds(southWest, northEast);

/*
Creates the map and adds the selected layers
*/
var map = L.map('folium_ce46d322d9bb421798095ba50623abfb', {
 center:[37.74, -122.45],
 zoom: 12,
 maxBounds: bounds,
 layers: [base_tile]
})

// CREATING NEW TILE
var stamenUrl = 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png';
var stamenAttribution = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.';
var stamenLayer = new L.TileLayer(stamenUrl, {maxZoom: 18, attribution: stamenAttribution});
map.addLayer(stamenLayer);

// This used to be
// L.control.layers(baseLayer, layer_list).addTo(map);

//cluster group
var clusteredmarkers = L.markerClusterGroup();
//section for adding clustered markers

//add the clustered markers to the group anyway
map.addLayer(clusteredmarkers);




var circle_1 = L.circle([37.7786871, -122.4212424], 300, {
  color: '#DF65B0 ',
  fillColor: '#DF65B0 ',
  fillOpacity: 0.7
  });

map.addLayer(circle_1)

var circle_2 = L.circle([37.7726402, -122.4099154], 500, {
                      color: '#980043 ',
                      fillColor: '#980043 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_2)

var circle_3 = L.circle([37.7911148, -122.4021273], 300, {
                      color: '#DF65B0 ',
                      fillColor: '#DF65B0 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_3)

var circle_4 = L.circle([37.7890183, -122.3915063], 500, {
                      color: '#980043 ',
                      fillColor: '#980043 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_4)

var circle_5 = L.circle([37.7618242, -122.3985871], 400, {
                      color: '#DD1C77 ',
                      fillColor: '#DD1C77 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_5)

var circle_6 = L.circle([37.7909427, -122.4084994], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_6)

var circle_7 = L.circle([37.7929789, -122.4212424], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_7)

var circle_8 = L.circle([37.7485824, -122.4184108], 200, {
                      color: '#C994C7 ',
                      fillColor: '#C994C7 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_8)

var circle_9 = L.circle([37.7959362, -122.4000032], 200, {
                      color: '#C994C7 ',
                      fillColor: '#C994C7 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_9)

var circle_10 = L.circle([37.7225491, -122.4410618], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_10)

var circle_11 = L.circle([37.7561438, -122.4325682], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_11)

var circle_12 = L.circle([37.7877522, -122.4382307], 0, {
                      color: '#F1EEF6 ',
                      fillColor: '#F1EEF6 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_12)

var circle_13 = L.circle([37.7432421, -122.497668], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_13)

var circle_14 = L.circle([37.7717185, -122.4438929], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_14)

var circle_15 = L.circle([37.7822891, -122.463708], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_15)

var circle_16 = L.circle([37.7813454, -122.497668], 0, {
                      color: '#F1EEF6 ',
                      fillColor: '#F1EEF6 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_16)

var circle_17 = L.circle([37.7597481, -122.4750292], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_17)

var circle_18 = L.circle([37.8020405, -122.4382307], 0, {
                      color: '#F1EEF6 ',
                      fillColor: '#F1EEF6 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_18)

var circle_19 = L.circle([37.7304167, -122.384425], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_19)

var circle_20 = L.circle([37.734646, -122.463708], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_20)

var circle_21 = L.circle([37.793323, -122.4665384], 200, {
                      color: '#C994C7 ',
                      fillColor: '#C994C7 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_21)

var circle_22 = L.circle([37.7401042, -122.4382307], 0, {
                      color: '#F1EEF6 ',
                      fillColor: '#F1EEF6 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_22)

var circle_23 = L.circle([37.7181398, -122.4863492], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_23)

var circle_24 = L.circle([37.8059887, -122.4099154], 300, {
                      color: '#DF65B0 ',
                      fillColor: '#DF65B0 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_24)

var circle_25 = L.circle([37.7202042, -122.4099154], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_25)

var circle_26 = L.circle([37.7748363, -122.3872576], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_26)

var circle_27 = L.circle([37.7729273, -122.2143323], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_27)

var circle_28 = L.circle([37.8015517, -122.2143323], 0, {
                      color: '#F1EEF6 ',
                      fillColor: '#F1EEF6 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_28)

var circle_29 = L.circle([37.7355719, -122.1802812], 0, {
                      color: '#F1EEF6 ',
                      fillColor: '#F1EEF6 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_29)

var circle_30 = L.circle([37.7554905, -122.1462193], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_30)

var circle_31 = L.circle([37.7944092, -122.2455364], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_31)

var circle_32 = L.circle([37.8134679, -122.307917], 200, {
                      color: '#C994C7 ',
                      fillColor: '#C994C7 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_32)

var circle_33 = L.circle([37.8104485, -122.2398636], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_33)

var circle_34 = L.circle([37.8336281, -122.2029832], 0, {
                      color: '#F1EEF6 ',
                      fillColor: '#F1EEF6 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_34)

var circle_35 = L.circle([37.8113159, -122.2682245], 100, {
                      color: '#D4B9DA ',
                      fillColor: '#D4B9DA ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_35)

var circle_36 = L.circle([37.7816835, -122.1817002], 0, {
                      color: '#F1EEF6 ',
                      fillColor: '#F1EEF6 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_36)

var circle_37 = L.circle([37.7347438, -122.2143323], 0, {
                      color: '#F1EEF6 ',
                      fillColor: '#F1EEF6 ',
                      fillOpacity: 0.7
                      });

map.addLayer(circle_37)











