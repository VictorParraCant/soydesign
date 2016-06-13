$( document ).ready(function() {
  $('nav').find('.logo').off('click').on('click', function(e){
    e.preventDefault();
    var inicio = $(this).find('a').attr('href');
    $.scrollTo( inicio, 900, {axis:'y', offset:0} );
  });

  $('header').find('.flecha').off('click').on('click', function(e){
    e.preventDefault();
    var contenido = $(this).find('a').attr('href');
    $.scrollTo( contenido, 900, {axis:'y', offset:0} );
  });

  $(window).scroll(function() {
   if ($('nav').offset().top > 50) {
     $('#logo').attr({ 'src':'./images/logo_barra_2.png' });
     $('#menu').addClass('nav-back');
   } else {
     $('#logo').attr({ 'src':'./images/logo_barra_1.png' });
     $('#menu').removeClass('nav-back');
   }

  });

  $('#descarga').click(function() {
    $('.modal').modal('show');
  });


});
