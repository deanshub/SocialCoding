var editor;

jQuery(document).ready(function(){
	loadAce();
	loadIssues();
	loadWikiMenues("Learned_in_SocialCoding", true, false);
	addMenuAnimation();
	slideClose();
	activateGarlic();
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