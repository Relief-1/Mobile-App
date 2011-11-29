ListDemo = new Ext.Application({
    name: "ListDemo",
 
	launch: function() {
		
		ListDemo.detailToolbar = new Ext.Toolbar({
					ui: 'light',
					style: 'background: #1A1A1A -webkit-gradient( linear,0% 0%,0% 100%,from(rgba(255, 255, 255, .4)),to(transparent));font-size:20px;',
		            items: [{
		                text: 'back',
						ui: 'back',
						style: 'border: solid 1px #222222;',
		                handler: function() {
		                    ListDemo.Viewport.setActiveItem('indexlist');
		                }
		            }]
		        });
		
		ListDemo.detailPanel = new Ext.Panel({
			id: 'detailpanel',
			tpl: 'Hello, {City}!',
			dockedItems: [ListDemo.detailToolbar]
		});
		

		ListDemo.listPanel = new Ext.List({
            id: 'indexlist',
            store: ListDemo.ListStore,
            itemTpl: '<div class="contact"><span style="font-weight:bold;">{City}</span> - <span style="font-size:16px;">{Country}</span></div>',
            grouped: true,
            indexBar: true,
			onItemDisclosure: function(record) {
			                var name = '<span style="font-size:16px;">' + record.data.City + " " + record.data.Type + " - " + record.data.Country + '</span>';
			                ListDemo.detailToolbar.setTitle(name);
			                ListDemo.detailPanel.update(record.data);
			                ListDemo.Viewport.setActiveItem('detailpanel');
			      			}
        });


        ListDemo.Viewport = new Ext.Panel ({
            fullscreen: true,
            layout: 'card',
            items: [ListDemo.listPanel, ListDemo.detailPanel]
		});
	}
});
