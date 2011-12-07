DisasterDetailsList.ListStore = new Ext.data.Store({
    model: 'disaster_list_details',
    getGroupString : function(record) {
        return record.get('disaster_city');
    },
    data: [
        {
	 		disaster_city: "Joplin", 
		}, {
			disaster_country: "United States",
		}, {
			disaster_country_abreviation: "USA",
		}, {
			disaster_country_flag:"http://192.168.1.14/Mobile-App/assets/img/country_flags/usa_flag.png",
		}, {
			disaster_type: "Tornado",
		}, {
			disaster_date: "May 22th, 2011",
		}
    ]
});
