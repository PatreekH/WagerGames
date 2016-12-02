$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    $("#main_menu").click(function () {
      hamburger_cross();      
    });

    $("#main_menu").hover(
      function () {
        $("#main_menu").css("backgroundColor", "gray");
        $("#slant1").css("borderColor", "gray transparent transparent transparent");    
    }, function(){
        $("#main_menu").css("backgroundColor", "#f9f9f9");
        $("#slant1").css("borderColor", "#f9f9f9 transparent transparent transparent");   
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        $("#menu_title").fadeIn();
        $("#menu_close").hide();
        $("#main_menu").removeClass('is-open');
        $("#main_menu").addClass('is-closed');
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        $("#menu_title").hide();
        $("#menu_close").fadeIn();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        $("#main_menu").addClass('is-open');
        $("#main_menu").removeClass('is-closed');
        isClosed = true;
      }
  }
  
/*  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  */
});