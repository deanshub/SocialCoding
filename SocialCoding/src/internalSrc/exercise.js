var editor;

jQuery(document).ready(function(){
	loadAce();
	loadIssues();
	buildMenuBySubject(false);
	addMenuAnimation();
	slideClose();
	activateGarlic();
});

function loadIssues(){
	var prefix = 'https://github.com/';
	var issuesArr = [];
	jQuery.ajax({
		url : 'getProjects.php',
		success : function(projects){
			eval("projects = (" + projects + ")");
			for (var i = 0; i < projects.length; i++) {
				var projId = projects[i];
				projId = projId.substring(projId.indexOf(prefix) + prefix.length, projId.lastIndexOf('.git'));

				jQuery.ajax( {
					cache:false,
					dataType:'json',
					xhrFields: {withCredentials: true}, 
					async:false,
					url : 'https://api.github.com/repos/' + projId + '/issues',
					success:function(issuse){
						issuesArr = issuesArr.concat(issuse);
					}
				});				
			}

			if (issuesArr.length > 0) {
				var randomnumber=Math.floor(Math.random()*issuesArr.length);
				jQuery('#issue').text(issuesArr[randomnumber].title);
				jQuery('#issueDesc').text(issuesArr[randomnumber].body);
			}
		}
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

function activateGarlic() {
	jQuery('#userCode').garlic( {
      	onRetrieve: function ( elem, retrievedValue ) {
      		editor.setValue(retrievedValue);
      	}
  	});

	editor.on('change',function(){
		jQuery('#userCode').val(editor.getValue());
		jQuery('#userCode').change();
	});
}

function loadAce() {
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
}