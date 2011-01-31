$(function(){
	$("#about_us").click(function(){
		$("#about_expand").toggle("slide", {direction: 'right'}, 100);
		$("about_rib").toggle("slide", 100);
		return false;
	});
	
	// $("#snip_one").click(function(){ 
	// 		var offset = $("#snip_one").offset()
	// 		offset.left += 575;
	// 		console.log(offset);
	// 	    $("#note1").css({"left": + offset.left});
	// 	    $("#note1").css({"top":  + offset.top});
	// 		$("#note1").css({"display": "block"});
	// 	});
	
	$('#snip_one').qtip ({
		content: '<div id="note1" class="notepad">Using the xHTML doctype seems best when sending HTML email. 
	       More info/Reference: 
	       <ul><li><a href="http://www.campaignmonitor.com/blog/post/3317/correct-doctype-to-use-in-html-email/">Campaign Monitor</a></li><li><a href="http://www.emailonacid.com/blog/details/C18/doctype_-_the_black_sheep_of_html_email_design">Email on Acid</a></li></ul>
	       </div>
	<!-- end note 1 -->',
		show: 'mouseover',
		hide: 'mouseout',
		style: {
				border: 'none',
				background: 'transparent url(images/notepad.png) no-repeat',
				width: 278,
				height: 242,
		},
		position: {
			      corner: {
			         target: 'rightMiddle',
			         tooltip: 'rightMiddle'
			      },
				  adjust: {
					x: 300, 
					scroll: false
				  }
		},
		show: {
			when: { event: 'click' }
		},
		hide: {
			fixed: true,
			when: { event: 'click' }
		},
		tip: {
			corner: 'topLeft'
		}
	})
	
});