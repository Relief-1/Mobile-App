Relief1.views.Viewport = Ext.extend(Ext.TabPanel, {
	fullscreen: true,
	style: 'background:#555555',
	tabBar: {
		dock: 'bottom',
		layout: { pack: 'center'},
		cardSwitchAnimation: {type: 'slide',duration: 500}
	},
	items: [
		{ xtype: 'Feed'    },
		{ xtype: 'Map'     },
		{ xtype: 'Profile' }
	],
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Relief1'
	}]
});