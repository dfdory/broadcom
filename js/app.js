
/* App Module */
var nextibMarket = angular.module('nextibMarket',[
	'ngRoute',
	'nextibMarketCtrl'
]);

nextibMarket.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/health',{
        templateUrl: 'partials/health.html',
        controller: 'HealthCtrl'
      })
      .when('/education',{
        templateUrl: 'partials/education.html',
        controller: 'EducationCtrl'
      })
      .when('/entertainement',{
        templateUrl: 'partials/entertainement.html',
        controller: 'EntertainementCtrl'
      })
      .when('/technologies',{
        templateUrl: 'partials/technology.html',
        controller: 'TechnologyCtrl'
      })
      .when('/jobs',{
        templateUrl: 'partials/jobs.html',
        controller: 'JobsCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);