/****************************************************/
/* 2. Slide-In Nav */
/****************************************************/

$(window).load(function() {
	$(".nav_slide_button").click(function() {
		$(".pull").slideToggle();
	});
});

/****************************************************/
/* 3. Project-Entry jQuery Easing Hover State */
/****************************************************/

$(function() {
	$('.project-entry').showFeatureText();
});

$.fn.showFeatureText = function() {
	return this.each(function() {
		var box = $(this);
		var text = $('h2', this);

		text.css({position: 'absolute'}).hide();

		box.hoverIntent(function() {
			text.slideDown(1000, 'easeOutBounce');
		}, function() {
			text.slideUp(700, 'easeOutSine');
		});
	});
};

/****************************************************/
/* 4. Smooth Scrolling */
/****************************************************/

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});
});

/****************************************************/
/* 5. Show/Hide the Up Arrow */
/****************************************************/

$(window).scroll(function() {
	if ($(this).scrollTop() > 1000) {
		$('.go-top').fadeIn(200);
	} else {
		$('.go-top').fadeOut(200);
	}
});

/****************************************************/
/* 6. Waypoints */
/****************************************************/

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInLeft');
	}, {
		offset: '50%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInRight');
	}, {
		offset: '50%'
	});
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInLeft');
	}, {
		offset: '50%'
	});
	$('.wp8').waypoint(function() {
		$('.wp8').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	$('.wp9').waypoint(function() {
		$('.wp9').addClass('animated fadeInRight');
	}, {
		offset: '50%'
	});
	$('.wp10').waypoint(function() {
		$('.wp10').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp11').waypoint(function() {
		$('.wp11').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp12').waypoint(function() {
		$('.wp12').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp13').waypoint(function() {
		$('.wp13').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
});

/****************************************************/
/* 7. Floating Navbar */
/****************************************************/

$(document).ready(function() {
	$('nav#float').css({display: 'none', opacity: 0});
	$(window).scroll(updateFloatingNav);
	updateFloatingNav();
});

function updateFloatingNav() {

	var scrollTop = $(window).scrollTop();
	var scrollMargin = 1000;

	if (scrollTop > scrollMargin && !$('nav#float').hasClass('visible')) {
		$('nav#float').addClass('visible').show().stop().animate({opacity: 1}, 200);
	} else if (scrollTop < scrollMargin && $('nav#float').hasClass('visible')) {
		$('nav#float').removeClass('visible').stop().animate({opacity: 0}, 200, function() {
			$(this).hide();
		});
	}
}