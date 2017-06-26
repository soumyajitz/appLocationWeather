module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha','chai','sinon'],
    files: [
       'bower_components/angular/angular.js',
	     'bower_components/angular-mocks/angular-mocks.js',
       'bower_components/angular-route/angular-route.js',
       'bower_components/angular-bootstrap/ui-bootstrap.js',
       'src/**/*.js',
       'src/**/*.spec.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
