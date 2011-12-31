Relief1.views.map = Ext.extend(Ext.Panel, {
	title: 'Map',
	iconCls: 'map',
	layout: 'vbox',
	items: [{
		xtype: 'map',
		mapOptions: {
			center : new google.maps.LatLng(37.381592, -120.135672),
			zoom: 3,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			navigationControl: true,
			navigationControlOptions: { 
				style: google.maps.NavigationControlStyle.DEFAULT 
			},
		},
	}]
});

/*Relief1.views.map = Ext.extend(Ext.Panel, {
	title: 'Map',
	iconCls: 'map',
	layout: 'vbox',
	items: [{
		xtype: 'map',
		mapOptions: {
			center : new google.maps.LatLng(37.381592, -122.135672),
			zoom: 6,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			navigationControl: true,
			navigationControlOptions: { 
				style: google.maps.NavigationControlStyle.DEFAULT 
			},
		},
		useCurrentLocation: true,
		listeners: {
			maprender : function(comp, map){
				var marker = new google.maps.Marker({
					position: map.center,
					title: 'Joplin Tornado',
					map: map
				});
				
				infowindow.open(map, marker);
				
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map, marker);
				});
			}
		}
	}]
});*/

Ext.reg('Map', Relief1.views.map);