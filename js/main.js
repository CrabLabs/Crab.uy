(function ($) {
	"use strict";

	var identyShowTemplate,
		webShowTemplate,
		identyTemplate,
		webTemplate;

	$(document).on("ready", function () {
		$("a[href*=#]").click(function() {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
				var targetOffset, $target = $(this.hash);
				$target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
				
				if ($target.length) {
					targetOffset = $target.offset().top;
					$("html, body").animate({
						scrollTop: targetOffset
					}, 1000);

					return false;
				}
			}
		});

		identyTemplate 		= Handlebars.compile($("#portfolio-ident-template").html());
		identyShowTemplate 	= Handlebars.compile($("#portfolio-ident-show-template").html());
		webTemplate 		= Handlebars.compile($("#portfolio-web-template").html());

		$(".ident").click();
	});

	$(document).on("scroll", function (event) {
		var scrollTop = $(document).scrollTop();

		$(".nav ul li").each(function (index) {
			if (index === Math.floor(scrollTop / ($(document).height() - 80) * 4)) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});

		if (scrollTop >= $(window).height() - 80) {
			$(".nav").addClass("head");
		} else {
			$(".nav").removeClass("head");
		}
	});

	$(".ident").on("click", function (event) {
		event.preventDefault();

		$(this).addClass("active");
		$(".web").removeClass("active");

		$("#portfolio_stage").fadeOut();
		$.getJSON("json/identity.json", function (data) {
			var html = identyTemplate(data);
			$("#portfolio_stage").html(html);
			$("#portfolio_stage").fadeIn();
		});
	});

	$(".web").on("click", function (event) {
		event.preventDefault();

		$(this).addClass("active");
		$(".ident").removeClass("active");

		$("#portfolio_stage").fadeOut();
		$.getJSON("json/web.json", function (data) {
			var html = webTemplate(data);
			$("#portfolio_stage").html(html);
			$("#portfolio_stage").fadeIn();
		});
	});

}(jQuery));
