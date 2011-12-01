$(document).ready(function() {
	
	//IE check and message based on HTML5 feature test
	// if ( !(Modernizr.video) ) {
	// 		$("#warning").colorbox({open:true, inline:true, href:"#warning", width:"600px"});
	// 	}
	
	//Colorbox lightbox slideshow functionality
	$("#code_wrapper").dblclick(function(){
		$("a[rel='notes']").colorbox({open:true,slideshow:true, slideshowAuto: false, slideshowSpeed: 10000, current: "example {current} of {total}", width:"800px", returnFocus:true});
	});
	
	//Begin about ribbon animation script
		$(document).click(function(){
	    	$("#about_expand").hide(1000);
	 	});
	
	$("#about_us").click(function(e) {
		e.stopPropagation(); 
	    $("#about_expand").toggle(1000);
	});
	// end about ribbon code
	
	$("#code_wrapper").hover(
	    function() { $("#double-click span").css("display","inline-block")},
	    function() { $("#double-click span").css("display","none")}
	);
});