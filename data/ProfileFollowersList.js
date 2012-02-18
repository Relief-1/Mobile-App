Ext.regModel('Story', {
    fields: ['title', 'teaser', 'picture', 'organization']
});

Relief1.profilFollowersStore = new Ext.data.Store({
    model: 'Story',
    sorters: 'title',
    getGroupString : function(record) {
        return record.get('title');
    },
    data: [
		{ 
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
			firstName: "Maciej",
			lastName: "Malecki",
			profilPicture:"assets/donators_img/maciej.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{ 
			firstName: "Pierre",
			lastName: "Valade",
			profilPicture:"assets/donators_img/pierre.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{
			firstName: "Olivier",
			lastName: "Desmoulin",
			profilPicture:"assets/donators_img/olivier.jpg",
			donationDate:"May 25th, 2011",
			time: "2",
			SMHD: "d"
		},	{ 
			firstName: "Vincent",
			lastName: "Courcelle",
			profilPicture:"assets/donators_img/vincent.jpg",
			donationDate:"May 25th, 2011",
			time: "2",
			SMHD: "d"
		},	{ 
			firstName: "Matthias",
			lastName: "Kampitsch",
			profilPicture:"assets/donators_img/matthias.jpg",
			donationDate:"May 24th, 2011",
			time: "3",
			SMHD: "d"
		},	{ 
			firstName: "Ian",
			lastName: "Lunn",
			profilPicture:"assets/donators_img/ian.jpg",
			donationDate:"May 23th, 2011",
			time: "4",
			SMHD: "d"
		},	{ 
			firstName: "Victor",
			lastName: "Bruzeau",
			profilPicture:"assets/donators_img/victor.jpg",
			donationDate:"May 26th, 2011",
			time: "17",
			SMHD: "h"
		},	{ 
			firstName: "Mickaël",
			lastName: "Denié",
			profilPicture:"assets/donators_img/mickael.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{ 
			firstName: "Guillaume",
			lastName: "Sempe",
			profilPicture:"assets/donators_img/gsempe.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{ 
			firstName: "Elaine",
			lastName: "Guillon",
			profilPicture:"assets/donators_img/elaine.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{ 
			firstName: "Jann",
			lastName: "Horn",
			profilPicture:"assets/donators_img/jann.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{
			firstName: "Dmitry",
			lastName: "Shapiro",
			profilPicture:"assets/donators_img/dmitry.jpg",
			donationDate:"May 25th, 2011",
			time: "2",
			SMHD: "d"
		},	{ 
			firstName: "Yohan",
			lastName: "Erent",
			profilPicture:"assets/donators_img/yohan.jpg",
			donationDate:"May 25th, 2011",
			time: "2",
			SMHD: "d"
		},	{ 
			firstName: "Justin",
			lastName: "Norris",
			profilPicture:"assets/donators_img/justin.jpg",
			donationDate:"May 24th, 2011",
			time: "3",
			SMHD: "d"
		},	{ 
			firstName: "Ashton",
			lastName: "Kutcher",
			profilPicture:"assets/donators_img/ashton.jpg",
			donationDate:"May 23th, 2011",
			time: "4",
			SMHD: "d"
		},	{ 
			irstName: "Micheal",
			lastName: "Arrington",
			profilPicture:"assets/donators_img/arrington.png",
			donationDate:"May 26th, 2011",
			time: "17",
			SMHD: "h"
		},	
		{ 
			firstName: "MG",
			lastName: "Sieger",
			profilPicture:"assets/donators_img/mg.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{ 
			firstName: "Nick",
			lastName: "Bilton",
			profilPicture:"assets/donators_img/nick.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{ 
			firstName: "Savino",
			lastName: "Johner",
			profilPicture:"assets/donators_img/savino.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{ 
			firstName: "Jake",
			lastName: "Howe",
			profilPicture:"assets/donators_img/jake.jpg",
			donationDate:"May 25th, 2011",
			time: "1",
			SMHD: "d"
		},	{
			firstName: "Jeff",
			lastName: "Youngblood",
			profilPicture:"assets/donators_img/jeff.jpg",
			donationDate:"May 25th, 2011",
			time: "2",
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
		}
    ]
});