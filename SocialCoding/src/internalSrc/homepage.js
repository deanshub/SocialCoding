var searchBox;
var isFirstLoad;

jQuery(document).ready(function(){
	loadWikiMenues("Learned_in_SocialCoding", false);

	initAddProject();
});

function initAddProject() {
	jQuery('#addProject').click(function(){
		window.showModalDialog("addProject.html", null, 'Add Project');
	});
}