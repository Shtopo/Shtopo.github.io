
// OwlCarosel
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      items: 3,
      margin: 0,
      loop: true,
      nav: true,
      dots: false,
      responsive:{
        0:{
            items:1,
            nav:false,
            loop:true,
            dots:false
        },
        577:{
            items:1,
            nav:false,
            loop:true,
            dots:false
        },
        768:{
            items:2,
            nav:true,
            loop:true,
            dots:false
        },
        992:{
            items:3,
            nav:false,
            loop:true,
            dots:true
        },
        1200:{
            items:3,
            nav:true,
            loop:true,
            dots:true
        },
    }
  });
  });
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '300',
    width: '80%',
    videoId: 'gDNhKY5huE8',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.stopVideo();
}
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

if (!window['YT']) {var YT = {loading: 0,loaded: 0};
}if (!window['YTConfig']){
  var YTConfig = {'host': 'http://www.youtube.com'};
}
  if (!YT.loading) {
    YT.loading = 1;(function(){var l = [];
      YT.ready = function(f) {if (YT.loaded) {f();
      } 
      else {l.push(f);}};window.onYTReady = function() {
        YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};
        YT.setConfig = function(c) {for (var k in c) {
          if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};
          var a = document.createElement('script');a.type = 'text/javascript';
          a.id = 'www-widgetapi-script';
          a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflZIrlU7/www-widgetapi.js';
          a.async = true;var c = document.currentScript;if (c) {var n = c.nonce || c.getAttribute('nonce');
          if (n) {a.setAttribute('nonce', n);}}
          var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}

// GOOGLE Map
function initMap() {
  var pos = {lat: 51.484159, lng: 31.272331};
  var opt = {
    center: {lat: 51.484159, lng: 31.272331},
    zoom: 15,
  }
   var myMap = new google.maps.Map(document.getElementById('map-location'), opt);
   var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    title: 'Вам сюда - ул. Щорса 49а'
   });
   var info = new google.maps.InfoWindow({
    content: '<h3>BeWo</h3><p>Лучший в городе салон SPA-терапии</p>'
   });
   marker.addListener('click', function() {
    info.open(myMap, marker);
   });
}

$ (function(){
    //Движение по нажатию кнопки мне это нужно
  $('a.offer__btn, a.header-nav__link, a.btn-up, .footer-menu__link a').click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
      //Включение кнопки возврата на главный экран
    var btn = $('.btn-up');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        $('.btn-up').css('display', 'flex')
        }
        //Скрыть кнопку возврата при разрешении меньше 1200px
        if(window.innerWidth < 320) {
            var none = $('.btn-up')[0];
            $('.btn-up').css('display', 'none')
        }
    });
    // Скрыть кнопку возврата на секции header
    var btn = $('.btn-up');
    $(window).scroll(function() {
    if ($(window).scrollTop() < 300) {
    $('.btn-up').css('display', 'none')
        }
    });
    //Появление формы по клику на кнопку Заказать звонок
    $('a.header-nav__btn, .footer-form__btn').click(function(event){
      event.preventDefault();
    $('#form-overlay').fadeIn(297, function(){
    $('#form-active').css('display', 'block')
      .animate({opacity: 1}, 198);
     });
});
    //Исчезновение формы и серого прозрачного фона
    $('#form-active__close, #form-overlay').click( function(){
      $('#form-active').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#form-overlay').fadeOut(297);
    });
  });
// magnificPopup
    $('.item a').magnificPopup({
      type: 'image',
      gallery: {
      enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
//Появление менб-гамбургер
    $('.burger-menu__button').click(function(){
      $('.header-navigation, .burger-menu, .offer').toggleClass('active');
    });
//Скритие меню ниже главного экрана
    var menuOff = $ ('.header-navigation active');
        $(window).scroll(function() {
        if($(window).scrollTop() > 700) {}
        $('.header-navigation').css('display', 'none')
        });
    var menuOff = $('header-navigation');
        $(window).scroll(function() {
        if ($(window).scrollTop() < 400) {
        $('.header-navigation').css('display', 'block')
        };
    });
//Замена сервисных карточек
    $('#telasso').click(function(){
      $('.telasso-btn').toggleClass('active');
      $('.mobile-steaming, .mobile-masage').css('display', 'none');
      $('.mobile-telasso').css('display', 'block');
      $('#masage').removeClass('.masage-btn active');
      $('#steaming').removeClass('.steaming-btn active');
    });
      $('#masage').click(function(){
        $('.masage-btn').toggleClass('active');
        $('.mobile-telasso, .mobile-steaming ').css('display', 'none');
        $('.mobile-masage').css('display', 'block');
        $('#telasso').removeClass('.telasso-btn active');
        $('#steaming').removeClass('.steaming-btn active');
    });
      $('#steaming').click(function(){
        $('.steaming-btn').toggleClass('active');
        $('.mobile-telasso, .mobile-masage').css('display', 'none');
        $('.mobile-steaming').css('display', 'block');
        $('#masage').removeClass('.masage-btn active');
        $('#telasso').removeClass('.telasso-btn active');
    });
  });

