Ext.regModel('Donator', {
    fields: ['firstName', 'lastName', 'profilPicture', 'location', 'donation', 'donationComment', 'donationDate', 'time' ,'SMHD']
});

Relief1.donationsListStore = new Ext.data.Store({
    model: 'Donator',
    sorters: 'donationDate',
    getGroupString : function(record) {
        return record.get('donationDate');
    },
    data: [
		{ 
			firstName: "Ashton",
			lastName: "Kutcher",
			profilPicture:"assets/donators_img/ashton.jpg",
			location: "Los Angeles, CA, USA",
			donation:'$250',
			typeOfActivity:'gave',
			activityName:'$250 to Joplin',
			donationComment:"Let's rebuild joplin",
			donationDate:"May 26th, 2011",
			time: "23",
			SMHD: "s"
		},	{
			firstName: "Micheal",
			lastName: "Arrington",
			profilPicture:"assets/donators_img/arrington.png",
			location: "San Fransisco, CA, USA",
			donation:'$50',
			typeOfActivity:'gave',
			activityName:'$50 to Joplin',
			donationComment:'a small donation',
			donationDate:"May 26th, 2011",
			time: "1",
			SMHD: "m"
		},	{ 
			firstName: "Paul",
			lastName: "Graham",
			profilPicture:"assets/donators_img/paul.jpg",
			location: "San Fransisco, CA, USA",
			donation:'$25',
			typeOfActivity:'gave',
			activityName:'$25 to Joplin',
			donationComment:'Be strong Joplin',
			donationDate:"May 26th, 2011",
			time: "1",
			SMHD: "h"
		}, { 
			firstName: "MG",
			lastName: "Sieger",
			profilPicture:"assets/donators_img/mg.jpg",
			location: "San Fransisco, CA, USA",
			donation:'$5',
			typeOfActivity:'gave',
			activityName:'$5 to Joplin',
			donationComment:'Hope thing get better soon',
			donationDate:"May 26th, 2011",
			time: "4",
			SMHD: "m"
		},	{ 
			firstName: "Nick",
			lastName: "Bilton",
			profilPicture:"assets/donators_img/nick.jpg",
			location: "Chicago, IL, USA",
			donation:'$10',
			typeOfActivity:'gave',
			activityName:'$10 to Joplin',
			donationComment:'Love to Joplin. Thank Relief1 for bringing donation to smartphones',
			donationDate:"May 26th, 2011",
			time: "6",
			SMHD: "m"
		},	{ 
			firstName: "Savino",
			lastName: "Johner",
			profilPicture:"assets/donators_img/savino.jpg",
			location: "Thun, Switzerland",
			donation:'$5',
			donationComment:'Good luck guys.',
			donationDate:"May 26th, 2011",
			time: "12",
			SMHD: "m"
		},	{ 
			firstName: "Jake",
			lastName: "Howe",
			profilPicture:"assets/donators_img/jake.jpg",
			location: "Nottingham, UK",
			donation:'$10',
			typeOfActivity:'gave',
			activityName:'$10 to Joplin',
			donationComment:"Consitency? Less is more? What's that?",
			donationDate:"May 26th, 2011",
			time: "18",
			SMHD: "m"
		},	{ 
			firstName: "Jeff",
			lastName: "Youngblood",
			profilPicture:"assets/donators_img/jeff.jpg",
			location: "Joplin, MO, USA",
			donation:'$10',
			typeOfActivity:'gave',
			activityName:'$10 to Joplin',
			donationComment:'A modest contribution for my city, hope things will get better soon.',
			donationDate:"May 26th, 2011",
			time: "23",
			SMHD: "m"
		},  {	
			firstName: "CocaCola ®",
			lastName: "",
			profilPicture:"assets/donators_img/coca.jpg",
			location: "New York, USA",
			donation:'$2,500',
			typeOfActivity:'gave',
			activityName:'$2,500 to Joplin',
			donationComment:'Wish Joplin all the best. Hope this donation could help set thing back to normalcy as soon as possible.',
			donationDate:"May 26th, 2011",
			time: "35",
			SMHD: "m"
		},	{ 
			firstName: "Jann",
			lastName: "Horn",
			profilPicture:"assets/donators_img/jann.jpg",
			location: "Good luck from germany",
			donation:'$5',
			typeOfActivity:'gave',
			activityName:'$5 to Joplin',
			donationComment:'Lorem ipsum dolor sit amet consectetur',
			donationDate:"May 27th, 2011",
			time: "41",
			SMHD: "m"
		}, { 
			firstName: "Doug",
			lastName: "Picirillo",
			profilPicture:"assets/donators_img/doug.jpg",
			location: "Chicago, IL, USA",
			donation:'$25',
			typeOfActivity:'gave',
			activityName:'$25 to Joplin',
			donationComment:"Contribution to help Joplin where a friend of mine survived.",
			donationDate:"May 27th, 2011",
			time: "46",
			SMHD: "m"
		},	{ 
			firstName: "Charlie",
			lastName: "McConnell",
			profilPicture:"assets/donators_img/charles.jpg",
			location: "San Fransisco, CA, USA",
			donation:'$10',
			typeOfActivity:'gave',
			activityName:'$10 to Joplin',
			donationComment:"We're with you Joplin",
			donationDate:"May 27th, 2011",
			time: "54",
			SMHD: "m"
		},	{ 
			firstName: "Jack",
			lastName: "Dorsey",
			profilPicture:"assets/donators_img/jack.jpg",
			location: "Palo Alto, CA, USA",
			donation:'$100',
			typeOfActivity:'gave',
			activityName:'$100 to Joplin',
			donationComment:'small contribution.',
			donationDate:"May 27th, 2011",
			time: "1",
			SMHD: "h"
		},  { 
			firstName: "Carter",
			lastName: "Leffen",
			profilPicture:"assets/donators_img/carter.jpg",
			location: "Joplin, MO, USA",
			donation:'$25',
			typeOfActivity:'gave',
			activityName:'$25 to Joplin',
			donationComment:'Helping rebuild my hometown',
			donationDate:"May 28th, 2011",
			time: "2",
			SMHD: "h"			
		},	{ 
			firstName: "Ad",
			lastName: "Olczak",
			profilPicture:"assets/donators_img/adrien.jpg",
			location: "Paris, France",
			donation:'$10',
			typeOfActivity:'gave',
			activityName:'$10 to Joplin',
			donationComment:"Small way of helping those affected. Good luck from France",
			donationDate:"May 26th, 2011",
			time: "2",
			SMHD: "h"
		},	{ 
			firstName: "Elaine",
			lastName: "Guillon",
			profilPicture:"assets/donators_img/elaine.jpg",
			location: "Nantes, France",
			donation:'$10',
			typeOfActivity:'gave',
			activityName:'$10 to Joplin',
			donationComment:'Bon courage Joplin',
			donationDate:"May 26th, 2011",
			time: "2",
			SMHD: "m"
		}, 	{ 
			firstName: "Simon",
			lastName: "Huang",
			profilPicture:"assets/donators_img/simon.jpg",
			location: "Shanghai, China",
			donation:'$5',
			donationComment:'Support from China',
			donationDate:"May 28th, 2011",
			time: "3",
			SMHD: "h" 
		},	{ 
			firstName: "Ghislaine",
			lastName: "Guerin",
			profilPicture:"assets/donators_img/ghislaine.jpg",
			location: "Poitiers, France",
			donation:'$5',
			typeOfActivity:'gave',
			activityName:'$5 to Joplin',
			donationComment:'God bless you Joplin',
			donationDate:"May 28th, 2011",
			time: "3",
			SMHD: "h"
		},  { 
			firstName: "Shakeel",
			lastName: "Shafiq",
			profilPicture:"assets/donators_img/shakeel.jpg",
			location: "Islamabad, Pakistan",
			donation:'$25',
			typeOfActivity:'gave',
			activityName:'$25 to Joplin',
			donationComment:"I wanted to help so here's my modest donation",
			donationDate:"May 28th, 2011",
			time: "4",
			SMHD: "h"
		},	{ 
			firstName: "Maciej",
			lastName: "Malecki",
			profilPicture:"assets/donators_img/maciej.jpg",
			location: "Poznan, Poland",
			donation:'$10',
			typeOfActivity:'gave',
			activityName:'$10 to Joplin',
			donationComment:'hope that could help too',
			donationDate:"May 28th, 2011",
			time: "4",
			SMHD: "h"
		},
    ]
});