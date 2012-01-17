Relief1.views.map = Ext.extend(Ext.Panel, {
	title: 'Map',
	iconCls: 'map',
	layout: 'vbox',
	items: [{
		xtype: 'map'
	}]
});

Ext.reg('Map', Relief1.views.map);