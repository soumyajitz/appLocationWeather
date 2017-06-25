describe('filter functionalities', function() {
  var mockFilter;

  beforeEach(module('api-app'));
  beforeEach(inject(function($filter){
    mockFilter = function() {
        return $filter('fmtDate');
      };
  }));

// This filter extracts the first 10 letters of the string passed to it
  it('returns the correct value when given a string of chars', function() {
     var filter = mockFilter();
    expect(filter('abcdefghijklmnop')).to.equal('abcdefghij');
  });

// Filter returns null when input length is less than 10
  it('returns null when input length is less than 10', function() {
     var filter = mockFilter();
    expect(filter('abcdefg')).to.be.null;
  });
});