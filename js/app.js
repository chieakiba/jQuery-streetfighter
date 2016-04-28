$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		//play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
		{'left': '1051px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '551px');
		}
	);
	//show hadouken and animate it to the right of the screen
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to his ready position
	})
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

$(document).on('keydown', function(e) {
		if (e.keyCode === 88) {
			$('.ryu-still').hide();
			$('.ryu-cool').show();		
		}
	})
	.on('keyup', function(e) {
		if (e.keyCode === 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});