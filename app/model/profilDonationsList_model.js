Ext.regModel('ProfilDonation', {
	    fields: [
			{ name: 'firstName', type: "string", mapping: "firstName.donator"},
			{ name: 'lastName', type: "string", mapping: "lastName.donator" },
			{ name: 'country_abreviation', type: "string", mapping: "disaster.country.abrevation" },
			{ name: 'country_flag', type: "string", mapping: "disaster.country.flag.url" },
			{ name: 'disaster_type', type: "string", mapping: "disaster.type" },
			{ name: 'disaster_date', type: "string", mapping: "disaster.date" },
		]
});