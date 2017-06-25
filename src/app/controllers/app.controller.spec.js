describe('app controller functionalities', function() {
  var appController;
  var scope;

    beforeEach(function () {
            angular.mock.module("api-app"); 
        });

    beforeEach(inject(function(_$controller_,$rootScope) {
        scope = $rootScope.$new();

        appController = _$controller_('appController',{
            $scope: scope,
        });
        
    }));

    it('app controller should exist', function() {
        expect(appController).to.exist;
    });

    it('calls init() at first', function() {
        expect(appController.init()).to.have.been.called;
    });

    it('calls getCityWeather() function', function() {
        expect(appController.getCityWeather()).to.have.been.called;
    });
});