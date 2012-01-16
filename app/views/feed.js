///////////////////////////////////////////////////////
//			DISASTER BACKGROUND	+ CAPTION			 //
///////////////////////////////////////////////////////
var moneyRaised = new Ext.Panel({
	style: 'background: url(assets/disaster_img/joplin_bg1.jpg);',
	items:[{
		xtype: 'panel',
		html: '<span style="font-size:18px;">$5,750 <span style="font-size:12px; padding-top:12px; float:right;">see more</span></span> <br> <span style="font-size:13px; line-height:13px; color:#999999;">money raised</span>',
		height: 48,
		style: 'position:relative; top:200px; background: rgba(10,10,10, .5); padding: .3em .5em; color:white; font-size:14px;',
	}]
});
var topDonator = new Ext.Panel({
	style: 'background: url(assets/disaster_img/joplin_bg2.jpg);',
	items:[{
		xtype: 'panel',
		html: '<span style="font-size:18px;">CocaCola ©<span style="font-size:12px; padding-top:12px; float:right;">see more</span></span> <br> <span style="font-size:13px; line-height:13px; color:#999999;">top donator</span>',
		height: 48,
		style: 'position:relative; top:200px; background: rgba(10,10,10, .5); padding: .3em .5em; color:white; font-size:14px;',
	}]
});
var topInfluencer = new Ext.Panel({
	style: 'background: url(assets/disaster_img/joplin_bg3.jpg);',
	items:[{
		xtype: 'panel',
		html: '<span style="font-size:18px;">Jack Dorsey<span style="font-size:12px; padding-top:12px; float:right;">see more</span></span> <br> <span style="font-size:13px; line-height:13px; color:#999999;">top influencer</span>',
		height: 48,
		style: 'position:relative; top:200px; background: rgba(10,10,10, .5); padding: .3em .5em; color:white; font-size:14px;',
	}]
});
var DisasterNamePanel = new Ext.Panel({
	height: 67,
	width: 320,
	html: 'Joplin, MO, USA <br/> Tornado',
	style: 'position:relative; bottom:205px; padding: .6em .5em; background: rgba(10,10,10, .8); color:white; font-size:18px; font-weight:bold;'
})
var DisasterImagePanel = new Ext.Carousel({
	height: 245,
	width: 320,
	items: [moneyRaised, topDonator, topInfluencer]
});

var DisasterPanel = new Ext.Panel({
	height: 245,
	width: 320,
	items: [DisasterImagePanel,DisasterNamePanel]
})

///////////////////////////////////////////////////////
//		LATEST 'Donations/Stories' TOGGLE BAR		 //
///////////////////////////////////////////////////////
var ToggleStoriesDonationButton = new Ext.form.Toggle({
	xtype: 'togglefield',
	height: 40,
	width: 320,
	value: 0,
	label:"Latest",
	style: 'background:none',
	listeners: {
		change: function(){
			if (this.value == 0) {
				console.log('donation')
			} else (this.value == 1)
				console.log('stories')
		}
	}
})
var LatestHeader = new Ext.Panel({
	height: 40,
	width: 320,
	style: 'border-top:1px solid #0a498b; background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(2%, #68bdf9), color-stop(3%, #16a4ff), color-stop(98%, #006ad7), color-stop(100%, #0a498b));',
	items: [ToggleStoriesDonationButton]
})
var detailPanel = new Ext.Panel({
})

///////////////////////////////////////////////////////
//					1st TEMPLATE					 //
///////////////////////////////////////////////////////
var DonationListTemplate = new Ext.XTemplate(
	'<div class="donationList" class="contact">',
		'<div class="donationPicture2"><img src="{profilPicture}" width="41" height="41" border="0"></div>',
		'<span class="donationUsername2">',
			'<div style="float:left;"><b>{firstName} {lastName}</b> donated </div>',
			'<div class="donationAmount2"><b>{donation}</b></div>',
			'<div class="donationArrow"></div>',
			'<div class="donationTime2">{time}{SMHD}</div>',
			'<div class="donationComment2">{donationComment}</div>',
		'</span>',
	'</div>'
);


var DisasterDetailsTemplate = new Ext.XTemplate(
	'{firstName} {lastName} donated {donation}. {time}{SMHD} ago'
);


///////////////////////////////////////////////////////
//					DONATION PANEL					 //
///////////////////////////////////////////////////////
var donationDetailsToolbar = new Ext.Toolbar({
	xtype: 'toolbar',
	ui: 'dark',
	title: '<div style="font-size:.7em;">Joplin Tornado - USA</div>',
    items: [{
    		text: 'back',
			ui: 'back',
			style: 'border: solid 1px #222222;',
            handler: function() {
				var joplin = '<div style="font-size:.7em;">Joplin Tornado - USA</div>';
				donationDetailsToolbar.setTitle(joplin);
            	DonationsPanel.setActiveItem('listwrapper',{type: 'slide', direction: 'right'});
				DisasterPanel.show();
				LatestHeader.show();
            }
    }],
});

// Donation Detail
var donationdetailPanel = new Ext.Panel({
	height: 320,
	layout: 'fit',
	style: 'background:#DDDDDD',
	id: 'detailpanel',
	tpl: DisasterDetailsTemplate,
});

// Donation List
var donationList = new Ext.List({
	id: 'donationList',
	store: Relief1.donationsListStore,
	width: '100%',
	itemTpl: DonationListTemplate,
	grouped: false,
	scroll: false,
	onItemDisclosure: function(record) {													// Once a donation is tapped
		var donationDetailsTitle = '<div style="font-size:.5em;">' + record.data.firstName + " " + record.data.lastName + "'s donation </div> " ; // title var
        donationDetailsToolbar.setTitle(donationDetailsTitle);								// Changed the toolbar title
		donationdetailPanel.update(record.data);											// Update the detail panel
		DonationsPanel.setActiveItem('detailpanel',{type: 'slide', direction: 'left'});		// Set this tapped item
		LatestHeader.hide();																// Hide the toggle bar
		DisasterPanel.hide(); 																// Hide the image top part
    },
});

// Donation List Wrapper
var donationListWrapper = new Ext.Panel({
	id: 'listwrapper',
	layout: 'fit',
	items: [donationList],
});

// Donation Panel
var DonationsPanel = new Ext.Panel({
    layout: 'card',
	width: 320,
	height: '192%',
	fullscreen: false,
	items: [donationListWrapper,donationdetailPanel],
});

///////////////////////////////////////////////////////
//				WHOLE SCREEN CONTAINER				 //
///////////////////////////////////////////////////////
Relief1.views.feed = Ext.extend(Ext.Panel, {
	fullscreen: true,
	scroll: 'vertical',
	layout: 'vbox',
	title: 'Feed',
	iconCls: 'feed',
	style: 'background:#555555',
	items: [DisasterPanel,LatestHeader,DonationsPanel],
	dockedItems: [donationDetailsToolbar],
});

Ext.reg('Feed', Relief1.views.feed);