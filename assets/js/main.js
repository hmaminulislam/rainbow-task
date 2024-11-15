(function ($) {

	"use strict";


	window.addEventListener('load', function(){

		// hero-1 animation 
		const ct_hero_1_anim_1 = gsap.timeline(
			{
				scrollTrigger: {
					trigger: ".rb-hero-1-banner-wrap",
					scrub: 1,
					start: "top 200%",
					end: "bottom bottom",
					toggleClass: "active",
					toggleActions: "play none none reverse",
					once: true,
				}
			}
		);


	})



	// active class added 
	const boxWrap = gsap.utils.toArray('.rb-class-add');
	boxWrap.forEach(item => {
		gsap.to(item, {
			scrollTrigger: {
				trigger: item,
				scrub: 1,
				start: "top 80%",
				end: "bottom bottom",
				toggleClass: "active",
				toggleActions: "play none none reverse",
				once: true,
			}
		});
	});




	// experience card hover active toggle 
	let exper1_active_item = $(".rb-about-1-counter-item");
  
    exper1_active_item.mouseover(function () {
		exper1_active_item.removeClass("active");
      	$(this).addClass("active");
    });




	// gsap scroll-trigger register 
	gsap.registerPlugin(ScrollTrigger) 

	// services-1 card sticky animatin start  
	if(window.innerWidth> 1199){

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.rb-services-1-wrap',
				pin: true,
				start: 'top 0%',
				end: 'top 40%',
				scrub: 1,
			}
		});

		tl
		.to(".rb_ser1_card_1", {scale: 0.862, duration: 0.3, transformOrigin: "top"})
		.to(".rb_ser1_card_2", {scale: 0.896, duration: 0.3, transformOrigin: "top",})
		.to(".rb_ser1_card_3", {scale: 0.943, duration: 0.3, transformOrigin: "top"})
		.to(".rb_ser1_card_4", {scale: 0.986, duration: 0.3, transformOrigin: "top"})

	}

	// services-1 card sticky animatin start 




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



	// testimonial-1 slider start

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

	// testimonial-1 slider end



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