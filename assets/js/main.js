(function ($) {

	"use strict";

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