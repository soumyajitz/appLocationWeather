(function(){
    'use strict';

    angular
        .module('api-app')
        .service('appService', appService);

    appService.$inject = ['$http', '$q'];
    function appService($http, $q){
        var self = this;

        self.getCurrentWeather = getCurrentWeather;
        self.getFiveDayWeather = getFiveDayWeather;
        self.getCityZipWeather = getCityZipWeather;
        self.getCoords = getCoords;

        function getCurrentWeather(cityname) {
            return $http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=imperial&appid=643f29f9c1cd09638088516d79ecc152")
                .then(successFn, errorFn);
        }

        function getFiveDayWeather(cityname) {
            return $http.get("http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&units=imperial&appid=643f29f9c1cd09638088516d79ecc152")
                .then(successFn, errorFn);
        }

        function getCityZipWeather() {
            return $http.get("http://api.openweathermap.org/data/2.5/weather?zip=60661,us&units=imperial&appid=643f29f9c1cd09638088516d79ecc152")
                .then(successFn, errorFn);
        }

        function getCoords(lat,lon) {
             return $http.get("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&appid=643f29f9c1cd09638088516d79ecc152")
                .then(successFn, errorFn);
        }

        function successFn(response) {
            return $q.resolve(response.data);
        }

        function errorFn(response) {
            return $q.reject(response.status);
        }
    }
})();