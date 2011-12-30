Ext.regModel('Contact', {
    fields: ['firstName', 'lastName', 'donation', 'donationDate']
});

DisasterList.ListStore = new Ext.data.Store({
    model: 'disaster_list', 
    sorters: 'disaster_country',
    getGroupString : function(record) {
        return record.get('disaster_country');
    },
    data: [
        { 	disaster_city: "Joplin", 
			disaster_country: "United States",
			disaster_country_abreviation: "USA",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/usa_flag.png",
			disaster_type: "Tornado",
			disaster_date: "May 22th, 2011",
		}, { 
			disaster_city: "New Orleans", 
			disaster_country: "United States",
			disaster_country_abreviation: "USA",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags//usa_flag.png",
			disaster_type: "Hurricanne",
			disaster_date: "May 22th, 2011" 
		}, { 	
			disaster_city: "Port au Prince",
			disaster_country: "Haiti",
			disaster_country_abreviation: "HT",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/ht_flag.png",
			disaster_type: "Earthquake ",
			disaster_date: "May 22th, 2011" 
		}, {
		 	disaster_city: "Tohoku",
			disaster_country: "Japan",
			disaster_country_abreviation: "JP",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/jp_flag.png",
			disaster_type: "Earthquake",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Hérault",
			disaster_country: "France",
			disaster_country_abreviation: "FR",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/fr_flag.png",
			disaster_type: "Flood",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Sichuan",
			disaster_country: "China",
			disaster_country_abreviation: "CN",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/cn_flag.png",
			disaster_type: "Earthquake",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Van",
			disaster_country: "Turkey",
			disaster_disaster_country_abreviation: "TR",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/tr_flag.png",
			disaster_type: "Earthquake",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Mekele",
			disaster_country: "Ethiopia",
			disaster_country_abreviation: "ETH",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/eth_flag.png",
			disaster_type: "Volcano",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Sikkim",
			disaster_country: "India",
			disaster_country_abreviation: "IND",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/ind_flag.png",
			disaster_type: "Earthquake",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Mogadishu",
			disaster_country: "Somalia",
			disaster_country_abreviation: "SO",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/so_flag.png",
			disaster_type: "Famine",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Westfield",
			disaster_country: "United States",
			disaster_country_abreviation: "USA",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/usa_flag.png",
			disaster_type: "Tornado",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Trenton",
			disaster_country: "United States",
			disaster_country_abreviation: "USA",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/usa_flag.png",
			disaster_type: "Hurricane Irene",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Funafuti",
			disaster_country: "Tuvalu",
			disaster_country_abreviation: "TV",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/tv_flag.png",
			disaster_type: "Drought",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Roleystone",
			disaster_country: "Australia",
			disaster_country_abreviation: "AU",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/au_flag.png",
			disaster_type: "Bushfire",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Bastrop",
			disaster_country: "United States",
			disaster_country_abreviation: "USA",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/usa_flag.png",
			disaster_type: "Wildfire",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Slave Lake",
			disaster_country: "Canada",
			disaster_country_abreviation: "CA",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/ca_flag.png",
			disaster_type: "Wildfire",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Singha Nakhon",
			disaster_country: "Thailand",
			disaster_country_abreviation: "TH",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags//th_flag.png",
			disaster_type: "Flood",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Minot",
			disaster_country: "United States",
			disaster_country_abreviation: "USA",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/usa_flag.png",
			disaster_type: "Flood",
			disaster_date: "May 22th, 2011" 
		}, { 
			disaster_city: "Seoul",
			disaster_country: "South Korea",
			disaster_country_abreviation: "SKO",
			disaster_country_flag:"http://192.168.1.10/Mobile-App/assets/img/country_flags/sko_flag.png",
			disaster_type: "Flood",
			disaster_date: "May 22th, 2011" 
		}
    ]
});