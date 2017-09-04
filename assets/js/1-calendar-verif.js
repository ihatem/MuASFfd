/*jshint devel:true */

// VERIFY if calendar schedule (<td>) is selected
$("td").click(function(){
  $("td").data('clicked', true);
});

// SELECT schedule (<tr>) apart days name (.days-row) and inactive days (.dispo-disable)
$("td").click(function () {

  if
  (
    // CONDITION : no days name (.days-row) selection
    ($(this).parent(".days-row").attr("class") !== "days-row") &&
    // CONDITION : no inactive days (.dispo-disable) selection
    ($(this).attr("class") !== "dispo-disable")
  )
  {
    // REMOVE all the other <td> activated
    $("td").removeClass("dispo-active");
    // ACTIVATE (highlight) <td> clicked
    $(this).toggleClass("dispo-active");
    // HIDE Error message
    $(".error-calendar").css("display","none");
  }

});

// VERIFICATIONS on click between different command pages process
// --- ON CLICK "suivant" :
function click_cal_suiv () {
  // 1- on Calendar page
  if
  (
    // if 1 schedule <td> is selected
    ($("td").data('clicked'))
  )
  {
    // SCROLL TO TOP
    $('html, body').animate({
        scrollTop: $("#contact-main-wrap").offset().top
    }, 300);
    // DISABLE 1-Calendar and ENABLE 2-Commande-form
    $("#commande-form").attr("display", "true");
    $("#commande-form").css("display", "block");
    $("#calendar-form").attr("display", "false");
    $("#calendar-form").css("display", "none");

    // INCREASE Progress bar width 50% (2/4)
    $(".progress-bar").css("width", "50%");

    // CHANGE Progress bar icon & text COLOR
    $(".form-icon").next().css("color", "#32c5d2");
    $(".form-icon").css("filter", "grayscale(0)");

    // ENABLE "précédent" BUTTON
    $(".btn-white").removeClass("btn-white-disabled");
  }
  else {
    // SCROLL TO TOP
    $('html, body').animate({
        scrollTop: $("#contact-main-wrap").offset().top
    }, 300);
    // DISPLAY Error message
    $(".error-calendar").toggleClass("animated shake");
    $(".error-calendar").css("display","flex");
  }
}
