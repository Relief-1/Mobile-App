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
	style: 'position:relative; bottom:205px; padding: .7em .7em; background: rgba(10,10,10, .8); color:white; font-size:17px; font-weight:bold;',
	items:[{
		xtype: 'button',
		width: 100,
		height: 36,
		text: 'donate',
		cls: 'donate_btn',
		handler: function() {
			var chooseOrg = '<div style="font-size:.7em;">Donation</div>';
			donationDetailsToolbar.setTitle(chooseOrg);
			DonationsPanel.setActiveItem('payementProcessOrg',{type:'slide', direction:'left'});
			LatestHeader.hide();
			DisasterPanel.hide();			
		}
	}]
})

var DisasterImagePanel = new Ext.Carousel({
	height: 245,
	width: 320,
	items: [moneyRaised, topDonator, topInfluencer],
	style: 'background:black;'
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

///////////////////////////////////////////////////////
//					1st TEMPLATE					 //
///////////////////////////////////////////////////////
var DonationListTemplate = new Ext.XTemplate(
	'<div class="donationList" class="contact">',
		'<div class="donationPicture2"><img src="{profilPicture}" width="39" height="39" border="0"></div>',
		'<span class="donationUsername2">',
			'<div style="float:left;"><b>{firstName} {lastName}</b> donated </div>',
			'<div class="donationAmount2"><b>{donation}</b></div>',
			'<div class="donationTime2">{time}{SMHD}</div>',
			'<div class="donationComment2">{donationComment}</div>',
			'<div class="donationArrow"></div>',
		'</span>',
	'</div>'
);


var DisasterDetailsTemplate = new Ext.XTemplate(
	'{firstName} {lastName} donated {donation}. {time}{SMHD} ago'
);

///////////////////////////////////////////////////////
//				PAYEMENT PROCESS PANEL				 //
///////////////////////////////////////////////////////
var payementProcessOrg = new Ext.Panel({
	id: 'payementProcessOrg',
	height: 480,
	width: 320,
	scroll: false,
	cls: 'payementProcess_bg',
	items: [{ 
		xtype: 'panel', // Choose Organization Container
		width: 270,
		height: 260,
		cls: 'payementProcessOrgContainer', 
		items: [{
				xtype: 'button',
				text:'RedCross', 
				width: 237, 
				height: 30, 
				cls: 'payementChooseOrg_btn'
			},	{ 
				xtype: 'button',
				text:'Salvation Army',
				width: 237,
				height: 30,
				cls: 'payementChooseOrg_btn'
			},	{ 
				xtype: 'button',
				text:'United Way',
				width: 237,
				height: 30,
				cls: 'payementChooseOrg_btn'
			},	{
				xtype: 'button',
			  	text:'Next',
			  	width: 81,
			  	height: 30,
				cls: 'org_next_btn',
				handler: function() {
					DonationsPanel.setActiveItem('payementProcessMoney',{type:'slide', direction:'left'});
				}
			}
		]
	}]
});
var payementProcessMoneyToolbar = new Ext.Toolbar({
	xtype: 'toolbar',
	ui: 'dark',
	title: 'shit',
	hidden: true,
    items: [{
    		text: 'back',
			ui: 'back',
			style: 'border: solid 1px #222222;',
        	handler: function() {
           		DonationsPanel.setActiveItem('payementProcessOrg',{type: 'slide', direction: 'right'});
				donationDetailsToolbar.show();
        }
	}]
});
var payementProcessMoney = new Ext.Panel({
	id: 'payementProcessMoney',
	height: 480,
	width: 320,
	scroll: false,
	cls: 'payementProcess_bg',
	items: [{
			xtype: 'panel', // Choose Amount + msg Container
			width: 270,
			height: 260,
			cls: 'payementProcessMoneyContainer', 
			items: [
			{
				xtype: 'button',
				value: 5,
				text: '$5',
				width: 30,
				height: 30,
				cls: 'five_bucks_btn',
			},	{
				xtype: 'button',
				value: 10,
				text: '$10',
				width: 40,
				height: 30,
				cls: 'ten_bucks_btn',
			},	{
				xtype: 'button',
				value: 25,
				text: '$25',
				width: 40,
				height: 30,
				cls: 'ten_bucks_btn',
			},	{
				xtype: 'numberfield',
				width: 50,
				height: 30,
				cls: 'other_bucks_fields',
				focusCls: 'other_bucks_fields_focus',
				minValue:25,
				hideTrigger: true,
				keyNavEnabled: false,
				mouseWheelEnabled: false
			},	{
				xtype: 'textareafield',
				width: 226,
				height: 45,
				cls: 'donation_add_comment',
				focusCls: 'donation_add_comment_focus'
			},	{
				xtype: 'button',
			  	text:'Donate',
			  	width: 81,
			  	height: 30,
				cls: 'payement_amount_btn',
			}]
	}]
});




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
				DisasterPanel.show({type: 'fade', direction: 'right'});
				LatestHeader.show({type: 'slide', direction: 'right'});
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
		DonationsPanel.setActiveItem('donationList',{type: 'slide', direction: 'left'});		// Set this tapped item
		LatestHeader.hide();																// Hide the toggle bar
		DisasterPanel.hide();
    },
});

// Donation List Wrapper
var donationListWrapper = new Ext.Panel({
	id: 'listwrapper',
	layout: 'fit',
	items: [donationList]
});

// Donation Panel
var DonationsPanel = new Ext.Panel({
    layout: 'card',
	width: 320,
	height: 1380,	
	fullscreen: false,
	items: [donationListWrapper,donationdetailPanel,payementProcessOrg,payementProcessMoney],
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
	style: 'background:#222222',
	items: [DisasterPanel,LatestHeader,DonationsPanel],
	dockedItems: [donationDetailsToolbar,payementProcessMoneyToolbar],
});

Ext.reg('Feed', Relief1.views.feed);