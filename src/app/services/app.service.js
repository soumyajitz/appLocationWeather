(function(){
    'use strict';

    angular
        .module('api-app')
        .service('appService', appService);

    appService.$inject = ['$http', '$q'];
    function appService($http, $q){
        var self = this;

        self.getAllPhotos = getAllPhotos;

        function getAllPhotos() {
            return $http.get("https://jsonplaceholder.typicode.com/photos")
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