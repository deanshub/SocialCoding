(function($){
	$(function(){


	$('#button-container.demo').hover(
			  function () {
			    $('#button-container.demo #arrow-container').addClass('rotate');
				$('#button-container.demo #arrow-triangle').addClass('change');
				$('#button-container.demo #arrow-rectangle').addClass('widen');
			  }, 
			  function () {
			    $('#button-container.demo #arrow-container').removeClass('rotate');
				$('#button-container.demo #arrow-triangle').removeClass('change');
				$('#button-container.demo #arrow-rectangle').removeClass('widen');
			  }
	);
	
	$('#button-container.download').hover(
			  function () {
			    $('#button-container.download #arrow-container').addClass('rotateDown');
			  }, 
			  function () {
			    $('#button-container.download #arrow-container').removeClass('rotateDown');
			  }
	);
	
	$('#button-container.digg').hover(
			  function () {
			    $('#button-container.digg #arrow-container').addClass('rotateDownMore');
				$('#button-container.digg #arrow-rectangle-handle').addClass('donut');
				$('#button-container.digg #arrow-rectangle-staff').addClass('skinny');
				$('#button-container.digg #arrow-triangle').addClass('shovel');
			  }, 
			  function () {
			    $('#button-container.digg #arrow-container').removeClass('rotateDownMore');
				$('#button-container.digg #arrow-rectangle-handle').removeClass('donut');
			 	$('#button-container.digg #arrow-rectangle-staff').removeClass('skinny');
				$('#button-container.digg #arrow-triangle').removeClass('shovel');
			 }
	);
	
	$('#button-container.email').hover(
			  function () {
				$('#button-container.email #arrow-triangle').addClass('emailRotate');
				$('#button-container.email #arrow-rectangle').addClass('emailTranslate');
			  }, 
			  function () {
				$('#button-container.email #arrow-triangle').removeClass('emailRotate');
				$('#button-container.email #arrow-rectangle').removeClass('emailTranslate');
			 }
	);
	
	$('#button-container.rss').hover(
			  function () {
				$('#button-container.rss #arrow-triangle').addClass('rss');
				$('#button-container.rss #arrow-rectangle').addClass('rssDot');				
			  }, 
			  function () {
				$('#button-container.rss #arrow-triangle').removeClass('rss');
				$('#button-container.rss #arrow-rectangle').removeClass('rssDot');
			 }
	);
	
	
	}); // end of document ready
})(jQuery); // end of jQuery name space