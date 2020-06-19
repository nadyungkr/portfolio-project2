$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

var nav = $("nav ul li"); //메뉴 버튼
var cont = $("#contents > .inner > div"); //컨텐츠

//nav 버튼을 클릭했을 때
nav.click(function(e){
    e.preventDefault();  //#의 기본 기능을 차단
    var target = $(this);  //클릭한 타겟을 변수에 할당
    var index = target.index(); //클릭한 타겟에 번호를 할당
    var section = cont.eq(index) //클릭한 버튼과 컨텐츠 연결
    var offset = section.offset().top; //각 컨텐츠의 오프셋 값을 할당(top에 위치한 부분이므로 즉 height값)
    $("html, body").animate({scrollTop:offset}, 600, "easeInOutExpo");

});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

// nav에 가려지는 부분 정도 값 빼주기
    if ( wScroll >= cont.eq(0).offset().top ){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if ( wScroll >= cont.eq(1).offset().top - $(window).height()/5){
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if ( wScroll >= cont.eq(2).offset().top - $(window).height()/5){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if ( wScroll >= cont.eq(3).offset().top - $(window).height()/5){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if ( wScroll >= cont.eq(4).offset().top - $(window).height()/5){
        nav.removeClass("active");
        nav.eq(4).addClass("active");
    }
});

/* toggle menu */
$('.mNav').click(function(){
    $(this).toggleClass('open');
    $('.menu').toggle();
});

/*card_stack*/
$(document).ready(function(){
    var card = $('.card');
    var currentItem = card.filter('.live');

    card.click(function cardStack(){
        var nextItem = currentItem.next();
        var contentFirst = card.first();
        var lastItem = card.last();
        
        currentItem.removeClass('live');
        currentItem.addClass('live3');

        if (currentItem.is(lastItem)) {
            contentFirst.removeClass('live2');
            currentItem = contentFirst.addClass('live');
            contentFirst.next().removeClass('live3');
            contentFirst.next().addClass('live2');

        } else if (currentItem.is(contentFirst)) {
            currentItem = nextItem.addClass('live');
            currentItem = nextItem.removeClass('live2');
            currentItem.next().addClass('live2');
            currentItem.next().removeClass('live3');
          
        } else {
            currentItem = nextItem.removeClass('live2');
            currentItem = nextItem.addClass('live');
            contentFirst.removeClass('live3');
            contentFirst.addClass('live2');
        }
    });
});

/*skill_box*/
var acc = document.getElementsByClassName("skill_btn");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*modal*/
var body = document.getElementsByTagName("body")[0];
var modal = document.getElementById("modal");
var btn = document.getElementsByClassName("modal_btn")[0];
var close_modal = document.getElementsByClassName("close_modal")[0];

btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflowY = "hidden";
}
close_modal.onclick = function() {
    modal.style.display = "none";
    body.style.overflowY = "scroll";
}
/*responsive*/
$(window).resize(function(){
    var wWidth = $(window).width();
    if( wWidth > 800 && $('.menu').is(":hidden") ){
        $('.menu').removeAttr("style");
    }
});

