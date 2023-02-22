
//책 자료 가져오기//
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나츠메소세키 마음" },
    headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
})
    .done(function (msg) {
        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);
        // sub1
        $(".sub_box").append("<img src='" + msg.documents[4].thumbnail + "'/>");
        $(".syousai h3").html("<h3>" + msg.documents[1].title + "</h3>");
        $(".syousai > h3").append("<h6>" +"by "+ msg.documents[0].authors + "</h6>");

        $(".contextbox").append("<h3>" + msg.documents[0].authors[0] + "</h3>");
        $(".pricenum").append( msg.documents[0].price+" won");
      
        var str = msg.documents[3].contents;
        var str2 = str.substring(0, 600);
        $(".contextbox").append("<p>" + str2 + "</p>");
        $(".contextbox").append("<span>" + "자세히보기" + "</span>");
    });
//메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
    
$(document).ready(function () {
    $.get("./sub_text/txt1.txt", function (data) {
        $("#tmpBox").html(data);
    })
});

$(document).ready(function () {
    $.get("./sub_text/txt2.txt", function (data) {
        $("#tmpBox2").html(data);
    })
});

//배송설명//
$(function(){

    $('.jirusi1').hover(function(){
 
    $('#popbox').css('display', 'block');
 
    });
    $('#cbtn').click(function(){
 
    $('#popbox').css('display', 'none');
 
    });
 });

 $(function(){

    $('.jirusi2').hover(function(){
 
    $('#popbox_2').css('display', 'block');
 
    });
    $('#cbtn2').click(function(){
 
    $('#popbox_2').css('display', 'none');
 
    });
 });

//overview//
$(function(){
    let index
    $(".togglebtn").click(function(){
    $(".api").slideToggle(1000);
    });
});



//하단 디테일 버튼//

$(document).ready(function(){
    $("#tab_menu1").click(function(){
      $(".tab_sub1").show();
      $(".tab_sub2,.tab_sub3").hide();
      $("#tab_menu1").addClass("port_back");
      $("#tab_menu2,#tab_menu3").removeClass("port_back");
    });

    $("#tab_menu2").click(function(){
      $(".tab_sub2").show();
      $(".tab_sub1,.tab_sub3").hide();
      $("#tab_menu2").addClass("port_back");
      $("#tab_menu1,#tab_menu3").removeClass("port_back");
    });
    $("#tab_menu3").click(function(){
      $(".tab_sub3").show();
      $(".tab_sub1,.tab_sub2").hide();
      $("#tab_menu3").addClass("port_back");
      $("#tab_menu1,#tab_menu2").removeClass("port_back");
    });
  });

//sec4 하단 슬라이드//

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
  }, 20);
}
function stopAction() {
  clearInterval(interval);
}

//sec4 api 가져오기//

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나쓰메 소세키", size: 30 },
    headers: { Authorization: "KakaoAK 1bd3d4fafe24bf6038300a154bb36843" }
  })
    .done(function (msg) {
  
      var contents = document.getElementsByClassName('content');
  
      for (var i = 0; i < contents.length; i++) {
  
        $(".rolling_wrap > .content").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      }
  
    });


  