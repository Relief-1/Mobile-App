var position = new google.maps.LatLng(37.44885,-122.158592),  //Sencha HQ

	infowindow = new google.maps.InfoWindow({
		content: 'Sencha Touch HG'
	}),
		
		image = new google.maps.MarkerImage(
			'point.png',
			new google.maps.Size(32, 31),
			new google.maps.Point(0, 0),
			new google.maps.Point(16,31)
		),
		
		shadow = new google.maps.MarkerImage(
			'point.png',
			new google.maps.Size(64, 52),
			new google.maps.Point(0 , 0),
			new google.maps.Point(16, 31)
		),
		
	trackingButton = Ext.create({
		xtype	: 'button',
		iconMask: true,
		iconCls : 'locate'
	}),
	
	toolbar = new Ext.Toolbar ({
		dock: 'top',
		xtype: 'toolbar',
		ui: 'light',
		defaults: {
			iconMask: true
		},
		items: [
		{
			position : position,
			iconCls  : 'home',
			handler  : function(){
				// disable tracking
				trackingButton.ownerCt.setActivee(trackingButton, false);
				mapdemo.map.panTo(this.position);
			}
		}, {
			xtype : 'segmentedbutton',
			alowMutiple : true,
			listeners : {
				toggle : function(button, button, active){
					if(button.iconCls == "maps"){
						mapdemi.traffic[active ? 'show' : 'hide']();
					}else if(button.iconCls == 'locate'){
						mapdemo.geo[ative ? 'resumeUpdates' : 'suspendUpdates']();
					}
				}
			},
			items : [
					trackingButton,
					{
						iconMask: true,
						iconCls: 'maps'
					}
			]
			
		}
		]
	})

Relief1App.views.Mapcard = Ext.extend(Ext.Panel, {
	title: "Map",
	iconCls: "map",
	items: [{
		xtype: 'map',
		mapOptions: {
			center : new google.maps.LatLng(37.381592, -122.135672),
			zoom: 12,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
			navigationControl: true,
			navigationControlOptions: { 
				style: google.maps.NavigationControlStyle.DEFAULT 
			},

		},
		
	}]
});



Ext.reg('Map', Relief1App.views.Mapcard);