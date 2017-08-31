/*jshint devel:true */

$(document).ready(function() {

  /*
  // ENABLE calendar datepicker
  $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  });
  */

  $.getScript('assets/js/min/1-calendar-verif-min.js');

  $("#commande-form").watch({
    properties: "prop_innerHTML",
    watchChildren: false,
    callback: function () {
        $.getScript("assets/js/min/2-cmd-verif-min.js");
    }
  });

  $("#paiement-form").watch({
    properties: "prop_innerHTML",
    watchChildren: false,
    callback: function () {
        $.getScript("assets/js/min/3-pay-verif-min.js");
    }
  });

  $("#confirmation-form").watch({
    properties: "prop_innerHTML",
    watchChildren: false,
    callback: function () {
        $.getScript("assets/js/min/4-confirm-verif-min.js");
    }
  });

});
