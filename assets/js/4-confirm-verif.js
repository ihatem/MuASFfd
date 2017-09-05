/*jshint devel:true */

// LOAD Clipboard.js
$.getScript('assets/js/clipboard.min.js');

// ENABLE Clipboard.js module
new Clipboard('.btn-copy');

// SHOW "Lien copié!" message when clipboard.js button is clicked
$(".btn-copy").click(function () {

  // SHOW message
  $( ".flash-coppied > p" ).css("display","flex");

  // APPLY animation after 100ms
  setTimeout(function(){
    $( ".flash-coppied > p" ).addClass("p-animated");
  }, 100);

  // HIDE message
  setTimeout(function(){
    $(".flash-coppied > p").removeClass("p-animated");
    $(".flash-coppied > p").css("display", "none");
  }, 2000);

});
