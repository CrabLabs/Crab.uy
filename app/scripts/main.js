require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        handlebars: 'vendor/handlebars'
    },
    shim: {
    	handlebars: {
    		exports: 'Handlebars'
    	}
    }
});

require(['app', 'jquery', 'handlebars'], function (app, $, Handlebars) {
    'use strict';
    
});
