(function(){
    'use strict';

    angular
        .module('api-app')
        .controller('modalController', modalController);

    modalController.$inject = ['appService','$uibModal','$routeParams','$scope', 'param'];
    function modalController(appService,$uibModal,$routeParams,$scope, param){
        var modalVm = this;
        
        modalVm.id = param.id;
        modalVm.title = param.title;
        modalVm.thumbnailUrl = param.thumbnailUrl;
        modalVm.addDescription = addDescription;
        modalVm.description = localStorage.getItem(modalVm.id);


        function addDescription(id,description) {
            localStorage.setItem(id,description);
            $scope.description ='';
            modalVm.description = localStorage.getItem(id);
        }
    }
})();