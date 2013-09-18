(function ($) {
	"use strict";

	$(document).on("ready", function () {

	});

	$(".posone").on("click", function (event) {
		event.preventDefault();

		$(".nav").removeClass("head");
	});

	$(".postwo").on("click", function (event) {
		event.preventDefault();

		$(".nav").addClass("head");
	});


}(jQuery));
