$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	  items: 3,
      margin:0,
  	  loop: true,
  	  nav: true,
  	  dots: false,
  	  responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        577:{
            items:1,
            nav:false,
            dots:false
        },
        768:{
            items:3,
            nav:true,
            loop:false,
            dots:false
        },
        992:{
            items:3,
            nav:false,
            loop:true,
            dots:false
        },
        1200:{
            items:3,
            nav:true,
            loop:true,
            dots:false
        },
    }
  });

});
$(function() {
 $(window).scroll(function() {
    $('#owl-carousel .about_img').each(function(){
    let imagePos = $(this).offset().top;

    let topOfWindow = $(window).scrollTop();
    if(imagePos<topOfWindow+650) {
        $(this).addClass("bounceIn");
    }
    });

 });
})
$(function() {
 $(window).scroll(function() {
    $('#services .services-title').each(function(){
    let imagePos = $(this).offset().top;

    let topOfWindow = $(window).scrollTop();
    if(imagePos<topOfWindow+650) {
        $(this).addClass("fadeInLeft");
    }
    });

 });
})
$(function() {
 $(window).scroll(function() {
    $('#portfolio .portfolio-title').each(function(){
    let imagePos = $(this).offset().top;

    let topOfWindow = $(window).scrollTop();
    if(imagePos<topOfWindow+650) {
        $(this).addClass("fadeInRight");
    }
    });

 });
})
$(function() {
 $(window).scroll(function() {
    $('#about .about-title').each(function(){
    let imagePos = $(this).offset().top;

    let topOfWindow = $(window).scrollTop();
    if(imagePos<topOfWindow+650) {
        $(this).addClass("bounceInDown");
    }
    });
 });
})
$(function() {
 $(window).scroll(function() {
    $('#reviews .reviews-title').each(function(){
    let imagePos = $(this).offset().top;

    let topOfWindow = $(window).scrollTop();
    if(imagePos<topOfWindow+650) {
        $(this).addClass("fadeInLeft");
    }
    });
 });
})
$(function() {
 $(window).scroll(function() {
    $('#contacts .contacts-title').each(function(){
    let imagePos = $(this).offset().top;

    let topOfWindow = $(window).scrollTop();
    if(imagePos<topOfWindow+650) {
        $(this).addClass("fadeInRight");
    }
    });
 });
})