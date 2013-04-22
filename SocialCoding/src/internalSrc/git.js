jQuery(document).ready(function(){

	if ((window.location.href.indexOf("code") > -1) && (typeof localStorage["access_token"] === 'undefined')) {
		var urlParamCode = GetURLParameter('code');

		jQuery.post('token.php?code=' + urlParamCode, function (token) {
			localStorage["access_token"] = token;
			alert("here");
			});
	};

	// if (localStorage["access_token"] != null) {
	if (typeof localStorage["access_token"] === 'undefined') {
			LoggedIn(false);
		} else {
			LoggedIn(true);
		};	
});

function showProfilePic(toShow){
	if (toShow) {
		var userDat = getUserDetails(localStorage["access_token"]);

		jQuery("#profileDats").attr("href", userDat['html_url']);
		//jQuery("#profileDats").text(userDat['name']);
		jQuery("#profileDats").prepend('<img id="profilePic" src="' + userDat['avatar_url'] + '" />')
		jQuery("#profilePic").attr("src", userDat['avatar_url']);
		jQuery(".ProfilePicDiv").css("visibility", "visible");
	} else {
		jQuery(".ProfilePicDiv").css("visibility", "hidden");
	};	
}

function logoutGithub() {
	localStorage.removeItem("access_token");
	location.reload();
}

function LoggedIn(toLogin) {
	if (toLogin) {
		showProfilePic(true);
		jQuery("#loginGithub").css("visibility", "hidden");
	} else {
		jQuery("#loginGithub").css("visibility", "visible");
		showProfilePic(false);
	};
}

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

// Gets the user details from github  by access_token
function getUserDetails(access_token){
	var loggedUser = [];

	jQuery.ajax( {
		cache:false,
		dataType:'json',
		xhrFields: {withCredentials: true}, 
		async:false,
		url : 'https://api.github.com/user?access_token=' + access_token,
		success:function(userDat){
			loggedUser = userDat;
		},
		error: function (result) {
			alert(JSON.stringify(result));
		}
	});

	return loggedUser;
}

function createGistNoParams() {
	files = { 'csharp.cs' : { 'content':'public class Ariel() : King\n{\n\tAriel()\n\t{\n\t\tConsole.WriteLine("Hello there!");\n\t}\n}' } };
	createGist(localStorage['access_token'], 'descdesc', false, files);
}

function createGist(access_token, description, public, files){
	var jsonData =  {description:description, public:public};
	jsonData["files"] = files;
	var urlGist = "https://api.github.com/gists?access_token=" + access_token;

    jQuery.ajax({
    	url: urlGist,
    	type: "POST",
		data: JSON.stringify(jsonData),
	    contentType: 'application/json; charset=utf-8',
		datatype: 'json',
		success: function (result) {
			alert("I wrote a gist!");
		},
		error: function (result) {
			alert("failed :(");
		}
    });
}