
//헤더메뉴바
$(function(){
    $('.menu > li').mouseover(function(){
      $(this).children('.sub').stop().slideDown();
    }).mouseout(function(){
      $('.sub').stop().slideUp();
    });
  });