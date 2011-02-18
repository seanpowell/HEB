/** Slider jQuery courtesy of Simon Battersby
http://www.simonbattersby.com/blog/vertical-scrollbar-using-jquery-ui-slider/
**/

$(function() {
//change the main div to overflow-hidden as we can use the slider now
$('#scroll-pane').css('overflow','hidden');

//compare the height of the scroll content to the scroll pane to see if we need a scrollbar
var difference = $('#scroll-content').height()-$('#scroll-pane').height();//eg it's 200px longer 

if(difference>0)//if the scrollbar is needed, set it up...
{
   var proportion = difference / $('#scroll-content').height();//eg 200px/500px
   var handleHeight = Math.round((1-proportion)*$('#scroll-pane').height());//set the proportional height - round it to make sure everything adds up correctly later on
   handleHeight -= handleHeight%2; //ensure the handle height is exactly divisible by two

   $("#scroll-pane").after('<\div id="slider-wrap"><\div id="slider-vertical"><\/div><\/div>');//append the necessary divs so they're only there if needed
   $("#slider-wrap").height($("#scroll-pane").height());//set the height of the slider bar to that of the scroll pane

   //set up the slider 
   $('#slider-vertical').slider({
      orientation: 'vertical',
      range: 'max',
      min: 0,
      max: 100,
      value: 100,
      slide: function(event, ui) {
         var topValue = -((100-ui.value)*difference/100);
         $('#scroll-content').css({top:topValue});//move the top up (negative value) by the percentage the slider has been moved times the difference in height
      }
   });

   //set the handle height and bottom margin so the middle of the handle is in line with the slider
   $(".ui-slider-handle").css({height:handleHeight,'margin-bottom':-0.5*handleHeight});
	
   var origSliderHeight = $("#slider-vertical").height();//read the original slider height
   var sliderHeight = origSliderHeight - handleHeight ;//the height through which the handle can move needs to be the original height minus the handle height
   var sliderMargin =  (origSliderHeight - sliderHeight)*0.5;//so the slider needs to have both top and bottom margins equal to half the difference
   $(".ui-slider").css({height:sliderHeight,'margin-top':sliderMargin});//set the slider height and margins

   //position the slider range div at the top of the slider wrap - this ensures clicks above the area through which the handle moves are OK
   $(".ui-slider-range").css({top:-sliderMargin});

   //add a click function to ensure clicks below the area through which the handle moves are OK
   $("#slider-wrap").click(function(){//this means the bottom of the slider beyond the slider range is clicked, so move the slider right down
      $("#slider-vertical").slider("value", 0);
      $('#scroll-content').css({top:-difference});   
   })

	//additional code for mousewheel
	$("#scroll-pane,#slider-wrap").mousewheel(function(event, delta){
 		var speed = 5;
	    var sliderVal = $("#slider-vertical").slider("value");//read current value of the slider
		
	    sliderVal += (delta*speed);//increment the current value

	    $("#slider-vertical").slider("value", sliderVal);//and set the new value of the slider
		
		var topValue = -((100-sliderVal)*difference/100);//calculate the content top from the slider position
		
		if (topValue>0) topValue = 0;//stop the content scrolling down too much
		if (Math.abs(topValue)>difference) topValue = (-1)*difference;//stop the content scrolling up too much
		
		$("#scroll-content").css({top:topValue});//move the content to the new position
	    event.preventDefault();//stop any default behaviour
	});


}//end if
});