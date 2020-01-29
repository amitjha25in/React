(function($) {
  "use strict";
  jQuery(document).ready(function() {
    /* START MENU-JS */
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".menu-top").addClass("sticky_menu");
      } else {
        $(".menu-top").removeClass("sticky_menu");
      }
    });
    /* END MENU-JS */
    // Activce menu
    $(".nav-item").on("click", ".nav-link", function() {
      $(this)
        .parent()
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  });

  /*PRELOADER JS*/
  $(window).on("load", function() {
    $(".spinner").fadeOut();
    $(".preloader")
      .delay(350)
      .fadeOut("slow");
  });
  /*END PRELOADER JS*/
})(jQuery);
