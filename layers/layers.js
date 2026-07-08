var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KepadatanPendudukKotaYogyakarta_2 = new ol.format.GeoJSON();
var features_KepadatanPendudukKotaYogyakarta_2 = format_KepadatanPendudukKotaYogyakarta_2.readFeatures(json_KepadatanPendudukKotaYogyakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanPendudukKotaYogyakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPendudukKotaYogyakarta_2.addFeatures(features_KepadatanPendudukKotaYogyakarta_2);
var lyr_KepadatanPendudukKotaYogyakarta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepadatanPendudukKotaYogyakarta_2, 
                style: style_KepadatanPendudukKotaYogyakarta_2,
                popuplayertitle: 'Kepadatan Penduduk Kota Yogyakarta',
                interactive: true,
    title: 'Kepadatan Penduduk Kota Yogyakarta<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_2_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_2_1.png" /> Rendah<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_2_2.png" /> Sedang<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_2_3.png" /> Tinggi<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_2_4.png" /> Sangat Tinggi<br />' });
var format_NamadanLuasKecamatan_3 = new ol.format.GeoJSON();
var features_NamadanLuasKecamatan_3 = format_NamadanLuasKecamatan_3.readFeatures(json_NamadanLuasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamadanLuasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamadanLuasKecamatan_3.addFeatures(features_NamadanLuasKecamatan_3);
var lyr_NamadanLuasKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamadanLuasKecamatan_3, 
                style: style_NamadanLuasKecamatan_3,
                popuplayertitle: 'Nama dan Luas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/NamadanLuasKecamatan_3.png" /> Nama dan Luas Kecamatan'
            });
var format_BatasAdministrasi_4 = new ol.format.GeoJSON();
var features_BatasAdministrasi_4 = format_BatasAdministrasi_4.readFeatures(json_BatasAdministrasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_4.addFeatures(features_BatasAdministrasi_4);
var lyr_BatasAdministrasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_4, 
                style: style_BatasAdministrasi_4,
                popuplayertitle: 'Batas Administrasi',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasi_4.png" /> Batas Administrasi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_KepadatanPendudukKotaYogyakarta_2.setVisible(true);lyr_NamadanLuasKecamatan_3.setVisible(true);lyr_BatasAdministrasi_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_KepadatanPendudukKotaYogyakarta_2,lyr_NamadanLuasKecamatan_3,lyr_BatasAdministrasi_4];
lyr_KepadatanPendudukKotaYogyakarta_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Kecamatan ', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas': 'Luas Wilayah (ha)', 'Join_Pendu': 'Jumlah Penduduk (ribu)', 'Join_Kepad': 'Kepadatan Penduduk (ribu per km2)', 'Join_Banji': 'Join_Banji', 'Join_Cuaca': 'Join_Cuaca', 'Join_Erups': 'Join_Erups', 'Join_Gelom': 'Join_Gelom', 'Join_Gel_1': 'Join_Gel_1', 'Join_Gempa': 'Join_Gempa', 'Join_Kebak': 'Join_Kebak', 'Join_Keker': 'Join_Keker', 'Join_Tanah': 'Join_Tanah', });
lyr_NamadanLuasKecamatan_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas': 'Join_Luas', 'Join_Pendu': 'Join_Pendu', 'Join_Kepad': 'Join_Kepad', 'Join_Banji': 'Join_Banji', 'Join_Cuaca': 'Join_Cuaca', 'Join_Erups': 'Join_Erups', 'Join_Gelom': 'Join_Gelom', 'Join_Gel_1': 'Join_Gel_1', 'Join_Gempa': 'Join_Gempa', 'Join_Kebak': 'Join_Kebak', 'Join_Keker': 'Join_Keker', 'Join_Tanah': 'Join_Tanah', });
lyr_BatasAdministrasi_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas': 'Join_Luas', 'Join_Pendu': 'Join_Pendu', 'Join_Kepad': 'Join_Kepad', 'Join_Banji': 'Join_Banji', 'Join_Cuaca': 'Join_Cuaca', 'Join_Erups': 'Join_Erups', 'Join_Gelom': 'Join_Gelom', 'Join_Gel_1': 'Join_Gel_1', 'Join_Gempa': 'Join_Gempa', 'Join_Kebak': 'Join_Kebak', 'Join_Keker': 'Join_Keker', 'Join_Tanah': 'Join_Tanah', });
lyr_KepadatanPendudukKotaYogyakarta_2.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'Hidden', 'Field': 'Hidden', 'Join_No': 'Hidden', 'Join_Luas': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Banji': 'Hidden', 'Join_Cuaca': 'Hidden', 'Join_Erups': 'Hidden', 'Join_Gelom': 'Hidden', 'Join_Gel_1': 'Hidden', 'Join_Gempa': 'Hidden', 'Join_Kebak': 'Hidden', 'Join_Keker': 'Hidden', 'Join_Tanah': 'Hidden', });
lyr_NamadanLuasKecamatan_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'Join_No': 'TextEdit', 'Join_Luas': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Banji': 'TextEdit', 'Join_Cuaca': 'TextEdit', 'Join_Erups': 'TextEdit', 'Join_Gelom': 'TextEdit', 'Join_Gel_1': 'TextEdit', 'Join_Gempa': 'TextEdit', 'Join_Kebak': 'TextEdit', 'Join_Keker': 'TextEdit', 'Join_Tanah': 'TextEdit', });
lyr_BatasAdministrasi_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'Join_No': 'TextEdit', 'Join_Luas': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Banji': 'TextEdit', 'Join_Cuaca': 'TextEdit', 'Join_Erups': 'TextEdit', 'Join_Gelom': 'TextEdit', 'Join_Gel_1': 'TextEdit', 'Join_Gempa': 'TextEdit', 'Join_Kebak': 'TextEdit', 'Join_Keker': 'TextEdit', 'Join_Tanah': 'TextEdit', });
lyr_KepadatanPendudukKotaYogyakarta_2.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Join_Luas': 'inline label - always visible', 'Join_Pendu': 'inline label - always visible', 'Join_Kepad': 'inline label - always visible', });
lyr_NamadanLuasKecamatan_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'header label - visible with data', 'Join_No': 'no label', 'Join_Luas': 'no label', 'Join_Pendu': 'no label', 'Join_Kepad': 'no label', 'Join_Banji': 'no label', 'Join_Cuaca': 'no label', 'Join_Erups': 'no label', 'Join_Gelom': 'no label', 'Join_Gel_1': 'no label', 'Join_Gempa': 'no label', 'Join_Kebak': 'no label', 'Join_Keker': 'no label', 'Join_Tanah': 'no label', });
lyr_BatasAdministrasi_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'Join_No': 'no label', 'Join_Luas': 'no label', 'Join_Pendu': 'no label', 'Join_Kepad': 'no label', 'Join_Banji': 'no label', 'Join_Cuaca': 'no label', 'Join_Erups': 'no label', 'Join_Gelom': 'no label', 'Join_Gel_1': 'no label', 'Join_Gempa': 'no label', 'Join_Kebak': 'no label', 'Join_Keker': 'no label', 'Join_Tanah': 'no label', });
lyr_BatasAdministrasi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});