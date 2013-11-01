/*globals define*/
define(['jquery'], function ($) {
    'use strict';

    $.fn.slider = function () {
        var i,
            $images,
            current = 0,
            belongsTo = '.web',
            removeTo  = '.indent';

        var goTo = function (i) {
            current = i;
            $images.removeClass('visible');
            $('#portfolio_stage_nav .active').removeClass('active');
            $('#portfolio_stage_nav li').eq(i).addClass('active');
            belongsTo = $images.eq(i).attr('data-belongsTo');
            removeTo  = (belongsTo === '.web') ? '.ident' : '.web';
            $(belongsTo).addClass('active');
            $(removeTo).removeClass('active');

            $('#portfolio_title').text($images.eq(i).attr('alt')).addClass('visible').delay(15000).removeClass('visible');

            $images.eq(i).addClass('visible').delay(15000).queue(function (next) {
                $(this).removeClass('visible')
                next();
                goNext();
            });
        };

        var goNext = function () {
            i = (current + 1 < $images.length) ? current + 1 : 0;
            goTo(i);
        };

        var init = function (self) {
            $images   = self.children('img'),
            belongsTo = '.web',
            removeTo  = '.ident';
            i = 0;

            $images.each(function (index) {
                $('<li />').html('&bull;').appendTo($('#portfolio_stage_nav'));
            });
            $(document).on('click', '#portfolio_stage_nav li', function (event) {
                goTo($(this).index());
            });
            $(document).on('click', '.web', function (event) {
                event.preventDefault();
                goTo(0);
            });
            $(document).on('click', '.ident', function (event) {
                event.preventDefault();
                goTo(3);
            });

            goTo(0);
        };

        init(this);

    };

    return $.fn.slider;
});
