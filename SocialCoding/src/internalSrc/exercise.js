jQuery(document).ready(function(){
	loadIssues();
	addMenuAnimation();
	slideClose();
});

function loadIssues(){
	var issues = jQuery.ajax( 'https://api.github.com/repos/deanshub/SocialCoding/issues',
		{cache:false,dataType:'json',xhrFields: {withCredentials: true}})
	.success(function(issuse){
			jQuery('#issue').text(issuse[0].title);
			jQuery('#issueDesc').text(issuse[0].body);
		});
}

function addMenuAnimation(){
	jQuery('.navbox').hover(slideOpen,slideClose);
}

function slideClose(){
	jQuery('.navbox').animate({"left": "-=120px"}, "slow");
}

function slideOpen(){
	jQuery('.navbox').animate({"left": "+=120px"}, "slow");
}
