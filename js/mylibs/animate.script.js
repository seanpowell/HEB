$(function(){
	$("#about_us").click(function(){
		$("#about_expand").toggle("slide", {direction: 'right'}, 100);
		$("about_rib").toggle("slide", 100);
		return false;
	});
	
});