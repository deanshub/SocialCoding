jQuery(document).ready(function(){
	loadIssues();
});

function loadIssues(){
	var issues = jQuery.ajax( 'https://api.github.com/repos/deanshub/SocialCoding/issues',
		{cache:false,dataType:'json',xhrFields: {withCredentials: true}})
	.success(function(issuse){
			jQuery('#issue').text(issuse[0].title);
			jQuery('#issueDesc').text(issuse[0].body);
		});
}