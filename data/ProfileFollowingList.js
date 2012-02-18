Ext.regModel('Story', {
    fields: ['title', 'teaser', 'picture', 'organization']
});

Relief1.profilFollowingStore = new Ext.data.Store({
    model: 'Story',
    sorters: 'title',
    getGroupString : function(record) {
        return record.get('title');
    },
    data: [
		{
			firstName: "Jack",
			lastName: "Dorsey",
			profilPicture:"assets/donators_img/jack.jpg",
			donationDate:"May 26th, 2011",
			time: "17",
		},	{
			firstName: "Paul",
			lastName: "Graham",
			profilPicture:"assets/donators_img/paul.jpg",
			donationDate:"May 26th, 2011",
			time: "17",
		},	{ 
			firstName: "Simon",
			lastName: "Huang",
			profilPicture:"assets/donators_img/simon.jpg",
			donationDate:"May 26th, 2011",
			time: "17",
			SMHD: "h"
		},	{ 
			firstName: "Shakeel",
			lastName: "Shafiq",
			profilPicture:"assets/donators_img/shakeel.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{ 
			firstName: "Ghislaine",
			lastName: "Guerin",
			profilPicture:"assets/donators_img/ghislaine.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{ 
			firstName: "Charlie",
			lastName: "McConnell",
			profilPicture:"assets/donators_img/charles.jpg",
			donationDate:"May 25th, 2011",
			time: "2",
			SMHD: "d"
		},	{ 
			firstName: "Doug",
			lastName: "Picirillo",
			profilPicture:"assets/donators_img/doug.jpg",
			donationDate:"May 24th, 2011",
			time: "3",
			SMHD: "d"
		},	{ 
			firstName: "Carter",
			lastName: "Leffen",
			profilPicture:"assets/donators_img/carter.jpg",
			donationDate:"May 23th, 2011",
			time: "4",
			SMHD: "d"
		},	{ 
			firstName: "Maciej",
			lastName: "Malecki",
			profilPicture:"assets/donators_img/maciej.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		}	
    ]
});