$.noConflict();

function getWikiCategorySubcategories(categoryName){
	var res;
	jQuery.ajax({ url : 'http://localhost/wiki/api.php?format=json&action=query&list=categorymembers&cmtitle=Category:' + categoryName + '&cmtype=subcat',
				  async : false,
				  success : function(data,status) {
		    					res = data.query;
							}});
	return res;
}

function buildListFromCategories(categories){
	for (var index = 0; index < categories.length; index++){
		alert(categories[index].title);
	}
}