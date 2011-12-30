// Let's register this model with our application and it to the models object associated with teagrams
// The model should reflect the json payload that is the response from the Relief1 API.

// We'll use the "mapping" method in order to drill down to nested objects in the JSON from the Relief1 response.
// eg. {city: "cityname", country: "countryname", disaster_type: "disaster", type: "string", mapping: "user.username"},
// Also, even thought we are only actually using the {city}, the {country} and the {Types} fields in the app currently
// we may find use for these other fields in the future and of course, we can always add more.

	Ext.regModel('disaster_list', {
	    fields: [
			{ name: 'city', type: "string", mapping: "disaster.city"},
			{ name: 'country', type: "string", mapping: "disaster.country" },
			{ name: 'country_abreviation', type: "string", mapping: "disaster.country.abrevation" },
			{ name: 'country_flag', type: "string", mapping: "disaster.country.flag.url" },
			{ name: 'disaster_type', type: "string", mapping: "disaster.type" },
			{ name: 'disaster_date', type: "string", mapping: "disaster.date" },
		]
	});	

