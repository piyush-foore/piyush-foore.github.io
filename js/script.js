jQuery(document).ready(function($) {
    new WOW().init();
    
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