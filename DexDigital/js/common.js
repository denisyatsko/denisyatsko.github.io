$(document).ready(function() {

	// show toggle-menu 
	$(".toggle-menu").click(function(){
		$(this).toggleClass("on");
		$("body").toggleClass("overflow-body");
	});

	// Dropwown select in form
	$('.select').on('click',function(){	
		$('.select').not(this).removeClass('on');
		$(this).toggleClass('on');
	}).on('click','ul>li',function(){
		var selected = $(this).text();
		var parent = $(this).closest('.select');
		parent.find('.placeholder-text').text(selected);
		parent.find('input[type=hidden]').attr('value', selected);
	});

	// count
	var count = $('#count').text();

	function decrement() {
		if (count > 1) {
			var newNumber = +count - 1;
			$('#count').text(newNumber);
			$('#page').attr('value', newNumber);
			return count = newNumber;
		}
	}

	function increment() {
		var newNumber = +count + 1;
		$('#count').text(newNumber);
		$('#page').attr('value', newNumber);
		return count = newNumber;
	}

	$('#decrement').on('click', decrement);
	$('#increment').on('click', increment);

	// preloader
	$(window).on('load', function() {
		var $preloader = $('#preloader');
		$preloader.delay(250).fadeOut('slow');
	});

	// toTop
	$(window).scroll(function() {
		var windowHeight = $(window).height();
		if ($(this).scrollTop() > windowHeight) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 800);
	});

	// Validate and submite form
    $('#form').validate({
    	ignore: [],
    	errorPlacement: function(error, element) {},
		rules: {
			type: {
				required: true
			},
			university: {
				required: true
			},
			day: {
				required: true
			},
			name: {
				required: true
			}
		},
		submitHandler: function(form){
			alert('Данные получены и выведены в консоль!');
			$.ajax({
				type: 'POST',
				url: 'mail.php',
				data: $(form).serialize(),
				success: function(response) { //Данные отправлены успешно
		        	result = $.parseJSON(response);
		        	for (var key in result) {
					    console.log( JSON.stringify(result) );
						};
		    	},
			}).done(function() {
				setTimeout(function() {
					$(form).trigger('reset');
				}, 1000);
			});
			return false;
		}
	});

});
