$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
      duration:2000,
      indicators:false,
      interval: 2000
    });
    $('.tabs').tabs({
      duration: 800
    });
     $('.collapsible').collapsible();
     $('input.autocomplete').autocomplete({
      data: {
        "Diseño Web": null,
        "Redes de Datos": null,
        "Smite":null,
      },
      limit: 0
    });
  });