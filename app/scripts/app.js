/*global define */
define(['handlebars'], function (Handlebars) {
    'use strict';

    /*var identyShowTemplate = Handlebars.compile($('#portfolio-ident-show-template').html()),
		webShowTemplate,
		identyTemplate = Handlebars.compile($('#portfolio-ident-template').html()),
		webTemplate = Handlebars.compile($('#portfolio-web-template').html());

	setTimeout(function () {
		$('.web').trigger('click');
	}, 200);*/

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

	(function () {
		var i = 0,
			$images = $('#portfolio_stage img'),
			belongsTo = '.web',
			removeTo  = '.ident';

		$images.each(function (index) {
			$('<li />').appendTo($('#portfolio_stage_nav'));
		});

		$(document).on('click', '#portfolio_stage_nav li', function (event) {
			slide($(this).index());
		});

		slide(i);

		function slide (i) {
			$('#portfolio_stage_nav .active').removeClass('active');
			$('#portfolio_stage_nav li').eq(i).addClass('active');
			belongsTo = $images.eq(i).attr('data-belongsTo');
			removeTo  = (belongsTo === '.web') ? '.ident' : '.web';
			$(belongsTo).addClass('active');
			$(removeTo).removeClass('active');
			
			$('#portfolio_title').text($images.eq(i).attr('alt')).addClass('visible').delay(15000).removeClass('visible');
			
			$images.eq(i).addClass('visible').delay(15000).queue(function (next) {
				$(this).removeClass('visible')
				i = (i + 1 < $images.length) ? i + 1 : 0;
				next();
				slide(i);
			});
			
		};
	}());

	/*$('.ident').on('click', function (event) {
		event.preventDefault();

		$(this).addClass('active');
		$('.web').removeClass('active');

		$('#portfolio_stage').stop(true, true).fadeOut(255, function () {
			$.getJSON('json/identity.json', function (data) {
				var html = identyTemplate(data);
				$('#portfolio_stage').html(html);
				$('#portfolio_stage').fadeIn();
			});
		});
	});

	$('.web').on('click', function (event) {
		event.preventDefault();

		$(this).addClass('active');
		$('.ident').removeClass('active');

		$('#portfolio_stage').stop(true, true).fadeOut(255, function () {
			$.getJSON('json/web.json', function (data) {
				var html = webTemplate(data);
				$('#portfolio_stage').html(html);
				$('#portfolio_stage').fadeIn();
			});
		});
	});

	$(document).on('click', '.portfolio_ident_project', function (event) {
		var id = $(this).data('id');
		event.preventDefault();

		$('#portfolio_stage').stop(true, true).fadeOut(255, function () {
			$.getJSON('json/identities/' + id + '.json', function (data) {
				var html = identyShowTemplate(data);
				$('#portfolio_stage').html(html);
				$('#portfolio_stage').fadeIn();
			});
		});
	});*/

});