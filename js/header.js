
//헤더메뉴바
$(function(){
    $('.menu > li').mouseover(function(){
      $(this).children('.sub').stop().slideDown();
    }).mouseout(function(){
      $('.sub').stop().slideUp();
    });
  });

  //탑헤더없애기//
$(function(){
  $('.top-header').css("transform","translateY(0px)").css("opacity","0.8");
  $(window).scroll(function () {
      var ws = $(this).scrollTop();
      if (window.matchMedia("(min-width: 768px)").matches) {

          if ( ws > 100) {
              $('.top-header').css("transform", "translateY(0Px)").slideUp();
          }
      } 
          if (100 > ws) {
              $('.top-header').css("transform", "translateY(0px)").slideDown();
          }
  });
});
