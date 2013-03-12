$.noConflict();
			jQuery(function(){
				var searchBox = jQuery('#searchBox');
				var searchButton = jQuery('#searchButton');

				searchButton.click(function(){
					jQuery.ajax({
						type: 'GET',
						async : false,
						success : function(data, textStatus, jqXHR) {
							alert('success');
						},
						error : function( jqXHR, textStatus, errorThrown ) {
							alert('error');
						}//,
						//dataType : 'json',
						/*url : 'http://en.wikipedia.org/w/api.php',
						data : {
							action : 'query',
							list : 'search',
							srsearch : searchBox.val(),
							srprop : 'timestamp'
						}*/
					});
				});
			});

jQuery(document).ready(function(){
	loadIssues();
});

function loadIssues(){
	var issues = jQuery.ajax( 'https://api.github.com/repos/deanshub/SocialCoding/issues',
		{cache:false,dataType:'json',xhrFields: {withCredentials: true}})
	.success(function(issuse){
			jQuery('#issue').text(issuse[0].title);
			jQuery('#issueDesc').attr('src',issuse[0].html_url);
		});
}