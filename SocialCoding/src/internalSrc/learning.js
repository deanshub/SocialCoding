var allCategories;
var searchBox;
var contentDiv;
var isFirstLoad;
var shoulChangeUrl;

jQuery(function(){
	searchBox = jQuery('#searchBox');
	contentDiv = jQuery('#content');
	isFirstLoad = true;
	shoulChangeUrl = true;

	searchBox.autocomplete({
		select: function( event, ui ) {
			showPage(ui.item.value);
		}
	});

	window.onpopstate = function(event) {
		shoulChangeUrl = false;
		loadWikiPageFromParam();
		shoulChangeUrl = true;
	};

	searchBox.keypress(function(){
		jQuery.ajax({
			url : 'http://localhost/socialWiki/api.php?action=opensearch&search='+ searchBox.val() +'&format=jsonfm',
			xhrFields: {withCredentials: true},
			dataType : 'json',
			success : function( data, textStatus, jqXHR ) {
				searchBox.autocomplete('option', 'source', data[1]);
				if (!isFirstLoad) {
					searchBox.autocomplete('search');
				}
			},
			error : function( jqXHR, textStatus, errorThrown ) {
				alert('error');
			}
		});
	});

	//loadWikiPageFromParam();

	isFirstLoad = false;

	allCategories = buildMenuBySubject(true);
	setCurrPage();

});

function loadWikiPageFromParam() {
	var urlParamSubject = GetURLParameter('Subject');
	if (urlParamSubject != undefined) {
		searchBox.val(urlParamSubject);
		showPage(urlParamSubject);
	}
}

function setCurrPage(){
	var urlParamSubject = GetURLParameter('Subject');
	var pageIndex;
	for (var index = 0; index < allCategories.length; index++){
		if (allCategories[index] == urlParamSubject){
			pageIndex = index;
		}
	}
	jQuery(".hiddenCurrPage").val(pageIndex);
	buildNextPrevButtons(pageIndex);
}

function buildNextPrevButtons(pageIndex){
	var nextButton = jQuery(".nextButton");
	var prevButton = jQuery(".prevButton");

	nextButton.unbind();
	prevButton.unbind();

	if ((pageIndex < allCategories.length - 1)){
		nextButton.show();
		nextButton.bind('click', {currPage: pageIndex + 1}, buttonClick);
	} else {
		nextButton.hide();
	}

	if ((pageIndex > 0)){
		prevButton.show();
		prevButton.bind('click', {currPage: pageIndex - 1}, buttonClick);
	} else {
		prevButton.hide();
	}

	if (nextButton.is(':visible')){
		nextButton.css("margin-left", "694px");
	}
}

function buttonClick(event){
	var pageIndex = event.data.currPage;
	buildNextPrevButtons(pageIndex);
	showPage(allCategories[pageIndex]);
}



function changeUrl(pageName) {
	if (shoulChangeUrl) {
		var href = window.location.href.substring(0, window.location.href.indexOf('?') + 1);
		window.history.pushState(pageName,pageName, href + 'Subject=' + pageName);
	}
}

