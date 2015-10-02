
var city_coords = {
  "Baltimore": [39.2903848, -76.6121893],
  "Boston": [42.3600825, -71.0588801], 
  "Chicago": [41.8781136, -87.6297982], 
  "Detroit": [42.331427, -83.0457538], 
  "Los_Angeles": [34.0522342, -118.2436849],
  "New_York": [40.7127837, -74.0059413], 
  "Oakland": [37.8043637, -122.2711137], 
  "San_Francisco": [37.7749295, -122.4194155],
  "Seattle": [47.6062095, -122.3320708],
  "Washington": [38.9071923, -77.0368707]
};

// var city_name = '{{city_name}}';
// console.log(city_name)

var lat = city_coords[city_name][0];
var lng = city_coords[city_name][1];

queue()
    .defer(d3.json, '/static/data23.json')
    .defer(d3.json, '/static/data45.json')
    .defer(d3.json, '/static/data51.json')
    .defer(d3.json, '/static/data52.json')
    .defer(d3.json, '/static/data53.json')
    .defer(d3.json, '/static/data61.json')
    .defer(d3.json, '/static/data71.json')
    .defer(d3.json, '/static/js/zip_cities_final.json')
    .await(makeMap);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
        }
    };


// var onEachFeature = function(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties && feature.properties.popupContent) {
//         layer.bindPopup(feature.properties.popupContent);
//         }

//     layer.setStyle(defaultStyle);

//     function(layer) {
//       // Create a mouseover event
//       layer.on("mouseover", function (e) {
//         // Change the style to the highlighted version
//         layer.setStyle(highlightStyle);
//         });
            
//     };


  function makeMap(error, data23, data45, data51, data52, data53, data61, data71, gjson_1) {

    function matchKey(datapoint, key_variable){
        if (typeof key_variable[0][datapoint] === 'undefined') {
            return null;
        }
        else {
            return parseFloat(key_variable[0][datapoint]);
        };
    };
    
    var color_23 = d3.scale.threshold()
        .domain([0, 1, 2, 3, 4])
        .range(['#D4B9DA', '#C994C7', '#DF65B0', '#DD1C77', '#980043']);

    var color_45 = d3.scale.threshold()
        .domain([0, 1, 2, 3, 4])
        .range(['#FBEAEA', '#EC9D9D', '#DE5151', '#B22222', '#8B1A1A']);

    var color_51 = d3.scale.threshold()
        .domain([0, 1, 2, 3, 4])
        .range(['#FFFBE5', '#FFEF99', '#FFE34D', '#FFD700', '#EEC900']);

    var color_52 = d3.scale.threshold()
        .domain([0, 1, 2, 3, 4])
        .range(['#F0F7ED', '#CCE4C1', '#A8D196', '#84BE6A', '#3B5E2B']);

    var color_53 = d3.scale.threshold()
        .domain([0, 1, 2, 3, 4])
        .range(['#E6E7FF', '#A8ACFF', '#6B72FE', '#2E37FE', '#2F2F4F']);

    var color_61 = d3.scale.threshold()
        .domain([0, 1, 2, 3, 4])
        .range(['#E9F6FB', '#C8E9F6', '#A8DBF0', '#87CEEB', '#38B0DE']);

    var color_71 = d3.scale.threshold()
        .domain([0, 1, 2, 3, 4])
        .range(['#F5E5FF', '#E3B9FF', '#D18CFF', '#BF5FFF', '#A020F0']);

    var color_def = d3.scale.threshold()
        .domain([0, 1, 2, 3, 4])
        .range(['#F3F2F2', '#E6E4E4', '#DAD7D7', '#CDC9C9', '#8B8989']);


    // 23, 45, 51, 52, 53, 61, 71

    // var map = L.map('map').setView([37.769959, -122.448679], 12);
    var map = L.map('map').setView([lat,lng], 12);

    // Stamen Layer
    var stamenUrl = 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png';
    var stamenAttribution = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.';
    var stamenLayer = new L.TileLayer(stamenUrl, {maxZoom: 18, attribution: stamenAttribution});
    map.addLayer(stamenLayer);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 18,
    //     minZoom: 1,
    //     attribution: 'Map data (c) <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    // }).addTo(map);
    function style_23(feature) {
        return {
          fillColor: color_23(matchKey(feature.properties.ZCTA5CE10, data23)),
          weight: 1,
          opacity: 0.4,
          color: 'black',
          fillOpacity: 0.7
        };
    }
    
    function style_45(feature) {
        return {
          fillColor: color_23(matchKey(feature.properties.ZCTA5CE10, data45)),
          weight: 1,
          opacity: 0.4,
          color: 'black',
          fillOpacity: 0.7
        };
    }

    function style_51(feature) {
        return {
          fillColor: color_23(matchKey(feature.properties.ZCTA5CE10, data51)),
          weight: 1,
          opacity: 0.4,
          color: 'black',
          fillOpacity: 0.7
        };
    }
    function style_52(feature) {
        return {
          fillColor: color_23(matchKey(feature.properties.ZCTA5CE10, data52)),
          weight: 1,
          opacity: 0.4,
          color: 'black',
          fillOpacity: 0.7
        };
    }
    function style_53(feature) {
        return {
          fillColor: color_23(matchKey(feature.properties.ZCTA5CE10, data53)),
          weight: 1,
          opacity: 0.4,
          color: 'black',
          fillOpacity: 0.7
        };
    }
    function style_61(feature) {
        return {
          fillColor: color_23(matchKey(feature.properties.ZCTA5CE10, data61)),
          weight: 1,
          opacity: 0.4,
          color: 'black',
          fillOpacity: 0.7
        };
    }
    function style_71(feature) {
        return {
          fillColor: color_23(matchKey(feature.properties.ZCTA5CE10, data71)),
          weight: 1,
          opacity: 0.4,
          color: 'black',
          fillOpacity: 0.7
        };
    }
    
    var highlightStyle = {
      
    }

    var gJson_layer_23 = L.geoJson(gjson_1, {style: style_23, onEachFeature: onEachFeature});
    var gJson_layer_45 = L.geoJson(gjson_1, {style: style_45, onEachFeature: onEachFeature});
    var gJson_layer_51 = L.geoJson(gjson_1, {style: style_51, onEachFeature: onEachFeature});
    var gJson_layer_52 = L.geoJson(gjson_1, {style: style_52, onEachFeature: onEachFeature});
    var gJson_layer_53 = L.geoJson(gjson_1, {style: style_53, onEachFeature: onEachFeature});
    var gJson_layer_61 = L.geoJson(gjson_1, {style: style_61, onEachFeature: onEachFeature});
    var gJson_layer_71 = L.geoJson(gjson_1, {style: style_71, onEachFeature: onEachFeature});

    gJson_layer_53.addTo(map)

    var overlayMaps = {
      "Construction": gJson_layer_23,
      "Retail": gJson_layer_45,
      "Media/Publishing": gJson_layer_51,
      "Finance": gJson_layer_52,
      "Real Estate": gJson_layer_53,
      "Education": gJson_layer_61,
      "Arts": gJson_layer_71
    };

    var baseMaps = {

    };

    // L.control.layers(overlayMaps).addTo(map);
    lcontrol = L.control.layers(baseMaps,overlayMaps).addTo(map);
    // lcontrol.removeLayer(gJson_layer_45) 

    // All about legend
    // var legend = L.control({position: 'topright'});
    var legend = L.control({position: 'bottomleft'});

    legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};

    legend.addTo(map);

    var x = d3.scale.linear()
    .domain([0, 4])
    .range([0, 200]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("top")
      .tickSize(1)
      .tickValues([0, 1, 2, 3, 4]);

    var svg = d3.select(".legend.leaflet-control").append("svg")
      .attr("id", 'legend')
      .attr("width", 250)
      .attr("height", 40);

    var g = svg.append("g")
      .attr("class", "key")
      .attr("transform", "translate(25,16)");

    g.selectAll("rect")
      .data(color_23.range().map(function(d, i) {
        return {
          x0: i ? x(color_23.domain()[i - 1]) : x.range()[0],
          x1: i < color_23.domain().length ? x(color_23.domain()[i]) : x.range()[1],
          z: d
        };
      }))
    .enter().append("rect")
      .attr("height", 10)
      .attr("x", function(d) { return d.x0; })
      .attr("width", function(d) { return d.x1 - d.x0; })
      .style("fill", function(d) { return d.z; });

    g.call(xAxis).append("text")
      .attr("class", "caption")
      .attr("y", 21)
      .text('Business Growth Index');
};
