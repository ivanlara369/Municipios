ol.proj.proj4.register(proj4);
ol.proj.get("").setExtent([1252974.521239, 1024095.401307, 1335161.362750, 1061258.746588]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_municipiosivan_1 = new ol.format.GeoJSON();
var features_municipiosivan_1 = format_municipiosivan_1.readFeatures(json_municipiosivan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_municipiosivan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipiosivan_1.addFeatures(features_municipiosivan_1);
var lyr_municipiosivan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_municipiosivan_1, 
                style: style_municipiosivan_1,
                interactive: true,
                title: '<img src="styles/legend/municipiosivan_1.png" /> municipios ivan'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_municipiosivan_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_municipiosivan_1];
lyr_municipiosivan_1.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'GEOMETRY1_': 'GEOMETRY1_', 'LN': 'LN', 'PAD': 'PAD', });
lyr_municipiosivan_1.set('fieldImages', {'ID': 'Hidden', 'ENTIDAD': 'Hidden', 'MUNICIPIO': 'Hidden', 'NOMBRE': 'TextEdit', 'GEOMETRY1_': 'Hidden', 'LN': 'Hidden', 'PAD': 'Hidden', });
lyr_municipiosivan_1.set('fieldLabels', {'NOMBRE': 'header label', });
lyr_municipiosivan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});