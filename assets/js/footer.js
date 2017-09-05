
// STICKY NAV MENU
$("nav").sticky({
	zIndex:9999
});

$('nav').on('sticky-start', function() {
	$("nav").toggleClass("sticky");
});

$('nav').on('sticky-end', function() {
	$("nav").toggleClass("sticky");
});

// "Conditions de vente" POPUP
// OPEN popup
$('.cdv').on('click', function(event){
	event.preventDefault();
	$('.cd-popup').addClass('is-visible');
});

// CLOSE popup
$('.cd-popup').on('click', function(event){
	if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
		event.preventDefault();
		$(this).removeClass('is-visible');
	}
});

// CLOSE popup when clicking the "esc" keyboard button
$(document).keyup(function(event){
  	if(event.which === 27){
  		$('.cd-popup').removeClass('is-visible');
    }
  });


// "Politique de confidentialité" POPUP
// OPEN popup
$('.pdq').on('click', function(event){
	event.preventDefault();
	$('#cd-popup-politique').addClass('is-visible');
});

// CLOSE popup
$('#cd-popup-politique').on('click', function(event){
	if( $(event.target).is('.cd-popup-close') || $(event.target).is('#cd-popup-politique') ) {
		event.preventDefault();
		$(this).removeClass('is-visible');
	}
});

// CLOSE popup when clicking the "esc" keyboard button
$(document).keyup(function(event){
  	if(event.which === 27){
  		$('#cd-popup-politique').removeClass('is-visible');
    }
});
