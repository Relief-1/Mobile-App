var position1 = new google.maps.LatLng(37.083667,-94.513149);  //Joplin
var position2 = new google.maps.LatLng(35.818889,-78.644722);  //Sencha HQ

infowindow1 = new google.maps.InfoWindow({
    content: 'Joplin Missouri Tornado'
}),

infowindow2 = new google.maps.InfoWindow({
    content: 'Raleigh Tornado'
}),

//Tracking Marker Image
        

mapdemo = new Ext.Map({

    mapOptions : {
        center : new google.maps.LatLng(37.083667,-94.513149),  //nearby San Fran
        zoom : 4,
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
                title : 'Joplin Missouri',
                map: map,
                icon:'assets/markers/normal-marker.png'
            });
            var marker2 = new google.maps.Marker({
                position: position2,
                title : 'Raleigh',
                map: map,
                icon:'assets/markers/normal-marker.png'
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow1.open(map, marker);
                marker.setIcon('assets/markers/clicked-marker.png');
            });
            google.maps.event.addListener(infowindow1, 'closeclick', function() {
                marker.setIcon('assets/markers/normal-marker.png');
            });
            google.maps.event.addListener(marker2, 'click', function() {
                infowindow2.open(map, marker2);
                marker2.setIcon('assets/markers/clicked-marker.png');
            });
            google.maps.event.addListener(infowindow2, 'closeclick', function() {
                marker2.setIcon('assets/markers/normal-marker.png');
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