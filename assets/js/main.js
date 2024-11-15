(function ($) {

	"use strict";


	// work-1 slider start

	let rbWork1Slider = new Swiper('.rb-work-1-slider', {
		loop: true,
		speed: 1000,
		spaceBetween: 0,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: ".rb-work-1-next",
			prevEl: ".rb-work-1-prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},
			1800: {
				slidesPerView: 3,
			},
		}
	});


	// work-1 slider end




	// work-1 slider start

	let rbTestimonial1Slider = new Swiper('.rb-testimonial-1-slider', {
		loop: true,
		speed: 1000,
		spaceBetween: 80,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		},

		navigation: {
			nextEl: ".rb-testimonial-1-next",
			prevEl: ".rb-testimonial-1-prev",
		},
	});


	// work-1 slider end





	// nice-select activation start
	
	$('.nice-select select').niceSelect();

	// nice-select activation end
	
	



	// background img activation start

	$("[data-background]").each(function(){
		$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
	})

	// background img activation end

	// popup start

	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// popup end


	// counter start

	$('.rb-counter-1').counterUp({
		delay: 10,
		time: 3000
	}); 

	// counter end


	// marquee start 

	$('.rb-marquee-1').marquee({
		speed: 80,
		gap: 30,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	})

	// marquee end


})
(jQuery);