//sec2//
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "日本",size:50 },
    headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
  })
    .done(function (msg) {

      var boxs = document.getElementsByClassName('box');

      for (var i = 0; i < boxs.length; i++) {

        $("#list_a >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#list_a >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
        $("#list_a >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


        var str = msg.documents[i].contents;
        var str2 = str.substring(0, 40);

        $("#list_a >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
        $("#list_a >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

      }

    });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "松島",size:50 },
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
    data: { query: "屋久島",size:50 },
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
    data: { query: "旅行", size:50 },
    headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
  })
    .done(function (msg) {

      var boxs = document.getElementsByClassName('box');

      for (var i = 0; i < boxs.length; i++) {

        $("#list_d >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#list_d >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
        $("#list_d >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


        var str = msg.documents[i].contents;
        var str2 = str.substring(0, 60);

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
  $("#myInput").on("keyup", function() {
    var value = $(this).val();
    $(".search div").filter(function() {
      $(this).toggle($(this).text().indexOf(value) > -1)
    });
  });