Ext.regModel('profilActivity', {
    fields: ['firstName', 'lastName', 'profilPicture', 'location', 'donation', 'donationComment', 'donationDate', 'time' ,'SMHD']
});

Relief1.profilActivityListStore = new Ext.data.Store({
    model: 'profilActivity',
    getGroupString : function(record) {
        return record.get('donationDate');
    },
    data: [
		{ 
			firstName: "Adrien",
			lastName: "Olczak",
			profilPicture:"assets/donators_img/adrien.jpg",
			typeOfActivity:'just donated',
			activityPicture:"assets/profil_ui/joplin.png",
			activityName:'$50 to Joplin',
			donationDate:"May 26th, 2011",
			time: "2",
			SMHD: "hours"
		},  { 
			firstName: "Adrien",
			lastName: "Olczak",
			profilPicture:"assets/donators_img/adrien.jpg",
			typeOfActivity:'is now following',
			activityPicture:"assets/donators_img/ghislaine.jpg",
			activityName:'Ghislaine Guerin',
			donationDate:"May 26th, 2011",
			time: "17",
			SMHD: "hours"
		},	{
			firstName: "Adrien",
			lastName: "Olczak",
			profilPicture:"assets/donators_img/adrien.jpg",
			typeOfActivity:'is now following',
			activityPicture:"assets/donators_img/jack.jpg",
			activityName:'Jack Dorsey',
			donationDate:"May 26th, 2011",
			time: "1",
			SMHD: "day"
		},	{ 
			firstName: "Adrien",
			lastName: "Olczak",
			profilPicture:"assets/donators_img/adrien.jpg",
			typeOfActivity:'earned',
			activityPicture:"assets/profil_ui/badge.png",
			activityName:'"Awesome Donator" ',
			badge:'badge',
			donationDate:"May 26th, 2011",
			time: "7",
			SMHD: "day"
		},	{ 
			firstName: "Adrien",
			lastName: "Olczak",
			profilPicture:"assets/donators_img/adrien.jpg",
			typeOfActivity:'just donated',
			activityPicture:"assets/profil_ui/tokyo.png",
			activityName:'$50 to Tokyo',
			donationDate:"May 26th, 2011",
			time: "7",
			SMHD: "day"
		}
    ]
});