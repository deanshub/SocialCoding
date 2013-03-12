$.noConflict();
			jQuery(function(){
				var searchBox = jQuery('#searchBox');
				var searchButton = jQuery('#searchButton');

				searchButton.click(function(){
					jQuery.ajax({
						type: 'GET',
						async : false,
						success : function(data, textStatus, jqXHR) {
							alert('success');
						},
						error : function( jqXHR, textStatus, errorThrown ) {
							alert('error');
						}//,
						//dataType : 'json',
						/*url : 'http://en.wikipedia.org/w/api.php',
						data : {
							action : 'query',
							list : 'search',
							srsearch : searchBox.val(),
							srprop : 'timestamp'
						}*/
					});
				});
			});

function getWikiCategories(categoryName){
	jQuery.get('http://en.wikipedia.org/w/api.php?format=json&action=query&titles=Java&prop=categories&clshow=!hidden',function(data,status) {
		    	alert(data.query);
			},'html');
}