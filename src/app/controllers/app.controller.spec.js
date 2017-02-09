describe('app controller functionalities', function() {
  var ctrl;
  var scope;
  var appService;
  var data = {
      photo1: {
        albumId: 1,
        id: 1,
        title: "photo1",
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/30ac17"
      },
      photo2:{
        albumId: 1,
        id: 2,
        title: "photo2",
        url: "http://placehold.it/600/771796",
        thumbnailUrl: "http://placehold.it/150/dff9f6"
      }
  };

   beforeEach(function () {
        angular.mock.module("api-app"); 
    });

  beforeEach(inject(function(_$controller_,$rootScope) {
      scope = $rootScope.$new();
      ctrl = _$controller_('appController',{$scope: scope});
  }));

    it('app controller is defined', function(){
        expect(ctrl).to.not.be.undefined;
    });
});