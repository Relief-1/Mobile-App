Relief1App.views.Viewport = Ext.extend(Ext.TabPanel, {
	fullscreen: true,
	tabBar: {
		dock: 'bottom',
		layout: {pack: 'center'},
		ui: 'dark',
		cardSwitchAnimation: {type: 'slide', duration: 500}
	},
	items: [
		{ xtype: 'LiveFeed' },
		{ xtype: 'Map' },
		{ xtype: 'NeedHelp' },
		{ xtype: 'HelpOut' },
		{ xtype: 'Profile' }
	],
	dockedItems: [{
		xtype: "toolbar",
		title: "Relief1", style: "background: #1A1A1A -webkit-gradient( linear,0% 0%,0% 100%,from(rgba(255, 255, 255, .4)),to(transparent));font-size:20px;",
		items: [
			{xtype: 'spacer'},
			{text: 'sign-up', style: "color: #111111; border: solid 1px #222222; text-shadow: 0px 1px rgb(255,200,112); background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.01, rgb(237,116,7)),color-stop(0.01, rgb(237,116,7)),color-stop(0.54, rgb(255,151,33)),color-stop(0.87, rgb(250,189,92)));"}
		]
	}]
});