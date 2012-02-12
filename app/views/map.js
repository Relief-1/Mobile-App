var position1 = new google.maps.LatLng(37.083667,-94.513149);  //Sencha HQ
var position2 = new google.maps.LatLng(37.46685,-122.158592);  //Sencha HQ

infowindow = new google.maps.InfoWindow({
    content: 'Sencha Touch HQ'
}),
        

//Tracking Marker Image
        

mapdemo = new Ext.Map({

    mapOptions : {
        center : new google.maps.LatLng(7.083667,-94.513149),  //nearby San Fran
        zoom : 7     ,
        mapTypeId : google.maps.MapTypeId.ROADMAP,
        navigationControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.DEFAULT
        }
    },


    listeners : {
        maprender : function(comp, map){
            var marker = new google.maps.Marker({
                position: position1,
                title : 'Sencha HQ',
                map: map,
                icon:'assets/normal-marker.png'
            });
            var marker2 = new google.maps.Marker({
                position: position2,
                title : 'Sencha HQ',
                map: map,
                icon:'assets/normal-marker.png'
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
                marker.setIcon('assets/clicked-marker.png');
            });
            google.maps.event.addListener(infowindow, 'closeclick', function() {
                marker.setIcon('assets/normal-marker.png');
            });
            setTimeout( function(){
                map.panTo (position1);
            } , 1000);
        }

    }
});

new Ext.Panel({
    fullscreen: true,
    dockedItems: [toolbar],
    items: [mapdemo]
});

Relief1.views.map = Ext.extend(Ext.Panel, {
    title: 'Map',
    iconCls: 'map',
    layout: 'vbox',
    items: [mapdemo]
});
Ext.reg('Map', Relief1.views.map);