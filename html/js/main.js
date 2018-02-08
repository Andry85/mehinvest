// JavaScript Document
$(document).ready( function(){



jQuery('#mycarousel').jcarousel({
        auto: 2,
        scroll: 1,
		animation: 'slow',
		visible: 1,
        wrap: 'circular'
    });

 $(".news-list li:last-child").css('border-bottom','none');
 $(".menu li:last-child").css('border-bottom','none');

	$(".nav-outer nav > ul > li").mouseenter(function(){
	    $(this).children('ul').slideDown();
	});
	$(".nav-outer nav > ul > li").mouseleave(function(){
	    $(this).children('ul').slideUp();
	});


});
//end ready

