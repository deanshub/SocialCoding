jQuery(function(){
	var searchBox = jQuery('#searchBox');
	var contentDiv = jQuery('#content');
	var isFirstLoad = true;
	var shoulChangeUrl = true;

	searchBox.autocomplete({
		select: function( event, ui ) {
			showPage(ui.item.value);
		}
	});

	function showPage(pageName) {
		var urlName = pageName.replace(' ', '_');
		changeUrl(urlName);

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

	function changeUrl(pageName) {
		if (shoulChangeUrl) {
			var href = window.location.href.substring(0, window.location.href.indexOf('?') + 1);
			window.history.pushState(pageName,pageName, href + 'Subject=' + pageName);
		}
	}

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

	function loadWikiPageFromParam() {
		var urlParamSubject = GetURLParameter('Subject');
		if (urlParamSubject != undefined) {
			searchBox.val(urlParamSubject);
			showPage(urlParamSubject);
		}
	}

	loadWikiPageFromParam();

	isFirstLoad = false;
});
