///////////////////////////////////////////////////////
//			DISASTER BACKGROUND	+ CAPTION			 //
///////////////////////////////////////////////////////
var moneyRaised = new Ext.Panel({
    style: 'background: url(assets/disaster_img/joplin_bg1.jpg);',
    items:[{
        xtype: 'panel',
        html: '<span style="font-size:18px;">$18,750,450 <span style="font-size:12px; padding-top:12px; float:right;">see more</span></span> <br> <span style="font-size:13px; line-height:13px; color:#999999;">money raised</span>',
        height: 48,
        style: 'position:relative; top:200px; background: rgba(10,10,10, .5); padding: .3em .5em; color:white; font-size:14px;',
    }]
});
var topDonator = new Ext.Panel({
    style: 'background: url(assets/disaster_img/joplin_bg2.jpg);',
    items:[{
        xtype: 'panel',
        html: '<span style="font-size:18px;">CocaCola ©<span style="font-size:12px; padding-top:12px; float:right;">see more</span></span> <br> <span style="font-size:13px; line-height:13px; color:#999999;">top donor</span>',
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

// 2ND JOPLIN SCREEN FEED
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
            DonationsPanel.setActiveItem('payementProcessOrg',{
                type:'slide', 
                direction:'left'
            });
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

// 1ST MAIN SCREEN FEED 

//	JOPLIN DISASTER
var MAIN_Joplin_img = new Ext.Panel({
	height:160,
	width: 320,
    style: 'background: url(assets/disaster_img/joplin_bg.jpg) 0px -30px;'
});
var MAIN_Joplin_DisasterNamePanel = new Ext.Panel({
    height: 67,
    width: 320,
    html: '<div style="float:left; padding: .7em .7em;"> Joplin, MO, USA <br/> Tornado</div>',
    style: 'position:relative; bottom:160px;  background: rgba(10,10,10, .7); color:white; font-size:17px; font-weight:bold;',
	items: [{
		width: '100%',
		height: '100%',
		xtype: 'button',
		style: 'position:absolute; border-radius:2px; background:none; border:none;',
		handler: function() {
			var joplinBtn = '<div style="font-size:.7em;">Joplin Tornado - USA</div>';
    	    donationDetailsToolbar.setTitle(joplinBtn);
			feedContainer.setActiveItem('joplinwrapper',{type: 'slide', direction: 'left'});
		}
	}]
})
var MAIN_Joplin = new Ext.Panel({
    height: 165,
    width: 320,
    items: [MAIN_Joplin_img,MAIN_Joplin_DisasterNamePanel]
})

//	HAITI DISASTER
var MAIN_Haiti_img = new Ext.Panel({
	height:160,
	width: 320,
    style: 'background: url(assets/disaster_img/haiti_bg1.jpg) 0px -10px;'
});
var MAIN_Haiti_DisasterNamePanel = new Ext.Panel({
    height: 67,
    width: 320,
    html: '<div style="float:left; padding: .7em .7em;"> Port-aux-Prince, Haiti <br/> Earthquake</div>',
    style: 'position:relative; bottom:160px; background: rgba(10,10,10, .7); color:white; font-size:17px; font-weight:bold;',
	items: [{
		width: '100%',
		height: '100%',
		xtype: 'button',
		style: 'position:absolute; border-radius:2px; background:none; border:none;',
		handler: function() {
			var joplinBtn = '<div style="font-size:.7em;">Port-aux-Prince Earthquake - Haiti</div>';
    	    donationDetailsToolbar.setTitle(joplinBtn);
			feedContainer.setActiveItem('joplinwrapper',{type: 'slide', direction: 'left'});
		}
	}]
})
var MAIN_Haiti = new Ext.Panel({
    height: 165,
    width: 320,
    items: [MAIN_Haiti_img,MAIN_Haiti_DisasterNamePanel]
})

//	TOHOKU DISASTER
var MAIN_Tohoku_img = new Ext.Panel({
	height:160,
	width: 320,
    style: 'background: url(assets/disaster_img/japan_bg1.jpg) 0px -10px;'
});
var MAIN_Tohoku_DisasterNamePanel = new Ext.Panel({
    height: 67,
    width: 320,
    html: '<div style="float:left; padding: .7em .7em;"> Tohoku, Japan <br/> Tsunami</div>',
    style: 'position:relative; bottom:160px; background: rgba(10,10,10, .7); color:white; font-size:17px; font-weight:bold;',
	items: [{
		width: '100%',
		height: '100%',
		xtype: 'button',
		style: 'position:absolute; border-radius:2px; background:none; border:none;',
		handler: function() {
			var joplinBtn = '<div style="font-size:.7em;">Tohoku Tsunami - Japan</div>';
    	    donationDetailsToolbar.setTitle(joplinBtn);
			feedContainer.setActiveItem('joplinwrapper',{type: 'slide', direction: 'left'});
		}
	}]
})
var MAIN_Tohoku = new Ext.Panel({
    height: 165,
    width: 320,
    items: [MAIN_Tohoku_img,MAIN_Tohoku_DisasterNamePanel]
})

//	VAN DISASTER
var MAIN_Van_img = new Ext.Panel({
	height:160,
	width: 320,
    style: 'background: url(assets/disaster_img/van_bg1.jpg) 0px -30px;'
});
var MAIN_Van_DisasterNamePanel = new Ext.Panel({
    height: 67,
    width: 320,
    html: '<div style="float:left; padding: .7em .7em;"> Van, Turkey <br/> Earthquake</div>',
    style: 'position:relative; bottom:160px; background: rgba(10,10,10, .7); color:white; font-size:17px; font-weight:bold;',
	items: [{
		width: '100%',
		height: '100%',
		xtype: 'button',
		style: 'position:absolute; border-radius:2px; background:none; border:none;',
		handler: function() {
			var joplinBtn = '<div style="font-size:.7em;">Van Earthquake - Turkey</div>';
    	    donationDetailsToolbar.setTitle(joplinBtn);
			feedContainer.setActiveItem('joplinwrapper',{type: 'slide', direction: 'left'});
		}
	}]
})
var MAIN_Van = new Ext.Panel({
    height: 165,
    width: 320,
    items: [MAIN_Van_img,MAIN_Van_DisasterNamePanel]
})



///////////////////////////////////////////////////////
//		LATEST 'Donations/Stories' TOGGLE BAR		 //
///////////////////////////////////////////////////////
var ToggleStoriesDonationButton = new Ext.form.Toggle({
    xtype: 'togglefield',
    height: 40,
    width: 320,
    value: 1,
    label:"Latest",
    style: 'background:none',
    listeners: {
        change: function(slider, thumb, newValue, oldValue){
            if (oldValue == 1 && newValue == 0) {
            // Changing from off to on...do something?
                DonationsPanel.setActiveItem('joplinstorylistwrapper',{
		            type: 'slide', 
		            direction: 'left'
		        });
            }
            else if (oldValue == 0 && newValue == 1){
                // Changing from on to off...do something?
				DonationsPanel.setActiveItem('joplindonationlistwrapper',{
		            type: 'slide', 
		            direction: 'right'
		        });
                }
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
    var StoryListTemplate = new Ext.XTemplate(
    '<div class="donationList" class="contact">',
    '<div class="donationPicture2"><img src="{picture}" width="39" height="39" border="0"></div>',
    '<span class="donationUsername2">',
    '<div style="float:left;"><b>{title}</b> donated </div>',
    '<div class="donationComment2">{teaser}</div>',
    '</span>',
    '</div>'
    );
var DonationDetailsTemplate = new Ext.XTemplate(
   	'<div class="donationDetail_container">',
	
		'<div class="donationDetail">',
		
			'<div class="donationDetailPicture">',
				'<img src="{profilPicture}" width="39" height="39" border="0">',
			'</div>',
			
			'<div class="donator_name_detail"><b>{firstName} {lastName}</b>',
				'<div class="donation_detail_date">{time}{SMHD} ago </div>',
			'</div>',
							
				'<div class="donation_detail_right">',
					'<div class="donator_donation_detail">{typeOfActivity} <b>{activityName}</b> {badge}</div>',
					'<div class="donator_donation_comment">{donationComment}</div>',
				'</div>',
			
				'<div class="donator_donation_comment_icon"></div>',
		'</div>',	
			
		'<div class="donation_action_button_container">',
			'<div class="donation_detail_like_btn">like</div>',
			'<div class="donation_detail_comment_btn">comment</div>',
			'<div class="donation_detail_share_btn">share</div>',
		'</div>',	
							
	'</div>'
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
                DonationsPanel.setActiveItem('payementProcessMoney',{
                    type:'slide', 
                    direction:'left'
                });
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
            DonationsPanel.setActiveItem('payementProcessOrg',{
                type: 'slide', 
                direction: 'right'
            });
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
    title: '<div style="font-size:.7em;">Relief1</div>',
    items: [{
        text: 'back',
        ui: 'back',
        style: 'border: solid 1px #222222;',
        handler: function() {
            var joplin = '<div style="font-size:.7em;">Joplin Tornado - USA</div>';
            donationDetailsToolbar.setTitle(joplin);
            DonationsPanel.setActiveItem('joplindonationlistwrapper',{
                type: 'slide', 
                direction: 'right'
            });
            DisasterPanel.show({
                type: 'fade', 
                direction: 'right'
            });
            LatestHeader.show({
                type: 'slide', 
                direction: 'right'
            });
        }
    }],
});

// Donation List
var donationList = new Ext.List({
    id: 'donationList',
    store: Relief1.donationsListStore,
    width: 320,
    itemTpl: DonationListTemplate,
    grouped: false,
    scroll: false,
    onItemDisclosure: function(record) {													// Once a donation is tapped
        var donationDetailsTitle = '<div style="font-size:.5em;">' + record.data.firstName + " " + record.data.lastName + "'s donation </div> " ; // title var
        donationDetailsToolbar.setTitle(donationDetailsTitle);								// Changed the toolbar title
        DonationsPanel.setActiveItem(donationdetailPanel,{type: 'slide', direction: 'left'});														
        donationdetailPanel.update(record.data);  		
        DisasterPanel.hide();
        LatestHeader.hide();
    },
});

// Donation Detail
var donationdetailPanel = new Ext.Panel({
    layout: 'fit',
    tpl: DonationDetailsTemplate,
});
// Story List
var storyList = new Ext.List({
    id: 'storyList',
    store: Relief1.storyListStore,
    width: 320,
    itemTpl: StoryListTemplate,
    grouped: false,
    scroll: false,
    onItemDisclosure: function(record) {
    }
});

// Donation List Wrapper
var donationListWrapper = new Ext.Panel({
    id: 'joplindonationlistwrapper',
    layout: 'fit',
    items: [donationList],
});

// Story List Wrapper
var storyListWrapper = new Ext.Panel({
    id: 'joplinstorylistwrapper',
    layout: 'fit',
    items: [storyList],
});
// Donation Panel
var DonationsPanel = new Ext.Panel({
    layout: 'card',
    width: 320,
    height: 1380,	
    fullscreen: false,
    items: [donationListWrapper,storyListWrapper,donationdetailPanel,payementProcessOrg,payementProcessMoney],
});

var joplinContainer = new Ext.Panel({
    fullscreen: true,
    scroll: 'vertical',
    layout: 'vbox',
    title: 'Feed',
    iconCls: 'feed',
    style: 'background:#222222',
    items: [DisasterPanel,LatestHeader,DonationsPanel],
})
//  JOPLIN DISASTER END HERE    ////////////////////////////

//  1ST MAIN FEED SCREEN ////////////////////////////
var disasterFeedList = new Ext.Panel ({
	scroll: 'vertical',
	items: [MAIN_Joplin,MAIN_Haiti,MAIN_Tohoku,MAIN_Van]
});
var joplinDisasterWrapper = new Ext.Panel({
    id: 'joplinwrapper',
    layout: 'fit',
    items: [joplinContainer],
});
var disasterListWrapper = new Ext.Panel({
    id: 'disasterListwrapper',
    layout: 'fit',
    items: [disasterFeedList],
});
var feedContainer = new Ext.Panel({
	layout: 'card',
    width: 320,
    height: 1380,	
    fullscreen: false,
    items: [disasterListWrapper,joplinDisasterWrapper],
})


///////////////////////////////////////////////////////
//				WHOLE SCREEN CONTAINER				 //
///////////////////////////////////////////////////////
Relief1.views.feed = Ext.extend(Ext.Panel, {
    fullscreen: false,
 	layout: 'vbox',
    title: 'Feed',
    iconCls: 'feed',
    style: 'background:#222222',
    items: [feedContainer],
    dockedItems: [donationDetailsToolbar,payementProcessMoneyToolbar],
});

Ext.reg('Feed', Relief1.views.feed);