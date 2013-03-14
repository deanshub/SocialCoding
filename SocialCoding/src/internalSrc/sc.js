$.noConflict();

function getWikiCategoryPages(categoryName){
	var res;
	jQuery.ajax({ url : 'http://localhost/socialWiki/api.php?format=json&action=query&list=categorymembers&cmtitle=Category:' + categoryName + '&cmtype=page',
				  async : false,
				  success : function(data,status) {
		    					res = data.query;
							},
					error:function(){
						res = {'categorymembers':''};
					}});
	return res;
}

function getWikiCategorySubcategories(categoryName){
	var res;
	jQuery.ajax({ url : 'http://localhost/socialWiki/api.php?format=json&action=query&list=categorymembers&cmtitle=Category:' + categoryName + '&cmtype=subcat',
				  async : false,
				  success : function(data,status) {
		    					res = data.query;
							},
					error:function(){
						res = {'categorymembers':''};
					}});
	return res;
}

function buildListFromCategories(categories, isMenu, headCategory, isAjax){
	var mainDiv = jQuery(".dynamicList");
	if (isMenu){
		mainDiv.attr("class", "navbox");
		mainDiv.append('<ul class=\"nav\"></ul>');
	}
	else{
		mainDiv.append('<ul class=\"homepageList\"></ul>');
	}

	var ulTag = mainDiv.children('ul');
	var allCategories = new Array();
	
	for (var index = 0; index < categories.length; index++){
		var listItemTitle = categories[index].title.split(":")[1];
		var itemLinkVal = listItemTitle;
		if (listItemTitle == undefined){
			var listItemTitle = categories[index].title;
			var itemWords = listItemTitle.split(' ');
			if (itemWords.length > 1){
				itemLinkVal = itemWords.join('_');
			}
			else{
				itemLinkVal = listItemTitle;
			}
		}
		allCategories[index] = itemLinkVal;
		if (isAjax){
			ulTag.append('<li><a href=\"#' + itemLinkVal + '\" onclick="">' + listItemTitle + '</li>')
		}
		else{
			ulTag.append('<li><a href=\"learning.html?Subject=' + itemLinkVal + '\">' + listItemTitle + '</li>')
		}
		
	}
	
	if ((isMenu) && (window.location.href.indexOf("exercise.html")==-1)){
		ulTag.append('<li><a href=\"exercise.html?Subject=' + headCategory + '\">exercise ' + headCategory + '</li>');
		ulTag.prepend('<li><a href=\"index.html\">Home</li>');
	}

	return allCategories;
}

function loadWikiMenues(category, isMenu, isAjax){
	var res = getWikiCategorySubcategories(category);
	var Categories = res.categorymembers;
	buildListFromCategories(Categories,isMenu, category, isAjax);
}

function loadWikiPagesMenu(category){
	var res = getWikiCategoryPages(category);
	var Categories = res.categorymembers;
	return buildListFromCategories(Categories, true);
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}
function buildMenuBySubject(){
	var urlParamSubject = GetURLParameter('Subject');
	loadWikiPagesMenu(urlParamSubject);
}
