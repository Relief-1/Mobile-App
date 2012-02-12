var position1 = new google.maps.LatLng(37.083667,-94.513149);  //Joplin
var position2 = new google.maps.LatLng(35.818889,-78.644722);  //Raleigh

//TODO: Auto Center

var infowindow = new google.maps.InfoWindow({
    content: null
});
var mapToolbar = new Ext.Toolbar({
	xtype: 'toolbar',
	title: '<div style="font-size:.7em;">Around the world</div>',
});
            
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
            
            var markers = [];
            markers[0] = new google.maps.Marker({
                position: position1,
                title : 'Joplin Missouri',
                map: map,
			    animation: google.maps.Animation.DROP,
                html:'Joplin Missouri Tornado',
                icon:'assets/markers/tornado-normal-marker.png'
            });
            markers[1] = new google.maps.Marker({
                position: position2,
                title : 'Raleigh',
                map: map,
			    animation: google.maps.Animation.DROP,
                html:'Raleigh Tornado',
                icon:'assets/markers/tornado-normal-marker.png'
            });

            
           
            closeInfoWindow = function() {
                infowindow.close();
                for (var i = 0; i < markers.length; i++) {
                    var marker = markers[i];
                    marker.setIcon('assets/markers/tornado-normal-marker.png');
                }
            };
            
            google.maps.event.addListener(map, 'click', closeInfoWindow);
            
          
            for (var i = 0; i < markers.length; i++) {

                var marker = markers[i];

                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, this);
                    infowindow.setContent(this.html);
                    this.setIcon('assets/markers/tornado-active-marker.png');
                    for (var i = 0; i < markers.length; i++) {
                        var offMarker = markers[i];
                        if (offMarker != this){
                            offMarker.setIcon('assets/markers/tornado-normal-marker.png');
                        }
                    }
                });
            //                setTimeout( function(){
            //                    map.panTo (position1);
            //                } , 1000);
            }
            google.maps.event.addListener(infowindow, 'closeclick', function() {
                for (var i = 0; i < markers.length; i++) {
                    var marker = markers[i];
                    marker.setIcon('assets/markers/tornado-normal-marker.png');
                }
            });
        }
    }
});

new Ext.Panel({
    dockedItems: [toolbar],
    items: [mapdemo]
});

Relief1.views.map = Ext.extend(Ext.Panel, {
    title: 'Map',
    iconCls: 'map',
    layout: 'vbox',
    items: [mapdemo],
	dockedItems: [mapToolbar]
});
Ext.reg('Map', Relief1.views.map);