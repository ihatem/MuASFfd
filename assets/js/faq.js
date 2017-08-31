/*jshint devel:true */

// FAQ - show content on click
$(document).ready(function() {

  //init hide faq-content-box (3 last faq content wrapper)
  $('.faq-content-box:nth-of-type(2)').hide();
  $('.faq-content-box:nth-of-type(3)').hide();
  $('.faq-content-box:nth-of-type(4)').hide();

  // BIG SECTION WRAPPERS
  // SHOW "Process général" on click
  $('.general-box').click(function() {
    $('.faq-content-box:nth-of-type(1)').show();
    $('.faq-content-box:nth-of-type(2)').hide();
    $('.faq-content-box:nth-of-type(3)').hide();
    $('.faq-content-box:nth-of-type(4)').hide();
  });

  // SHOW "Echanger avec mon prestataire" on click
  $('.echange-box').click(function() {
    $('.faq-content-box:nth-of-type(1)').hide();
    $('.faq-content-box:nth-of-type(2)').show();
    $('.faq-content-box:nth-of-type(3)').hide();
    $('.faq-content-box:nth-of-type(4)').hide();
  });

  // SHOW "Appel - Visioconférence" on click
  $('.webcam-box').click(function() {
    $('.faq-content-box:nth-of-type(1)').hide();
    $('.faq-content-box:nth-of-type(2)').hide();
    $('.faq-content-box:nth-of-type(3)').show();
    $('.faq-content-box:nth-of-type(4)').hide();
  });

  // SHOW "Acheter / annuler une prestation" on click
  $('.cart-box').click(function() {
    $('.faq-content-box:nth-of-type(1)').hide();
    $('.faq-content-box:nth-of-type(2)').hide();
    $('.faq-content-box:nth-of-type(3)').hide();
    $('.faq-content-box:nth-of-type(4)').show();
  });

  //TITLE (+) SHOW
  //Show question content on click (+)
  $('.title-line').click(function() {
    $(this).closest('div').next("div").slideToggle("slow");
  });

});
