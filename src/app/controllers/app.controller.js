(function(){
    'use strict';

    angular
        .module('api-app')
        .controller('appController', appController);

    appController.$inject = ['appService','$scope'];
    function appController(appService, $scope){
        var appVm = this;

        appVm.getCityWeather = getCityWeather;
        appVm.flag = false;

        init();

        function init() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } 
        }

        function showError(error) {
           if(error.code == error.PERMISSION_DENIED) {
               appService.getCityZipWeather()
                    .then(function(data){
                        appVm.zip = true;
                        appVm.currentData = data;
                    })
                    .catch(function (error) {
                        appVm.flag = false;
                        console.log(error);
                })
           }
        }

        function showPosition(position) {
                appService.getCoords(position.coords.latitude, position.coords.longitude)
                    .then(function(data){
                        appVm.nav = true;
                        appVm.currentData = data;
                    })
                     .catch(function (error) {
                        appVm.flag = false;
                        console.log(error);
                })
        }

        function getCityWeather(){
            if($scope.city) {
                appService.getCurrentWeather($scope.city)
                    .then(function(data){
                        appVm.flag = true;
                        appVm.currentData = data;
                    })
                    .catch(function (error) {
                        appVm.flag = false;
                        console.log(error);
                    })

                appService.getFiveDayWeather($scope.city)
                    .then(function(data){
                        appVm.flag = true;
                        appVm.data = data.list;
                        appVm.city = data.city;
                    })
                    .catch(function (error) {
                        appVm.flag = false;
                        console.log(error);
                    })
            } 
        } 
    }
})();