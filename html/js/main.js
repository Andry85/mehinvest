// JavaScript Document
$(document).ready( function(){






$('#mycarousel').owlCarousel({
    items:1,
    autoHeight:true,
    autoplay: true,
    nav: false,
    loop: true
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

