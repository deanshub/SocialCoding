jQuery(document).ready(function(){
	var res = getWikiCategorySubcategories("Learned%20in%20SocialCoding");
	var Categories = res.categorymembers;
	buildListFromCategories(Categories, false);
});