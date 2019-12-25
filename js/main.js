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

    $(document).on("click", ".navbar-collapse.in", function(e) {
      if (
        $(e.target).is("a") &&
        $(e.target).attr("class") != "dropdown-toggle"
      ) {
        $(this).collapse("hide");
      }
    });
    /* END MENU-JS */

    // filter items on button click
    $(".work_filter").on("click", "li", function() {
      var filterValue = $(this).attr("data-filter");
      //wrote here animation code
    });
    // filter items on button click
    $(".work_filter").on("click", "li", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    /* END ISOTOP JS */

    /* START SERVICE JS */
    $(".service_slider").owlCarousel({
      loop: true,
      navText: false,
      autoplayHoverPause: false,
      autoplay: 6000,
      smartSpeed: 1000,
      margin: 20,
      autoPlay: true,
      items: 3,
      responsive: {
        320: {
          items: 1
        },
        360: {
          items: 1
        },
        767: {
          items: 2
        },
        991: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    });
    /* END SERVICE JS */
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
