var positionJoplin = new google.maps.LatLng(37.083667,-94.513149);  // Joplin
var positionHaiti = new google.maps.LatLng(18.540001,-72.339907);  	// Haiti
var positionVan = new google.maps.LatLng(38.494167,43.38);  		// Van
var positionTohoku = new google.maps.LatLng(38.267,140.867);  		// Tohoku

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
        zoom : 3,
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
                position: positionJoplin,
                title : 'Joplin Missouri, USA',
                map: map,
			    animation: google.maps.Animation.DROP,
                html:'Joplin Missouri Tornado',
                icon:'assets/markers/tornado-normal-marker.png'
            });
            markers[1] = new google.maps.Marker({
                position: positionHaiti,
                title : 'Port-aux-Prince Earthquake, Haiti',
                map: map,
			    animation: google.maps.Animation.DROP,
                html:'Port-aux-Prince, Hait',
                icon:'assets/markers/tornado-normal-marker.png'
            });
			markers[2] = new google.maps.Marker({
                position: positionVan,
                title : 'Van, Turkey',
                map: map,
			    animation: google.maps.Animation.DROP,
                html:'Van Eartquake, Turkey',
                icon:'assets/markers/tornado-normal-marker.png'
            });
			markers[3] = new google.maps.Marker({
                position: positionTohoku,
                title : 'Tohoku Tsunami, Japan',
                map: map,
			    animation: google.maps.Animation.DROP,
                html:'Tohoku, Japan',
                icon:'assets/markers/tornado-normal-marker.png'
            });

            
           
            closeInfoWindow = function() {
                infowindow.close();
                for (var i = 0; i < markers.length; i++) {
                    var marker = markers[i];
                    marker.setIcon('assets/markers/tornado-normal-marker.png');
                }
            };
            
            google.maps.event.addListener(map, 'mousedown', closeInfoWindow);
            
          
            for (var i = 0; i < markers.length; i++) {

                var marker = markers[i];

                google.maps.event.addListener(marker, 'mousedown', function () {
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
            google.maps.event.addListener(infowindow, 'mousedown', function() {
                for (var i = 0; i < markers.length; i++) {
                    var marker = markers[i];
                    marker.setIcon('assets/markers/tornado-normal-marker.png');
                }
                Relief1.views.viewport = new Relief1.views.Viewport();
                Relief1.views.viewport.setActiveItem(Relief1.views.feed);
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