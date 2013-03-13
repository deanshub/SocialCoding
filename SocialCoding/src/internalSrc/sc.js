$.noConflict();

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

function buildListFromCategories(categories, isMenu){
	var mainDiv = jQuery(".dynamicList");
	if (isMenu){
		mainDiv.attr("class", "navbox");
		mainDiv.append('<ul class=\"nav\"></ul>');
	}
	else{
		mainDiv.append('<ul class=\"homepageList\"></ul>');
	}

	var ulTag = mainDiv.children('ul');
	
	for (var index = 0; index < categories.length; index++){
		var listItemTitle = categories[index].title.split(":")[1];
		ulTag.append('<li><a href=\"#\">' + listItemTitle + '</li>')
	}
}

function loadWikiMenues(isMenu){
	var res = getWikiCategorySubcategories("Learned%20in%20SocialCoding");
	var Categories = res.categorymembers;
	buildListFromCategories(Categories,isMenu);
}