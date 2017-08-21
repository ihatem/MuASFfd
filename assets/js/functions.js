/*jshint devel:true */


$(document).ready(function() {

  $('.faq-content-box:nth-of-type(2)').hide();
  $('.faq-content-box:nth-of-type(3)').hide();
  $('.faq-content-box:nth-of-type(4)').hide();

  $('.general-box').click(function() {
    $('.faq-content-box:nth-of-type(1)').show();
    $('.faq-content-box:nth-of-type(2)').hide();
    $('.faq-content-box:nth-of-type(3)').hide();
    $('.faq-content-box:nth-of-type(4)').hide();
  });

  $('.echange-box').click(function() {
    $('.faq-content-box:nth-of-type(1)').hide();
    $('.faq-content-box:nth-of-type(2)').show();
    $('.faq-content-box:nth-of-type(3)').hide();
    $('.faq-content-box:nth-of-type(4)').hide();
  });

  $('.webcam-box').click(function() {
    $('.faq-content-box:nth-of-type(1)').hide();
    $('.faq-content-box:nth-of-type(2)').hide();
    $('.faq-content-box:nth-of-type(3)').show();
    $('.faq-content-box:nth-of-type(4)').hide();
  });

  $('.cart-box').click(function() {
    $('.faq-content-box:nth-of-type(1)').hide();
    $('.faq-content-box:nth-of-type(2)').hide();
    $('.faq-content-box:nth-of-type(3)').hide();
    $('.faq-content-box:nth-of-type(4)').show();
  });

  $('.title-line').click(function() {
    $(this).next().slideToggle("slow");
  });

  $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  });


});