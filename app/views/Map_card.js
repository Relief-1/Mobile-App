Relief1App.views.Mapcard = Ext.extend(Ext.Panel, {
	title: "Map",
	iconCls: "locate",
	items: [{
		xtype: 'map',
		mapOptions: {
			zoom: 3
		}
	}]
});

Ext.reg('Map', Relief1App.views.Mapcard);