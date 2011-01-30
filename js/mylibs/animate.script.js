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
		content: '<div id="snipone">this is the content</div>',
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