$(function () {
	//Движение по нажатию кнопки мне это нужно
	$('a.offer__btn, a.header-btn').click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});
        $('.header-nav__link').click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    //Включение кнопки возврата на главный экран
    var btn = $('.btn-up');
        $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        $('.btn-up').css('display', 'flex')
        }
        //Скрыть кнопку возврата при разрешении меньше 1200px
        if(window.innerWidth < 1200) {
        var none = $('.btn-up')[0];
        $('.btn-up').css('display', 'none')
        }
    });
    // Отображение и скрытие бургера
    var burger = ('.burger-menu__button');
    var header = ('.burger-menu');
        $('.burger-menu__button').click(function(){
        $('.burger-menu').closest('.burger-menu').toggleClass('burger-menu_active');
        $('.offer').closest('.offer').toggleClass('offer_active');
    });
    var btn = $('.btn-up');
        $(window).scroll(function() {
        if ($(window).scrollTop() < 300) {
        $('.btn-up').css('display', 'none')
        }
    });
        // Плавная анимация по блокам сайта
    var menuOff = $ ('.header-nav__menu');
        $(window).scroll(function() {
        if($(window).scrollTop() > 400) {}
        $('.burger-menu_active .header-nav__menu').css('opacity', '0')
        });
    var menuOff = $('.header-nav__menu');
        $(window).scroll(function() {
        if ($(window).scrollTop() < 400) {
        $('.burger-menu_active .header-nav__menu').css('opacity', '1')
        };
    });
        //Плавная анимация возврата на главный экран по клику на кноку
    $('a.btn-up').click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
        //Появление формы по клику на кнопку Заказать звонок и серый фон
    $('a.header-nav__btn').click(function(event){
    	event.preventDefault();
    	$('#myOverlay').fadeIn(297,	function(){
    	$('#form-active').css('display', 'block').animate({opacity: 1}, 198);
    	$('.offer').css('padding-top', ('100'))
    });
    });
    //Исчезновение серого прозрачного фона
    $('#form-active__close, #myOverlay').click( function(){
  		$('#form-active').animate({opacity: 0}, 198, function(){
    	$(this).css('display', 'none');
    	$('#myOverlay').fadeOut(297);
    	$('.offer').css('padding-top', ('0'))
    });
  });
    //Анимация облаков по наведению мышкой
    $('.header').on('mousemove', (e) => {
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();


	$('.sky').css(
		'transform',
		'translate(-' + x * 20 + 'px, -' + y * 20 +'px)'
		);
	});
    });