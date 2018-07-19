$(document).ready(function() {

	new WOW().init()

	// preloader
	$(window).on("load", function() {
		var $preloader = $("#preloader");
		$preloader.delay(250).fadeOut('slow');
	});

	// toggle-menu
	$('.toggle-menu').click(function(){
		$(this).toggleClass('on');
		$('body').toggleClass('overflow-body');
		$('.main-footer').toggleClass('fixed-footer');
		$('#main-menu').slideToggle().css({'display':'flex'});
	});

	$('.form-group input[type="text"], input[type="email"]').focus(function(){
		$(this).prev().fadeIn(600);
	});

	$('.form-group input[type="text"], input[type="email"]').focusout(function(){
		$(this).prev().fadeOut(600);
	});

	jQuery.validator.addMethod("lettersonly", function(value, element) {
	  return this.optional(element) || /^[a-z]+$/i.test(value);
	}, "Letters only please");

	// Validate and submite form
    $('#form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				lettersonly: true
			},
			email: {
				required: true,
				email: true,
			},
			adult: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Too short name",
				minlength: "Too short name"
			},
			adult: {
				required: "Это поле обязательно для заполнения"
			},
			email: {
				required: "Wrong email"
			}
		},
		focusCleanup: true,
		focusInvalid: false,
		// submitHandler: function(form){
		// 	$('#popup, .overflow').css({'display':'flex'});
		// 	if ($(window).width() < 768) {
		// 		$('.main-footer').toggleClass('fixed-footer');
		// 		$('body').toggleClass('overflow-body');
		// 		$('html, body').animate({ scrollTop: 0 }, 200);
		// 	}
		// 	var th = $('#form');
		// 		$.ajax({
		// 			type: "POST",
		// 			url: "mail.php",
		// 			data: th.serialize()
		// 		}).done(function() {
		// 			setTimeout(function() {
		// 				th.trigger("reset");
		// 			}, 1000);
		// 		});
		// 	return false;
		// }
		submitHandler: function(){
			alert('Спасибо за заявку, теперь вы подписаны на новости!');
			// $(".popup, .overflow, label.error").hide();
			// $("body").removeClass("overflow-body");
			var th = $("#form");
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: th.serialize()
				}).done(function() {
					setTimeout(function() {
						th.trigger("reset");
					}, 1000);
				});
			return false;
		}
	});
	
	$(".overflow").click(function(){
		$(this).hide();
		$('#popup, .overflow').hide();
		$('body').removeClass('overflow-body');
	});

	$('.close-wrapper').click(function(){
		$('#popup, .overflow').hide();
		$('body').removeClass('overflow-body');
	});

	// show popup
	$(".btn-popup").click(function(){
		var popupWindow = $("#"+ $(this).attr('rel'));
		popupWindow.show();
		$(".overflow").show();
		$("body").addClass("overflow-body");
	});

});
