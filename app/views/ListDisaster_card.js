DisasterList = new Ext.Application({
    name: "ListDemo",
 
	launch: function() {
		
		// Disaster Detail Toolbar
		DisasterList.detailToolbar = new Ext.Toolbar({
					ui: 'light',
					style: 'background: #1A1A1A -webkit-gradient( linear,0% 0%,0% 100%,from(rgba(255, 255, 255, .4)),to(transparent));font-size:20px;',
		            items: [
					{
		                text: 'back',
						ui: 'back',
						style: 'border: solid 1px #222222;',
		                handler: function() {
		                    DisasterList.Viewport.setActiveItem('indexlist',{type: 'slide', direction: 'right'})
		            	}
		            },
					{xtype: 'spacer'},
					{text: 'sign-up', style: "color: #111111; border: solid 1px #222222; text-shadow: 0px 1px rgb(255,200,112); background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.01, rgb(237,116,7)),color-stop(0.01, rgb(237,116,7)),color-stop(0.54, rgb(255,151,33)),color-stop(0.87, rgb(250,189,92)));" },
		],
		});
		// List Toolbar Toolbar
		DisasterList.Toolbar = new Ext.Toolbar({
					title: 'Relief1',
					ui: 'light',
					style: 'background: #1A1A1A -webkit-gradient( linear,0% 0%,0% 100%,from(rgba(255, 255, 255, .4)),to(transparent));font-size:20px;',
					items: [
						{xtype: 'spacer'},
						{text: 'sign-up', style: "color: #111111; border: solid 1px #222222; text-shadow: 0px 1px rgb(255,200,112); background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.01, rgb(237,116,7)),color-stop(0.01, rgb(237,116,7)),color-stop(0.54, rgb(255,151,33)),color-stop(0.87, rgb(250,189,92)));"}
					]
		});
		
		// Sub Toolbar : Latest/Disasters
		DisasterList.SubToolbar = new Ext.Toolbar({
				xtype: "toolbar",
				ui: "light",
				layout: {pack: "center"},
				items: [
		        {
		                xtype: "segmentedbutton",
		                items: [
		                    {
		                        text: "Latest",
								style: "width: 5em;",
		                    },
		                    {
		                        text: "Disasters",
								style: "width: 5em;",
								pressed: true,
		                    }
		                ]
			}],
		});
		
		// Disasters Details template
		DisasterDetailsTemplate = new Ext.XTemplate(
			'<div class="disaster_topcontainer_header">Disaster informations</div>', 	// Information Header
			'<div class="disaster_topcontainer">',										// Disaster Top container (Start)
				'<div class="disasterPhoto_container">',									// Disaster Photo container (Start)
					'<div class="disasterPhoto_frame"></div>',									// Disaster Photo
				'</div>', 																	// Disaster Photo container (End)
				'<div class="disasterName_container">',										// Disaster Infos container (Start)
					'<span class="disaster_name"><div class="disater_place_icon"></div> {disaster_city}, {disaster_country} <span class="disaster_country_flag"><img src="{disaster_country_flag}" width="30" height="30" border="0" alt="{disaster_country_abreviation}" /></span> </span>', // Disaster Name
					'<div class="disaster_type"><div class="disater_type_icon"></div> {disaster_type} </div>',
					'<div class="disaster_date"><div class="disater_date_icon"></div> {disaster_date} </div>',// Disaster Date
				'</div>',																	// Disaster Infos container (End)
				'<br/><span class="disaster_stats_container"></span>',						// Disaster Stats container															
			'</div>', 																	// Disaster Top container (End)																	
			'<div class="disaster_activitycontainer_header">Recent activity</div>' 		// Activity Header
		);
		
		// Disasters List template
		DisasterListTemplate = new Ext.XTemplate(
			'<div><span class="list_disaster_city">{disaster_city}</span>',
			' - <span class="list_disaster_country">{disaster_type}</span></div>'
		);
		
		// Disaster Details screen
		DisasterList.detailPanel = new Ext.Panel({
			id: 'detailpanel',
			tpl: DisasterDetailsTemplate,
			dockedItems: [DisasterList.detailToolbar],
		});
		
		// List of Disasters screen
		DisasterList.ListPanelContainer = new Ext.Panel({
			layout: 'fit',
			id: 'indexlist',
			items: [{
				xtype: 'list',
		            store: DisasterList.ListStore,
					ui: 'dark',
		            itemTpl: DisasterListTemplate,
		            grouped: true,
		            indexBar: true,
					onItemDisclosure: function(record) {
									var disaster_city_name = '<div class="disaster_detail_topbartitle">Disaster</div>';
					                DisasterList.detailToolbar.setTitle(disaster_city_name);
					                DisasterList.detailPanel.update(record.data);
					                DisasterList.Viewport.setActiveItem('detailpanel',{type: 'slide', direction: 'left'});
					      			}
			}],
			dockedItems: [DisasterList.Toolbar,DisasterList.SubToolbar],
		});
		
		/* 
		DisasterList.listPanel = new Ext.List({
            id: 'indexlist',
            store: DisasterList.ListStore,
			ui: 'dark',
            itemTpl: DisasterListTemplate,
            grouped: true,
            indexBar: true,
			onItemDisclosure: function(record) {
							var disaster_city_name = '<div class="disaster_detail_topbartitle">Disaster</div>';
			                DisasterList.detailToolbar.setTitle(disaster_city_name);
			                DisasterList.detailPanel.update(record.data);
			                DisasterList.Viewport.setActiveItem('detailpanel',{type: 'slide', direction: 'left'});
			      			}
        }); */

		
		// Panel object which hold the 2 screens (aka "cards")
        DisasterList.Viewport = new Ext.Panel ({
            fullscreen: true,
            layout: 'card',
            items: [DisasterList.ListPanelContainer, DisasterList.detailPanel],
		});
	}
});
