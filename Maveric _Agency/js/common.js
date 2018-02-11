$(function() {

	//E-mail Ajax Send
	$(".credit-card").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// jQuery validatation
	jQuery.validator.addMethod("lettersonly", function(value, element) {
	  return this.optional(element) || /[A-Z]{0,1}[a-z]{1,15}( [A-Z]{0,1}[a-z]{1,15}){0,1}$/i.test(value);
	}, ""); 

	$(".credit-card").validate({
		rules: {
			card_number: {
				required: true,
				digits: true,
				rangelength: [4, 4]
			},

			name: {
				required: true,
				minlength: 4,
				lettersonly: true,
				digits: false
			},
			cvv: {
				required: true,
				digits: true,
				rangelength: [3, 3]
			}
		},
		focusCleanup: true
	});

	// sort
	$("#mixitup").mixItUp();
	$('#SortSelect').on('change', function(){
	    $("#mixitup").mixItUp('sort', this.value);
	 });

	// sticky menu
	$(document).on('scroll', function() {
		if ($(document).scrollTop()>10){
			$("header").addClass("sticky");
		} else { 
			$("header").removeClass("sticky");
		};
	});

	// Slider range
	var products_global = [];
	var products_stars_array =[]; 
	$(".products-item").each(function( index, value ){
		products_stars_array.push($(this).attr('data-myorder'));
	});
	$('.filter').on('click', function (){ 
		products_stars_array =[];
		cat = $(this).data("filter");
		if (cat != "all") {
			$(cat).each(function( index, value ){ 
				products_stars_array.push($(this).attr('data-myorder'));
				console.log(products_stars_array);
			});
		} else {
			$(".products-item").each(function( index, value ){
				products_stars_array.push($(this).attr('data-myorder'));
			});
		}
		products_global.array = products_stars_array;
		products_global.cat_p = cat;
	});

	$(function() {
	    $( "#slider-range" ).slider({
			range: true,
			min: 150,
			max: 8000,
			values: [ 160, 6100 ],	
			slide: function( event, ui ) {
				$( "#amount_1" ).val(ui.values[ 0 ] );
				$( "#amount_2" ).val(ui.values[ 1 ] );
			},
			change: function( event, ui ) {
				var from = (ui.values[0]);
				var to = (ui.values[1]);
				var products = products_stars_array;
				var cat = products_global.cat_p;
				for (var i = 0; i <= products.length-1; i++) {
					var el = $(".products-item[data-myorder='"+products[i]+"']");
						if (products[i] < from || products[i] > to) {
							$(el).fadeOut();
						} else {
							$(el).fadeIn();
						}
					// ЕСЛИ ВЫБРАНА КАТЕГОРИЯ
					if (cat != "all") {
						var el = $(cat).attr('data-myorder', products[i]);
						if (products[i] < from || products[i] > to) {
							$(el).fadeOut();
						} else {
							$(el).fadeIn();
						}
					}
				};
			}
		});
	    $( "#amount_1" ).val($( "#slider-range" ).slider( "values", 0 ));
	    $( "#amount_2" ).val($( "#slider-range" ).slider( "values", 1 ));
	});

	// accordion
	$( function() {	
	    $( "#accordion" ).accordion({
			icons: false,
			heightStyle: "content"
	    });
	    $("#accordion h3").click(function() {    	
	    	$("#accordion h3").find("span").text("+");
	    	$(this).find("span").text("-");
	    });
  	});

	// some click function
	$(".open-popup").click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).fadeIn();
		$('.bg-popup').fadeIn();
	});
	$('#see').click(function(){  
        $.ajax({  
            url: "text.txt",  
            cache: false,  
            success: function(html){  
                $("#ajax_text").html(html);  
            }  
        });  
    });  
	$(".bg-popup").click(function() {
		$(".bg-popup, .popup").hide();
	});

	$(".close-popup").click(function(){
		$(".popup, .bg-popup").hide();
	});

	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
	});

});
