//sec3 롤링//
var banner_left = 0;
var img_cnt = 0;
var first = 1;
var last;
var interval;
$(document).ready(function () {
  $(".rolling_wrap > div").each(function () {
    $(this).css("left", banner_left);
    banner_left += $(this).width() + 5;
    $(this).attr("id", "content" + (++img_cnt));
  });

  last = img_cnt;
  startAction();

  $(".content").hover(
    function () { stopAction(); },
    function () { startAction(); });
});

function startAction() {
  interval = setInterval(function () {
    $(".rolling_wrap > div").each(function () {
      $(this).css("left", $(this).position().left - 1);
    });

    var first_content = $("#content" + first);
    var last_content = $("#content" + last);

    if (first_content.position().left < "-" + $(first_content).width()) {
      first_content.css("left", last_content.position().left + last_content.width() + 5);
      first++;
      last++;
      if (last > img_cnt) { last = 1; }
      if (first > img_cnt) { first = 1; }
    }
  }, 15);
}
function stopAction() {
  clearInterval(interval);
}


//api 이미지 가져오기//
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "travel", size: 30 },
  headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
})
  .done(function (msg) {

    var contents = document.getElementsByClassName('content');

    for (var i = 0; i < contents.length; i++) {

      $(".rolling_wrap > .content").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
    }

  });


//sec3//
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "日本", size: 30 },
  headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('box');

    for (var i = 0; i < boxs.length; i++) {

      $("#list_a >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $("#list_a >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
      $("#list_a >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 30);

      $("#list_a >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
      $("#list_a >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "松島", size: 50 },
  headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
})
  .done(function (msg) {

    // for문 (8개)
    var boxs = document.getElementsByClassName('box');


    for (var i = 0; i < boxs.length; i++) {

      $("#list_b >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $("#list_b >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
      $("#list_b >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);

      $("#list_b >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
      $("#list_b >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "屋久島", size: 30 },
  headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
})
  .done(function (msg) {

    // for문 (8개)
    var boxs = document.getElementsByClassName('box');


    for (var i = 0; i < boxs.length; i++) {

      $("#list_c >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $("#list_c >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
      $("#list_c >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);

      $("#list_c >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
      $("#list_c >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "旅行", size: 30 },
  headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('box');

    for (var i = 0; i < boxs.length; i++) {

      $("#list_d >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $("#list_d >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
      $("#list_d >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 30);

      $("#list_d >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
      $("#list_d >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

    }

  });

$(function () {

  //multipage
  $('#booklist li:nth-of-type(1)').click(function () {
    $('#list_a').show();
    $('#list_b').hide();
    $('#list_c').hide();
    $('#list_d').hide();
  });


  $('#booklist li:nth-of-type(2)').click(function () {
    $('#list_a').hide();
    $('#list_b').show();
    $('#list_c').hide();
    $('#list_d').hide();
  });


  $('#booklist li:nth-of-type(3)').click(function () {
    $('#list_a').hide();
    $('#list_b').hide();
    $('#list_c').show();
    $('#list_d').hide();
  });

  $('#booklist li:nth-of-type(4)').click(function () {
    $('#list_a').hide();
    $('#list_b').hide();
    $('#list_c').hide();
    $('#list_d').show();
  });

  // title 
  $("#booklist li").click(function () {
    $("#titlelist").text($(this).text());
  });
});

//search
$("#myInput").on("keyup", function () {
  var value = $(this).val();
  $(".search div").filter(function () {
    $(this).toggle($(this).text().indexOf(value) > -1)
  });
});

//sec5//
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "NatsumeSoseki", size: 30 },
  headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('soseki');

    for (var i = 0; i < boxs.length; i++) {

      $(".soseki").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".soseki").eq(i).append(`<h5><a href="sub2.html">${msg.documents[i].title}</a></h5>`);
      $(".soseki").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

    }
  });