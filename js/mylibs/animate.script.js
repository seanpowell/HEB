$(document).ready(function() {
	
	//IE check and message based on HTML5 feature test - MAYBE CHANGE TO MODERNIZR TEST?
	if ( !(Modernizr.video) ) {
		$("#warning").colorbox({open:true, inline:true, href:"#warning"});
	}
	
	$("#scroll-pane").click(function(){
		$("a[rel='notes']").colorbox({open: true, slideshow:true, slideshowAuto: false, slideshowSpeed: 2500, current: "example {current} of {total}", width:"800px"});
	});
	
	//Begin about ribbon animation script
	$(document).click(function(){
	    $("#about_expand").hide(1000);
	});
	
	$("#about_us").click(function(e) {
		e.stopPropagation(); 
	    $("#about_expand").show(1000);
	});
	// end about ribbon code
	
});