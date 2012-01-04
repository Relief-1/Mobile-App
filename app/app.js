Relief1 = new Ext.Application({
	name: 'Relief1',
	icon: 'app_icon.png',
	glossOnIcon: false,	
	tabletStartupScreen: '',
	phoneStartupScreen: '',
	
	launch: function() {
		this.views.Viewport = new this.views.Viewport();
	}
});