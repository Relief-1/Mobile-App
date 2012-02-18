Ext.regModel('Story', {
    fields: ['title', 'teaser', 'picture', 'organization']
});

Relief1.profilDonationsStore = new Ext.data.Store({
    model: 'Story',
    sorters: 'title',
    getGroupString : function(record) {
        return record.get('title');
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