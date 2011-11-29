Relief1App.views.LiveFeedcard = Ext.extend(Ext.Panel, {
	title: "Live Feed",
	iconCls: "home",
	dockedItems: [{
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
						pressed: true
                    },
                    {
                        text: "Disasters",
						style: "width: 5em;",
						title: 'Grouped',
						items: [{
					            store: ListDemo.ListStore,
						}]
                    }
                ]
        }]
	}]
});	

Ext.reg('LiveFeed', Relief1App.views.LiveFeedcard);