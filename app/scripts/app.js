/*global define */
define(['slider'], function (slider) {
    'use strict';

    $('#portfolio_stage').slider();

	$(document).on('scroll', function (event) {
		var scrollTop = $(document).scrollTop(),
			scrollMod = scrollTop / ($(document).height() - 80) * 4;

		$('.nav ul li').each(function (index) {
			if (index === Math.floor(scrollMod)) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});

		if (scrollTop >= $(window).height() - 80) {
			$('.nav').addClass('head');

			$('#logo').css('top', scrollTop * - 1.5);
		} else {
			$('.nav').removeClass('head');

			$('#home').css('background-position-y', scrollTop / 2);
			$('#canvas').css('opacity', Math.abs(scrollMod - 1));
		}
	});

	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//, ') == this.pathname.replace(/^\//, ') && location.hostname == this.hostname) {
			var targetOffset, $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			
			if ($target.length) {
				targetOffset = $target.offset().top;
				$('html, body').animate({
					scrollTop: targetOffset
				}, 1000);

				return false;
			}
		}
	});

});
