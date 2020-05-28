var nav = $("nav ul li"); //메뉴 버튼
var cont = $("#contents > .inner > div"); //컨텐츠
var bricks = $("#section6 > section");
var imgsLi = $('.main_visual > .visual_container > li');

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
    var scroll = $(window).scrollTop() + ($(window).height()/3);
    $('.panel').each(function () {
        if ($(this).position().top <= scroll && $(this).position().top + $(this).height() > scroll) {
            $('body').removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });
            $('body').addClass('color-' + $(this).data('color'));
        }
    });

    var wScroll = $(this).scrollTop();

    if ( wScroll > 50 ) {
        $("#nav").addClass("on");
    } else if ( wScroll == 0 ) {
        $("#nav").removeClass("on");
    }
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
    if ( wScroll >= cont.eq(5).offset().top - $(window).height()/5){
        nav.removeClass("active");
        nav.eq(5).addClass("active");
    }
    /*text animation*/
    //offset top값보다 조금더 작은 값을 줘서 텍스트가 더 빨리보이게 하기
    
    if(wScroll >= cont.eq(0).offset().top - $(window).height()){
        cont.eq(0).addClass("show");
    }
    if(wScroll >= cont.eq(1).offset().top - $(window).height()/3){
        cont.eq(1).addClass("show");
    }
    if(wScroll >= cont.eq(2).offset().top - $(window).height()/3){
        cont.eq(2).addClass("show");
    }
    if(wScroll >= cont.eq(3).offset().top - $(window).height()/3){
        cont.eq(3).addClass("show");
    }
    if(wScroll >= cont.eq(4).offset().top - $(window).height()/3){
        cont.eq(4).addClass("show");
    }
    if(wScroll >= cont.eq(5).offset().top - $(window).height()/3){
        cont.eq(5).addClass("show");
    }
    if(wScroll == cont.eq(5).offset().top){
        bricks.addClass("show");
    } else if(wScroll != cont.eq(5).offset().top){
        bricks.removeClass("show");
    }
});

/* toggle menu */
$('.mNav').click(function(){
    $('.menu').toggle();
});

/*HOME autotype text*/
var headLine = new Array();

headLine[0] = "HyeonJeong's Portfolio";
headLine[1] = "I'm A Web Publisher";
headLine[2] = "and Go-getter!";
var i = 0;
var j = 0;
var speed = 150;
var check = true;

window.onload = typing();

function typing()
{

   if(i <= headLine[j].length + 10){
       //+10 = delay
        document.getElementById("autoType").innerHTML =
        headLine[j].substring(0,i);
      
        if(check) i++;
        if(!check) i--;
      
        setTimeout(typing, speed);
      
        if(i == headLine[j].length + 10)
            check = false;

        if(i == 0){
            check = true;
            j++;
            
            if(j==3) 
                j = 0;
        }
    }
}

/*image-slide blue section*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block"; 
}

function tabMenu(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*responsive*/
$(window).resize(function(){
    var wWidth = $(window).width();
    if( wWidth > 800 && $('.menu').is(":hidden") ){
        $('.menu').removeAttr("style");
    }
});

