/* Project specific Javascript goes here. */



$(document).ready (function () {

	// Cover Full Screen

	$(window).resize(window_resize);

	window_resize();

	function window_resize() {
		var height = $(window).height();

		$('#cover').height( height );
	}

	// $(window).scroll(function (event){
	// 	var top = $(window).scrollTop();
	// 	var start = $("#cover").position().top + $("#cover").height(); 

	// 	if (top > start) {
	// 		$("#home-navbar").css({
	// 			position: "fixed",
	// 			top: 0,
	// 			width: '100%'
	// 		});
	// 	} else {
	// 		$("#home-navbar").css("position", "inherit");
	// 	}
	// });

	$("#more-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#home-navbar").offset().top
	   		}, 1000);
		});

	$('#nav-wrapper').height($("#home-navbar").height());
    
    $('#home-navbar').affix({
        offset: { top: $('#home-navbar').offset().top }
    });

});
