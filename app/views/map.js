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

Ext.reg('Map', Relief1.views.map);