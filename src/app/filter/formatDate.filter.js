(function() {
    'use strict';

    angular.module('api-app')
        .filter('fmtDate', fmtDate);

    function fmtDate(){
        return function(input){ 
            if(input.length < 10) {
                return null;
            }
            else {
                return input.substr(0,10);
            }
        }
    }
})();