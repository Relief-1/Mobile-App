Relief1 = new Ext.Application({
	name: 'Relief1',
	icon: 'http://adrienolczak.eu/Relief1_v0.1/app_icon.png',
	glossOnIcon: false,	
	tabletStartupScreen: '',
	phoneStartupScreen: '',
	
	launch: function() {
		this.views.Viewport = new this.views.Viewport();
	}
});