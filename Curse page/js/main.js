$(document).ready(function () {

   if (typeof AOS !== 'undefined') {
      if ($(window).width() >= 768) {
         AOS.init();
      } else {
         $('*[data-aos]').removeAttr('data-aos');
      }
      $(window).resize(function () {
         if ($(window).width() <= 768) {
            $('*[data-aos]').removeAttr('data-aos');
         } else {
            AOS.init();
         }
      });
   }
};