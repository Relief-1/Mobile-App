// Let's register this model with our application and it to the models object associated with teagrams
// The model should reflect the json payload that is the response from the Relief1 API.

// We'll use the "mapping" method in order to drill down to nested objects in the JSON from the Relief1 response.
// eg. {city: "cityname", country: "countryname", disaster_type: "disaster", type: "string", mapping: "user.username"},
// Also, even thought we are only actually using the {city}, the {country} and the {Types} fields in the app currently
// we may find use for these other fields in the future and of course, we can always add more.

	Ext.regModel('Donations', {
	    fields: [
			{ name: 'firstName', type: "string", mapping: "donator.firstName"},
			{ name: 'lastName', type: "string", mapping: "donator.lastName" },
			{ name: 'profilPicture', type: "string", mapping: "donator.profilPicture" },
			{ name: 'location', type: "string", mapping: "donator.location" },
			{ name: 'donation', type: "string", mapping: "donator.donation" },
			{ name: 'donationComment', type: "string", mapping: "donator.donationComment" },
			{ name: 'donationDate', type: "string", mapping: "donator.donationDate" },
			{ name: 'time', type: "string", mapping: "donator.time" },
			{ name: 'SMHD', type: "string", mapping: "donator.SMHD" },
		]
	});	

