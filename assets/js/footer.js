console

//open popup
$('.cdv').on('click', function(event){
	event.preventDefault();
	$('.cd-popup').addClass('is-visible');
});

//close popup
$('.cd-popup').on('click', function(event){
	if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
		event.preventDefault();
		$(this).removeClass('is-visible');
	}
});

//close popup when clicking the esc keyboard button
$(document).keyup(function(event){
  	if(event.which==='27'){
  		$('.cd-popup').removeClass('is-visible');
    }
  });


//open popup
$('.pdq').on('click', function(event){
	event.preventDefault();
	$('#cd-popup-politique').addClass('is-visible');
});

//close popup
$('#cd-popup-politique').on('click', function(event){
	if( $(event.target).is('.cd-popup-close') || $(event.target).is('#cd-popup-politique') ) {
		event.preventDefault();
		$(this).removeClass('is-visible');
	}
});

//close popup when clicking the esc keyboard button
$(document).keyup(function(event){
  	if(event.which==='27'){
  		$('#cd-popup-politique').removeClass('is-visible');
    }
});
