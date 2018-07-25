$(document).ready(function() {

	//preloader
	$(window).on("load", function() {
		var $preloader = $("#preloader");
		$preloader.delay(250).fadeOut('slow');
	});

	var mainSlider = tns({
	    container: '.main-slider',
	    items: 1,
	    loop: false,
	    navAsThumbnails: true,
	    lazyload: true,
	    mouseDrag: true,
	    speed: 700,
	    controlsContainer: '.arrow-wrap',
	    autoplay: false,
	    autoplayTimeout: 2500,
	    autoplayButtonOutput: false,
	});

	$('.select').on('click',function(){
		$(this).toggleClass('is-open');
	}).on('click','ul>li',function(){
		var selected = $(this).text();
		var parent = $(this).closest('.select');
		parent.find('.placeholder').text(selected);
		parent.find('input[type=hidden]').attr('value', selected);
	});

	// Validate and submite form
	$("form").each(function() {
	    $(this).validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				password: {
					required: true,
					minlength: 5
				},
			},
			submitHandler: function(){
				alert('Спасибо за заявку, с вами свяжутся в ближайшее время!');
				var th = $(this);
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
	});
	
});
