// $(document).ready(function() {
// Efecto menu
   $('.nav a').each(function(i, e) {
      $(this).css({
         'top': '-200px'
      })

      $(this).animate({
         top: 0
      }, 2000 + (i * 500))
   })
// Efecto header
   if($(window).width() > 800) {
      $('header .text').css({
         opacity: 0,
         marginTop: 0
      })

      $('header .text').animate({
         opacity: 1,
         marginTop: -52
      }, 1500)
   }

   // Scroll
   let about = $('#about').offset().top;
   let menu = $('#menu').offset().top + 580;
   let galeria = $('#galeria').offset().top;
   let ubi = $('#ubicacion').offset().top;

   $('#btn-about').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: about - 100
      }, 500)
   })

   $('#btn-menu').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: menu 
      }, 500)
   })

   $('#btn-galeria').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: galeria
      }, 500)
   })

   $('#btn-ubi').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: ubi
      }, 500)
   })

   $(window).scroll(function(){
      let windowWidth = $(window).width();

      if(windowWidth > 800) {
         let scroll = $(window).scrollTop();
         $('header .text').css({
            'transform': 'translate(0px,'+ scroll / 2 +'%)'
         })

         $('.about article').css({
            'transform': 'translate(0px, -'+ scroll / 4 +'%)'
         })
      }
   })

   $(window).resize(function(){
      let windowWidth = $(window).width();
      if(windowWidth < 800) {

         $('.about article').css({
            'transform': 'translate(0px, 0px)'
         })
      }
   })

// })