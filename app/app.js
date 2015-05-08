'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'home',
    'facebook',
    'dondeEstamos',
    'contactanos',
    'quienesSomos',
    'participa'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    }).when('/dondeEstamos', {
        templateUrl: 'dondeEstamos/dondeEstamos.html',
        controller: 'DondeEstamosCtrl'
    }).when('/contactanos', {
        templateUrl: 'contactanos/contactanos.html',
        controller: 'ContactanosCtrl'
    }).when('/quienesSomos', {
        templateUrl: 'quienesSomos/quienesSomos.html',
        controller: 'QuienesSomosCtrl'
    }).when('/participa', {
        templateUrl: 'participa/participa.html',
        controller: 'ParticipaCtrl'
    }).otherwise({redirectTo: '/home'});

}]);
