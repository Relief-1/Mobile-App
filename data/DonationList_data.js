Ext.regModel('Contact', {
    fields: ['firstName', 'lastName', 'donation', 'donationDate']
});

Relief1.donationsListStore = new Ext.data.Store({
    model: 'Contact',
    sorters: 'donationDate',
    getGroupString : function(record) {
        return record.get('donationDate');
    },
    data: [
		{ 
			firstName: "Ashton",
			lastName: "Kutcher",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/ashton.jpg",
			location: "Los Angeles, CA, USA",
			donation:'$250',
			donationComment:"Let's rebuild joplin",
			donationDate:"May 26th, 2011",
			time: "23",
			SMHD: "s"
		},	{
			firstName: "Micheal",
			lastName: "Arrington",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/arrington.png",
			location: "San Fransisco, CA, USA",
			donation:'$50',
			donationComment:'a small donation',
			donationDate:"May 26th, 2011",
			time: "1",
			SMHD: "min"
		},	{ 
			firstName: "Elaine",
			lastName: "Guillon",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/elaine.jpg",
			location: "Nantes, France",
			donation:'$10',
			donationComment:'Bon courage Joplin',
			donationDate:"May 26th, 2011",
			time: "2",
			SMHD: "min"
		},	{ 
			firstName: "MG",
			lastName: "Sieger",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/mg.jpg",
			location: "San Fransisco, CA, USA",
			donation:'$5',
			donationComment:'Hope thing get better soon',
			donationDate:"May 26th, 2011",
			time: "4",
			SMHD: "min"
		},	{ 
			firstName: "Nick",
			lastName: "Bilton",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/nick.jpg",
			location: "Chicago, IL, USA",
			donation:'$10',
			donationComment:'Love to Joplin. Thank Relief1 for bringing donation to smartphones',
			donationDate:"May 26th, 2011",
			time: "6",
			SMHD: "min"
		},	{ 
			firstName: "Savino",
			lastName: "Johner",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/savino.jpg",
			location: "Thun, Switzerland",
			donation:'$5',
			donationComment:'Good luck guys.',
			donationDate:"May 26th, 2011",
			time: "12",
			SMHD: "min"
		},	{ 
			firstName: "Jake",
			lastName: "Howe",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/jake.jpg",
			location: "Nottingham, UK",
			donation:'$10',
			donationComment:"Consitency? Less is more? What's that?",
			donationDate:"May 26th, 2011",
			time: "18",
			SMHD: "min"
		},	{ 
			firstName: "Jeff",
			lastName: "Youngblood",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/jeff.jpg",
			location: "Joplin, MO, USA",
			donation:'$10',
			donationComment:'A modest contribution for my city, hope things will get better soon.',
			donationDate:"May 26th, 2011",
			time: "23",
			SMHD: "min"
		},  {	
			firstName: "CocaCola ®",
			lastName: "",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/coca.jpg",
			location: "New York, USA",
			donation:'$2500',
			donationComment:'Wish Joplin all the best. Hope this donation could help set thing back to normalcy as soon as possible.',
			donationDate:"May 26th, 2011",
			time: "35",
			SMHD: "min"
		},	{ 
			firstName: "Jann",
			lastName: "Horn",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/jann.jpg",
			location: "Good luck from germany",
			donation:'$5',
			donationComment:'Lorem ipsum dolor sit amet consectetur',
			donationDate:"May 27th, 2011",
			time: "41",
			SMHD: "min"
		}, { 
			firstName: "Doug",
			lastName: "Picirillo",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/doug.jpg",
			location: "Chicago, IL, USA",
			donation:'$25',
			donationComment:"Contribution to help Joplin where a friend of mine survived.",
			donationDate:"May 27th, 2011",
			time: "46",
			SMHD: "min"
		},	{ 
			firstName: "Charlie",
			lastName: "McConnell",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/charles.jpg",
			location: "San Fransisco, CA, USA",
			donation:'$10',
			donationComment:"We're with you Joplin",
			donationDate:"May 27th, 2011",
			time: "54",
			SMHD: "min"
		},	{ 
			firstName: "Jack",
			lastName: "Dorsey",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/jack.jpg",
			location: "Palo Alto, CA, USA",
			donation:'$100',
			donationComment:'small contribution.',
			donationDate:"May 27th, 2011",
			time: "1",
			SMHD: "h"
		},  { 
			firstName: "Paul",
			lastName: "Graham",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/paul.jpg",
			location: "San Fransisco, CA, USA",
			donation:'$25',
			donationComment:'Be strong Joplin',
			donationDate:"May 27th, 2011",
			time: "1",
			SMHD: "h"
		}, 	{ 
			firstName: "Carter",
			lastName: "Leffen",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/carter.jpg",
			location: "Joplin, MO, USA",
			donation:'$25',
			donationComment:'Helping rebuild my hometown',
			donationDate:"May 28th, 2011",
			time: "2",
			SMHD: "h"			
		},	{ 
			firstName: "",
			lastName: "Olczak",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/adrien.jpg",
			location: "Paris, France",
			donation:'$10',
			donationComment:"Small way of helping those affected. Good luck from France",
			donationDate:"May 28th, 2011",
			time: "2",
			SMHD: "h"
		},	{ 
			firstName: "Simon",
			lastName: "Huang",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/simon.jpg",
			location: "Shanghai, China",
			donation:'$5',
			donationComment:'Support from China',
			donationDate:"May 28th, 2011",
			time: "3",
			SMHD: "h" 
		},	{ 
			firstName: "Ghislaine",
			lastName: "Guerin",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/ghislaine.png",
			location: "Poitiers, France",
			donation:'$5',
			donationComment:'God bless you Joplin',
			donationDate:"May 28th, 2011",
			time: "3",
			SMHD: "h"
		},  { 
			firstName: "Shakeel",
			lastName: "Shafiq",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/shakeel.jpg",
			location: "Islamabad, Pakistan",
			donation:'$25',
			donationComment:"I wanted to help so here's my modest donation",
			donationDate:"May 28th, 2011",
			time: "4",
			SMHD: "h"
		},	{ 
			firstName: "Maciej",
			lastName: "Malecki",
			profilPicture:"http://localhost/Relief1_v0.2/assets/profil_img/maciej.jpg",
			location: "Poznan, Poland",
			donation:'$10',
			donationComment:'hope that could help too',
			donationDate:"May 28th, 2011",
			time: "4",
			SMHD: "h"
		},
    ]
});