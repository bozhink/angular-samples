(function (angular) {
    'use strict';
    var app = angular.module('helloworld', ['ui.router']);

    app.config(['$stateProvider', function ($stateProvider) {
        var helloState = {
                name: 'hello',
                url: '/hello',
                template: '<h3>Hello World!</h3>'
            },
            aboutState = {
                name: 'about',
                url: '/about',
                template: '<h3>Its the UI-Router hello world app!</h3>'
            };

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    }])
}(window.angular));