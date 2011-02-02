$(document).ready(function() {
	if ( !(jQuery.support.tbody) ) {
		$("#warning").colorbox({open:true, inline:true, href:"#warning"});
	}
	
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