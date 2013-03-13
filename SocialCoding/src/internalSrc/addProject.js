jQuery(function(){
	var sendButton = jQuery('#sendButton');
	var repoUrl = jQuery('#repoUrl');

	/*var userCode = GetURLParameter('code');

	if (userCode != undefined) {
		//jQuery.support.cors = true;
		jQuery.ajax({
			type : 'POST',
			url : 'https://github.com/login/oauth/access_token?client_id=b611c53472c8da911fa2&client_secret=34127198524aae765d1ed87bd3dd5f5584621188&callback=jsonpCallbackFunc&code=' + userCode,
			dataType : 'jsonp',
			beforeSend: function (request) {
                request.setRequestHeader("Accept", "application/json");
            },
            //jsonpCallback : jsonpCallbackFunc,
			xhrFields: {withCredentials: true},
			success : function( data, textStatus, jqXHR ) {
				alert(data);
			},
			error : function( jqXHR, textStatus, errorThrown ) {
				alert('error');
			}
		});
	}

	function jsonpCallbackFunc(data) {
		alert('callback');
	}*/

	sendButton.click(function() {
		jQuery.ajax({
			type : 'POST',
			url : 'addProject.php',
			data : {'repoUrl' : repoUrl.val()},
			xhrFields: {withCredentials: true},
			success : function( data, textStatus, jqXHR ) {
				alert(data);
			},
			error : function( jqXHR, textStatus, errorThrown ) {
				alert('error');
			}
		});
	});
});
