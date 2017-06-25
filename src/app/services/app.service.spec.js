describe('app service', function() {
    var $httpBackend;
    var mockFiveDayWeather = {
        day1: '81 degree',
        day2: '82 degree',
        day3: '82 degree',
        day4: '84 degree',
        day5: '85 degree'
    }

    beforeEach(module('api-app'));
    beforeEach(inject(function($injector, _$httpBackend_){
            $httpBackend = _$httpBackend_;
            appService = $injector.get('appService');
    }));

    it('should have a working app service', function() {
        expect(appService).to.exist;
    }); 

    it('should get response back with Chicago weather', function () {
         var cityname = 'Chicago';

        $httpBackend.expectGET("http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&units=imperial&appid=643f29f9c1cd09638088516d79ecc152")
            .respond('80 degree');

        appService.getCurrentWeather(cityname).then(function(data) {
            expect(data).to.equal('80 degree');
        });
    });

    it('should get response back with 60661 zip weather', function () {
        $httpBackend.expectGET("http://api.openweathermap.org/data/2.5/forecast?zip=60661,us&units=imperial&appid=643f29f9c1cd09638088516d79ecc152")
            .respond('81 degree');

        appService.getCityZipWeather().then(function(data) {
            expect(data).to.equal('81 degree');
        });
    });

     it('should get response back with 5-day weather', function () {
        var cityname = 'Chicago';

        $httpBackend.expectGET("http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&units=imperial&appid=643f29f9c1cd09638088516d79ecc152")
            .respond(mockFiveDayWeather);

        appService.getFiveDayWeather(cityname).then(function(data) {
            expect(data.day1).to.equal('81 degree');
            expect(data.day2).to.equal('82 degree');
            expect(data.day3).to.equal('83 degree');
            expect(data.day4).to.equal('84 degree');
            expect(data.day5).to.equal('85 degree');
        });
    });

    it('should get give 404 when incorrect cityname is entered', function () {
         var cityname = 'abcdefghij';

        $httpBackend.expectGET("http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&units=imperial&appid=643f29f9c1cd09638088516d79ecc152")
            .respond(404,'Not Found');

        appService.getCurrentWeather(cityname).then(function(data,error) {
            expect(error).to.equal('404');
        });
    });

});