///////////////////////////////////////////////////////
//				   PROFIL TOP PART                   //
///////////////////////////////////////////////////////
var profilePicture = new Ext.Panel({
	width: 125,
	height: 125,
	style: 'background: url(assets/profil_ui/profil_picture.png) no-repeat; margin-top:13px; margin-left:13px; float:left;',
});
var profileNameInfos = new Ext.Panel({
	height: 50,
	html: '<div class="profileName">Adrien Olczak</div><div class="profileCity">Paris, France</div>',
	style: 'margin-top:15px; margin-left:10px; float:left;'
});
var profileDonationsCounter = new Ext.Button({
	html: '7<br><span class="counter_name">Donation</span>',
	cls: 'profileDonationsCounter'
});
var profileIndirectDonationsCounter = new Ext.Button({
	html: '24<br><span class="counter_name">Indirect</span>',
	cls: 'profileIndirectDonationsCounter',
});
var profileBadgesCounter = new Ext.Button({
	html: '9<br><span class="counter_name">Badges</span>',
	cls: 'profileBadgesCounter'
});
var profileCountersContainer = new Ext.Panel({
	cls: 'profileCountersContainer',
	items: [profileDonationsCounter,profileIndirectDonationsCounter,profileBadgesCounter]
});
var profileTopPart = new Ext.Panel({
	width: 320,
	height: 150,
	style: 'background: url(assets/profil_ui/profil_bg.jpg); float:left; -webkit-box-shadow: 0px 0px 5px #111111;',
	items: [profilePicture,profileNameInfos,profileCountersContainer]
});

///////////////////////////////////////////////////////
//				   PROFIL LEVEL 	                 //
///////////////////////////////////////////////////////
var profileLevelHeader = new Ext.Panel({
	height: 25,
	width: 320,
	html: '<div class="profileLevelHeaderText">Current level</div>',
	cls: 'profileLevelHeader'
});
var profileLevelArrow = new Ext.Panel({
	cls: 'profileLevel_arrow'
});
var profileLevel = new Ext.Panel({
	cls: 'profileLevel'
});
var profileLevelContainer = new Ext.Panel({
	height: 50,
	width: 320,
	cls: 'profileLevelContainer',
	items:[profileLevelArrow,profileLevel]
});

///////////////////////////////////////////////////////
//				 PROFIL ACTIVITY FEED	             //
///////////////////////////////////////////////////////
var profileLastestHeader = new Ext.Panel({
	height: 25,
	width: 320,
	html: '<div class="profileLatestHeaderText">Lastest activity</div>',
	cls: 'profileLatestHeader'
});

///////////////////////////////////////////////////////
//					1st TEMPLATE                     //
///////////////////////////////////////////////////////
var profileActivity = new Ext.XTemplate(
	'<div class="donationList" class="contact">',
		'<div class="donationPicture2">',
			'<img src="{profilPicture}" width="39" height="39" border="0">',
			'<div class="activityPicture"><img src="{activityPicture}" width="39" height="39" border="0"></div>',
		'</div>',
		'<span>',
			'<div style="float:left; font-size:14px; padding-left:20px;"><b>{firstName} {lastName}</b></div>',
			'<div style="float:right; font-size:.6em; color:#999999; text-align:right;">{time}{SMHD}</div>',
			'<br/><div style="font-size:12px; color:#444444; margin-left:20px !important; float:left;">{typeOfActivity}</div>',
			'<div style="font-size:12px; line-height:13px; margin-left:5px !important; float:left;"><b>{activityName}</b>{badge}</div>',
		'</span>',
		'<div class="donationArrow"></div>',
		'<div style="width:100%; height:37px;"></div>',
	'</div>'
);
var profileActivityDetails = new Ext.XTemplate(
	'<b>{firstName} {lastName}</b>'
);

///////////////////////////////////////////////////////
//			  PROFIL DONATIONS PANEL                 //
///////////////////////////////////////////////////////

// Profil Activity Back
var profileActivityToolbar = new Ext.Toolbar({
	xtype: 'toolbar',
	ui: 'dark',
	title: '<div style="font-size:.7em;">Adrien Olczak</div>',
    items: [{
    		text: 'back',
			ui: 'back',
			style: 'border: solid 1px #222222;',
            handler: function() {
				var joplin = '<div style="font-size:.7em;">Adrien Olczak</div>';
				profileActivityToolbar.setTitle(joplin);
            	profileActivityPanel.setActiveItem('listwrapper',{type: 'slide', direction: 'right'});
				profileTopPart.show();
				profileLevelHeader.show();
				profileLevelContainer.show();
				profileLastestHeader.show();
            }
    }],
});

// Profil Activity Detail
var profileActivityDetailsPanel = new Ext.Panel({
	height: 320,
	layout: 'fit',
	style: 'background:#DDDDDD',
	id: 'detailpanel',
	tpl: profileActivityDetails,
});

// Profile Activity List
var profileActivityList = new Ext.List({
	id: 'ActivityList',
	store: Relief1.profilActivityListStore,
	width: 320,
	scroll:false,
	itemTpl: profileActivity,
	grouped: false,
	onItemDisclosure: function(record) {													// Once a donation is tapped
		var activityDetailsTitle = '<div style="font-size:.7em;">' + record.data.firstName + " " + record.data.lastName + " </div> " ; // title var
	    profileActivityToolbar.setTitle(activityDetailsTitle);								// Changed the toolbar title
		profileActivityDetailsPanel.update(record.data);											// Update the detail panel
		profileActivityPanel.setActiveItem('detailpanel',{type: 'slide', direction: 'left'});		// Set this tapped item
		profileTopPart.hide();
		profileLevelHeader.hide();
		profileLevelContainer.hide();
		profileLastestHeader.hide();
	},
});
// Donation List Wrapper
var profileActivityWrapper = new Ext.Panel({
	id: 'listwrapper',
	layout: 'fit',
	items: [profileActivityList],
});
var profileActivityPanel = new Ext.Panel({
    layout: 'card',
	width: 320,
	height: 360,
	fullscreen: false,
	items: [profileActivityWrapper,donationdetailPanel],
});

///////////////////////////////////////////////////////
//				WHOLE SCREEN CONTAINER               //
///////////////////////////////////////////////////////
Relief1.views.profil = Ext.extend(Ext.Panel, {
	fullscreen: true,
	scroll: 'vertical',
	layout: 'vbox',
	title: 'Profile',
	iconCls: 'profile',
	style: 'background:#222222;',
	items: [
		profileTopPart,
		profileLevelHeader,
		profileLevelContainer,
		profileLastestHeader,
		profileActivityPanel
	],
	dockedItems: [profileActivityToolbar]
});

Ext.reg('Profile', Relief1.views.profil);