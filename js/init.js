(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// colocar las inicializaciones

// para el carrusel
$(document).ready(function(){
  $('.carousel').carousel();
});

// aumentar la imagen
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

// lista desplegable
$('.dropdown-trigger').dropdown();

  // Mensajito emergente del elemento (Title)
  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
       