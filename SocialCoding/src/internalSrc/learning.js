jQuery(function(){
	var searchBox = jQuery('#searchBox');
	var contentDiv = jQuery('#content');

	searchBox.autocomplete({
		select: function( event, ui ) {
			
			var urlName = ui.item.value.replace(' ', '_');

			jQuery.ajax({
				url : 'http://localhost/socialWiki/index.php/' + urlName,
				xhrFields: {withCredentials: true},
				dataType : 'html',
				success : function( data, textStatus, jqXHR ) {
					var jqData = jQuery('<div />').html(data);
					contentDiv.html(jqData.find('#content').html()).append(jqData.find('style'));
				},
				error : function( jqXHR, textStatus, errorThrown ) {
					alert('error');
				}
			});
		}
	});

	searchBox.keypress(function(){
		jQuery.ajax({
			url : 'http://localhost/socialWiki/api.php?action=opensearch&search='+ searchBox.val() +'&format=jsonfm',
			xhrFields: {withCredentials: true},
			dataType : 'json',
			success : function( data, textStatus, jqXHR ) {
				searchBox.autocomplete('option', 'source', data[1]);
				searchBox.autocomplete('search');
			},
			error : function( jqXHR, textStatus, errorThrown ) {
				alert('error');
			}
		});
	});
});