/*jshint devel:true */

// DECLARATE Regex variables
var reg_nom = new RegExp("^[a-zàâçéèêëîïôûùüÿñæœ .-]*$");
var reg_mail = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
var reg_bd = new RegExp("^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$");
var reg_tel = new RegExp ("^[0-9]*$");

// INPUT "Adresse e-mail" regex check & add input style (valid or not)
$("input[name=mail]").keyup(function() {
  if (reg_mail.test($(this).val().toLowerCase())) {
    $(this).addClass("input-valid");
    $(this).removeClass("input-invalid");
  }
  else {
    $(this).addClass("input-invalid");
    $(this).removeClass("input-valid");
  }
});

// INPUT "Nom" regex check & add input style (valid or not)
$("input[name=nom]").keyup(function() {
  if
  (
    (reg_nom.test($(this).val().toLowerCase())) &&
    ($(this).val() !== "")
  )
  {
    $(this).addClass("input-valid");
    $(this).removeClass("input-invalid");
  }
  else {
    $(this).addClass("input-invalid");
    $(this).removeClass("input-valid");
  }
});

// INPUT "Prénom" regex check & add input style (valid or not)
$("input[name=prenom]").keyup(function() {
  if
  (
    (reg_nom.test($(this).val().toLowerCase())) &&
    ($(this).val() !== "")
  )
  {
    $(this).addClass("input-valid");
    $(this).removeClass("input-invalid");
  }
  else {
    $(this).addClass("input-invalid");
    $(this).removeClass("input-valid");
  }
});

// INPUT "Date de naissance" regex check & add input style (valid or not)
$("input[name=birth]").keyup(function() {
  if (reg_bd.test($(this).val())) {
    $(this).addClass("input-valid");
    $(this).removeClass("input-invalid");
  }
  else {
    $(this).addClass("input-invalid");
    $(this).removeClass("input-valid");
  }
});

// INPUT "Téléphone" regex check & add input style (valid or not)
$("input[name=tel]").keyup(function() {
  if
  (
    (reg_tel.test($(this).val())) &&
    ($(this).val() !== "")
  )
  {
    $(this).addClass("input-valid");
    $(this).removeClass("input-invalid");
  }
  else {
    $(this).addClass("input-invalid");
    $(this).removeClass("input-valid");
  }
});

// ADD STYLE to "Pays de résidence" input when clicked
$(".label-selected-pays").click(function () {
  $(".default-label-pays").css("border","2px solid #32c5d2");
});

// ADD STYLE to "Fuseau horaire" input when clicked
$(".label-selected-fuseau").click(function () {
  $(".default-label-fuseau").css("border","2px solid #32c5d2");
});

// ADD STYLE to "Prefix" input when clicked
$(".label-selected-tel").click(function () {
  $(".default-label-tel").css(
    {
      "border":"2px solid #32c5d2",
      "border-right": "1px solid #32c5d2"
    });
});

// VERIFICATIONS on click between different command pages process
// --- ON CLICK "suivant" :
function click_cmd_suiv () {

  // 2- on Commande-form page
  if
  (
    // if "nom" respects REGEX
    (reg_nom.test($("input[name=nom]").val())) &&
    // if "prénom" respects REGEX
    (reg_nom.test($("input[name=prenom]").val())) &&
    // if "mail" respect REGEX
    (reg_mail.test($("input[name=mail]").val().toLowerCase())) &&
    // if "date de naissance" respect REGEX
    (reg_bd.test($("input[name=birth]").val())) &&
    // if "pays de résidence" isn't empty (one proposition was selected)
    ($(".p-pays").text() !== "Choisir un pays" ) &&
    // if "fuseau horaire" isn't empty (one proposition was selected)
    ($(".default-label-fuseau").find(".p-tel").text() !== "Choisir un fuseau horaire") &&
    // if "Téléphone" isn't empty (one proposition was selected)
    (reg_tel.test($("input[name=tel]").val())) &&
    // if "téléphone - prefix" isn't empty (one proposition was selected)
    ($(".default-label-tel").find(".p-tel").text() !== "Prefix")
  )

  {
    // SCROLL TO TOP
    $('html, body').animate({
        scrollTop: $("#contact-main-wrap").offset().top
    }, 300);

    // DISABLE 2-Commande-form and ENABLE 3-Paiement-form
    $("#commande-form").attr("display", "false");
    $("#commande-form").css("display", "none");
    $("#paiement-form").attr("display", "true");
    $("#paiement-form").css("display", "block");


    // INCREASE Progress bar width 75% (3/4)
    $(".progress-bar").css("width", "75%");

    // CHANGE Progress bar icon & text COLOR
    $(".paiement-icon").next().css("color", "#32c5d2");
    $(".paiement-icon").css("filter", "grayscale(0)");

    // ENABLE "précédent" BUTTON
    $(".btn-white").removeClass("btn-white-disabled");

    // REMOVE Error message
    $(".error-calendar").toggleClass("animated shake");
    $(".error-calendar").css("display","none");
  }
  else
  {

    // SCROLL TO TOP
    $('html, body').animate({
        scrollTop: $("#contact-main-wrap").offset().top
    }, 300);

    // DISPLAY Error message
    $(".error-calendar").toggleClass("animated shake");
    $(".error-calendar").css("display","flex");

  }

}

// --- ON CLICK "précedent" :
function click_cmd_prec () {

  // SCROLL TO TOP
  $('html, body').animate({
      scrollTop: $("#contact-main-wrap").offset().top
  }, 300);

  // HIDE 2-Commande-form & SHOW 1-Calendar
  $("#calendar-form").attr("display", "true");
  $("#calendar-form").css("display", "block");
  $("#commande-form").attr("display", "false");
  $("#commande-form").css("display", "none");

  // DECREASE Progress bar width to 25% (1/4)
  $(".progress-bar").css("width", "25%");

  // CHANGE Progress bar icon & text COLOR
  $(".form-icon").next().css("color", "#8e8e8e");
  $(".form-icon").css("filter", "grayscale(100%)");

  // DISABLE "précédent" BUTTON (grayed)
  $(".btn-white").addClass("btn-white-disabled");

}


// Pays de résidence
// CHANGE LABEL TEXT WHEN SELECT
$(".label-selected-pays").click(function() {
  $(".default-label-pays > p").html($(this).html());
});

// HIDE dropdown and FLIP arrow icon menu when unfocus
$(document).click(function(e) {
  var target = e.target;
  if (($(target).parent().attr('class') !== "dropdown-pays") && ($(target).parent().attr('class') !== "default-label-pays") && ($(".ul-pays").attr('class') === "ul-pays input-checked")) {
    $(".ul-pays").removeClass("input-checked");
    $(".arrow-icon-pays").toggleClass("arrow-icon-rotated");
  }
});

// SHOW Dropdown menu when clicked
$(".default-label-pays").click(function() {
  $(".arrow-icon-pays").toggleClass("arrow-icon-rotated");
  $(".ul-pays").toggleClass("input-checked");
});

// ADD country PREFIX (af, ax, al...) to span class to SHOW icon from flag-icon.min.css
$(".label-selected-pays").each(function() {
  $(this).find(".country-icon").addClass("flag-icon flag-icon-" + $(this).attr("value").toLowerCase());
});

// ADD country PREFIX (af, ax, al...) to span class to SHOW icon from flag-icon.min.css
$(".label-selected-tel").each(function() {
  $(this).find(".country-icon").addClass("flag-icon flag-icon-" + $(this).attr("data-countrycode").toLowerCase());
});


// Fuseau horaire
// CHANGE LABEL TEXT WHEN SELECT
$(".label-selected-fuseau").click(function() {
  $(".default-label-fuseau > p").html($(this).html());
});

// HIDE dropdown and FLIP arrow icon menu when unfocus
$(document).click(function(e) {
  var target = e.target;
  if (($(target).parent().attr('class') !== "dropdown-fuseau") && ($(target).parent().attr('class') !== "default-label-fuseau") && ($(".ul-fuseau").attr('class') === "ul-fuseau input-checked")) {
    $(".ul-fuseau").removeClass("input-checked");
    $(".arrow-icon-fuseau").toggleClass("arrow-icon-rotated");
  }
});

// SHOW Dropdown menu when clicked
$(".default-label-fuseau").click(function() {
  $(".arrow-icon-fuseau").toggleClass("arrow-icon-rotated");
  $(".ul-fuseau").toggleClass("input-checked");
});

// Téléphone Prefix
// CHANGE LABEL TEXT WHEN SELECT
$(".label-selected-tel").click(function() {
  $(".default-label-tel > p").html("(+"+$(this).attr("value")+")");
});

// HIDE dropdown and FLIP arrow icon menu when unfocus
$(document).click(function(e) {
  var target = e.target;
  if (($(target).parent().attr('class') !== "dropdown-tel") && ($(target).parent().attr('class') !== "default-label-tel") && ($(".ul-tel").attr('class') === "ul-tel input-checked")) {
    $(".ul-tel").removeClass("input-checked");
    $(".arrow-icon-tel").toggleClass("arrow-icon-rotated");
  }
});

// SHOW Dropdown menu when clicked
$(".default-label-tel").click(function() {
  $(".arrow-icon-tel").toggleClass("arrow-icon-rotated");
  $(".ul-tel").toggleClass("input-checked");
});
