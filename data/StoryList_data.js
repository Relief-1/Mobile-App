Ext.regModel('Story', {
    fields: ['title', 'teaser', 'picture', 'organization']
});

Relief1.storyListStore = new Ext.data.Store({
    model: 'Story',
    sorters: 'title',
    getGroupString : function(record) {
        return record.get('title');
    },
    data: [
		{ 
			title: "CocaCola",
			teaser: "Modest Donation from CocaCola",
			picture:"assets/donators_img/ashton.jpg",
			organization: "Coca"
		},	{
			title: "CocaCola",
			teaser: "Modest Donation from CocaCola",
			picture:"assets/donators_img/ashton.jpg",
			organization: "Coca"
		},	{ 
			title: "CocaCola",
			teaser: "Modest Donation from CocaCola",
			picture:"assets/donators_img/ashton.jpg",
			organization: "Coca"
		}
    ]
});