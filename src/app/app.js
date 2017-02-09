(function(){
    'use strict';

    angular
    .module("api-app", ['ngRoute','ui.bootstrap'])
    .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider','$locationProvider'];

    function moduleConfig($routeProvider, $locationProvider) {
         $routeProvider
            .when('/app',{
                templateUrl:'app/views/app.html',
                controller:'appController',
                controllerAs:'appVm'
            })
            .otherwise({
                redirectTo:'/app'
            })
            $locationProvider.hashPrefix('');
    }
})();