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
			typeOfActivity:'gave',
			activityPicture:"assets/profil_ui/joplin.png",
			activityName:'$50 to Joplin',
			donationCommentValue: 1,
			donationComment:"Small way of helping those affected. Good luck from France.",
			donationDate:"May 26th, 2011",
			time: "2",
			SMHD: "h"
		},  { 
			firstName: "Adrien",
			lastName: "Olczak",
			profilPicture:"assets/donators_img/adrien.jpg",
			typeOfActivity:'is now following',
			activityPicture:"assets/donators_img/ghislaine.jpg",
			activityName:'Ghislaine Guerin',
			donationCommentValue: 0,
			donationDate:"May 26th, 2011",
			time: "17",
			SMHD: "h"
		},	{
			firstName: "Adrien",
			lastName: "Olczak",
			profilPicture:"assets/donators_img/adrien.jpg",
			typeOfActivity:'is now following',
			activityPicture:"assets/donators_img/jack.jpg",
			activityName:'Jack Dorsey',
			donationCommentValue: 0,
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
			donationCommentValue: 1,
			donationDate:"May 26th, 2011",
			time: "7",
			SMHD: "day"
		},	{ 
			firstName: "Adrien",
			lastName: "Olczak",
			profilPicture:"assets/donators_img/adrien.jpg",
			typeOfActivity:'gave',
			activityPicture:"assets/profil_ui/tokyo.png",
			activityName:'$25 to Tokyo',
			donationCommentValue: 1,
			donationComment:"Stay strong Japan.",
			donationDate:"May 26th, 2011",
			time: "7",
			SMHD: "day"
		}
    ]
});