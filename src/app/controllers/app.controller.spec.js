describe('app controller functionalities', function() {
  var ctrl;
  var scope;
  var mockAppService;
  var $q;
  var $httpBackend;

  var appData = {
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

  beforeEach(inject(function(_$controller_,$rootScope, _$q_, _$httpBackend_) {
      scope = $rootScope.$new();
      $q = _$q_;
      $httpBackend = _$httpBackend_;
      var def = $q.defer();
      
      mockAppService = {
            getAllPhotos: function () {}
        };
    
      sinon.stub(mockAppService, 'getAllPhotos').returns(def.promise);
      def.resolve({data:[appData]});

     ctrl = _$controller_('appController',{
        $scope: scope,
        appService: mockAppService
     });
     
    $httpBackend.whenGET('https://jsonplaceholder.typicode.com/photos').respond(200, '');
  }));

    it('app controller is defined', function() {
        expect(ctrl).to.not.be.undefined;
    });

    it('calls service function from http call', function() {
        scope.$apply();
        expect(mockAppService.getAllPhotos).to.have.been.called;
    })
});