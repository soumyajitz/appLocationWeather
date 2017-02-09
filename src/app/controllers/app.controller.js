(function(){
    'use strict';

    angular
        .module('api-app')
        .controller('appController', appController);

    appController.$inject = ['appService','$uibModal','$routeParams','$scope'];
    function appController(appService,$uibModal,$routeParams, $scope){
        var appVm = this;

        appVm.openModal = openModal;
        init();

        function init(){
            appService.getAllPhotos()
                .then(function(data){
                    appVm.data = data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        } 

        function openModal(id, title, thumbnailUrl) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/views/modalTemplate.html' ,
                controller: 'modalController',
                controllerAs: 'modalVm',
                resolve: {
                   param: function () {
                       return {'id':id,'title':title,'thumbnailUrl' : thumbnailUrl }
                   }
                }
            })
        }
    }
})();