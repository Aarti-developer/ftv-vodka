// ========================================================================= //
// Scroll to Top Script
// ========================================================================= //
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});

jQuery(function ($) {


    // "use strict";
    
    // $(window).on('scroll', function () {
    //     if ($(this).scrollTop() > 260) { // Set position from top to add class
    //         $('header').addClass('header-appear');
    //     }
    //     else {
    //         $('header').removeClass('header-appear');
    //     }
    // });
    
    //scroll to appear
    // $(window).on('scroll', function () {
    //     if ($(this).scrollTop() > 500)
    //         $('.scroll-top-arrow').fadeIn('slow');
    //     else
    //         $('.scroll-top-arrow').fadeOut('slow');
    // });
    
    //Click event to scroll to top
    // $(document).on('click', '.scroll-top-arrow', function () {
    //     $('html, body').animate({scrollTop: 0}, 800);
    //     return false;
    // });
    
    // $(".scroll").on("click", function (event) {
    //     event.preventDefault();
    //     $("html,body").animate({
    //         scrollTop: $(this.hash).offset().top - 60}, 1200);
    // });
    
    /* ===================================
        Side Menu
    ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }
    });

