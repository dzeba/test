(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);

$('.block1__text2').click(function(){
    $(".header__block").fadeToggle(100);
    $(".desktop__info1").fadeToggle(100);
});
$('.info1__close1').click(function(){
    $(".desktop__info1").fadeToggle(100);
    $(".header__block").fadeToggle(100);
});

$('.block4__text2').click(function(){
    $(".desktop__info2").fadeToggle(100);
    $(".header__block").fadeToggle(100);
});
$('.info1__close2').click(function(){
    $(".desktop__info2").fadeToggle(100);
    $(".header__block").fadeToggle(100);
});

$('.block2__text2').click(function(){
    $(".desktop__info3").fadeToggle(100);
    $(".header__block").fadeToggle(100);
});
$('.info1__close3').click(function(){
    $(".desktop__info3").fadeToggle(100);
    $(".header__block").fadeToggle(100);
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$('.list').next().hide();

$('.list').click(function(){
    $(this).next().slideToggle();
    $('.list').not(this).next().stop(true,true).slideUp();
});
$('.mobile1__text2').click(function(){
    $(".mobile1__text2").fadeToggle(100);
    $(".mobile2__text2").css('display','block');
    $(".mobile3__text2").css('display','block');
    $(".mobile4__text2").css('display','block');
});
$('.mobile2__text2').click(function(){
    $(".mobile2__text2").fadeToggle(100);
    $(".mobile1__text2").css('display','block');
    $(".mobile3__text2").css('display','block');
    $(".mobile4__text2").css('display','block');
});
$(document).ready(function(){
    $("#footer__logo").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$('.mobile3__text2').click(function(){
    $(".mobile3__text2").fadeToggle(100);
    $(".mobile1__text2").css('display','block');
    $(".mobile2__text2").css('display','block');
    $(".mobile4__text2").css('display','block');
});
$('.mobile4__text2').click(function(){
    $(".mobile4__text2").fadeToggle(100);
    $(".mobile2__text2").css('display','block');
    $(".mobile3__text2").css('display','block');
    $(".mobile1__text2").css('display','block');
});
$('.first').click(function() {
    $(".menu__links-item").css('color','#b038');
    $(".first").css('color', 'black');
});
$('.second').click(function() {
    $(".menu__links-item").css('color','#b038');
    $(".second").css('color', 'black');
});
$('.third').click(function() {
    $(".menu__links-item").css('color','#b038');
    $(".third").css('color', 'black');
});
$('.fourth').click(function() {
    $(".menu__links-item").css('color','#b038');
    $(".fourth").css('color', 'black');
});
$('.five').click(function() {
    $(".menu__links-item").css('color','#b038');
    $(".five").css('color', 'black');
});