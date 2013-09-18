(function ($) {
	"use strict";

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
	});

	$(document).on("scroll", function (event) {
		var scrollTop = $(document).scrollTop();

		if (scrollTop >= $(window).height() - 80) {
			$(".nav").addClass("head");
		} else {
			$(".nav").removeClass("head");
		}
	});

}(jQuery));
