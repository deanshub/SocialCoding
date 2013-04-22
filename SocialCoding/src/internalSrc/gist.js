/*
description: the description of the gist
public: boolean - true or false
files: array of files name and under it content in json - { "csharp.cs" : { content:"public class bla bla..." }, "ariel.js" : {content:"function lala(){alert('hi!');}"}};
*/
function createGist(access_token, description, public, files){
	var jsonData =  {description:description, public:public};
	json["files"] = files;

	var urlGist = "https://api.github.com/gists?access_token=" + access_token;
	// var form = document.createElement("form");
	// form.setAttribtue("method", "post");
	// form.setAttribtue("action", url);

	// document.body.appendChild(form);
 	// form.submit();

    jQuery.ajax({
    	type: "POST",
    	url: urlGist,
		datatype: 'json',
		data: jsonData,
		success: function (result) {
			alert("I wrote a gist!");
		}
    });
}

// function getGithubAuth(token){
// 	var github = new Github({
//  		token: "token"
//  		auth: "oauth"
// 	});

// 	return github;
// }

// function createToken(){
// 	return token;
// }