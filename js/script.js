jQuery(document).ready(function($) {
    new WOW().init();

    var scrollBtn = $('.smooth-scroll');
    //smooth scrolling
    scrollBtn.click(function(e) {
      $('body,html').animate({
       scrollTop: -($(this.hash).offset().top)
      },1000);
 
    });

    var cruiseScroll = $('.cruise-scroll');
    //smooth scrolling
    cruiseScroll.click(function(e) {
      $('body,html').animate({
       scrollTop: ($(this.hash).offset().top)
      },1000);
 
    });

    var trekkingScroll = $('.trekking-scroll');
    //smooth scrolling
    trekkingScroll.click(function(e) {
      $('body,html').animate({
       scrollTop: ($(this.hash).offset().top)
      },1000);
 
    });

    var adventureScroll = $('.adventure-scroll');
    //smooth scrolling
    adventureScroll.click(function(e) {
      $('body,html').animate({
       scrollTop: ($(this.hash).offset().top)
      },1000);
 
    });

    var travelPackageScroll = $('.travel-pacakage-scroll');
    //smooth scrolling
    travelPackageScroll.click(function(e) {
      $('body,html').animate({
       scrollTop: ($(this.hash).offset().top)
      },1000);
 
    });

    var honeymoonScroll = $('.honeymoon-scroll');
    //smooth scrolling
    honeymoonScroll.click(function(e) {
      $('body,html').animate({
       scrollTop: ($(this.hash).offset().top)
      },1000);
 
    });

    var foodTourScroll = $('.food-tour-scroll');
    //smooth scrolling
    foodTourScroll.click(function(e) {
      $('body,html').animate({
       scrollTop: ($(this.hash).offset().top)
      },1000);
 
    });

    var safariScroll = $('.safari-scroll');
    //smooth scrolling
    safariScroll.click(function(e) {
      $('body,html').animate({
       scrollTop: ($(this.hash).offset().top)
      },1000);
 
    });

    var waterTourScroll = $('.water-tour-scroll');
    //smooth scrolling
    waterTourScroll.click(function(e) {
      $('body,html').animate({
       scrollTop: ($(this.hash).offset().top)
      },1000);
 
    });
    
    var hotelScroll = $('.hotel-scroll');
    //smooth scrolling
    hotelScroll.click(function(e) {
      $('body,html').animate({
       scrollTop: ($(this.hash).offset().top)
      },1000);
 
    });

$('.carousel').carousel();

    // $('#card').hover(function(){
    //     $("#card").toggleClass('flip');
    //   //   $('#arrow').remove();
    //   });
      $('.more-info').click(function(){
        $("#card").toggleClass('flip');
      //   $('#arrow').remove();
      });
      $('.more-info1').click(function(){
        $("#card1").toggleClass('flip');
      //   $('#arrow').remove();
      });
      $('.more-info2').click(function(){
        $("#card2").toggleClass('flip');
      //   $('#arrow').remove();
      });
});