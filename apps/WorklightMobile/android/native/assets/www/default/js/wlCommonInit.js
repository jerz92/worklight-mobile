
/* JavaScript content from js/wlCommonInit.js in folder common */
/**
* @license
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

function wlCommonInit(){
	loadFeeds();
}

function loadFeeds(){
	var email = "sale@tshirtshop.com";
	var password ="aaaa1111";
	var invocationData = {
			adapter : 'UserId',
			procedure : 'getUserId',
			parameters : [email,password]
		};
	
	WL.Client.invokeProcedure(invocationData,{
		onSuccess : loadFeedsSuccess,
		onFailure : loadFeedsFailure
	});
}

function loadFeedsSuccess(result){
	WL.Logger.debug("Feed retrieve success");
	if (result.invocationResult.Items.length>0) 
		alert("success");
		//displayFeeds(result.invocationResult.Items);
	else 
		loadFeedsFailure();
}

function loadFeedsFailure(result){
	WL.Logger.error("Feed retrieve failure");
	WL.SimpleDialog.show("EngadgetReader", "Cannot retrieve feed. Please check your internet connectivity.", 
	[{
		text : 'Reload App',
		handler : WL.Client.reloadApp 
	}]);
}