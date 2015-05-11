'use strict';

angular.module('home', [])
.controller('HomeCtrl', ['$route','$templateCache', function($route,$templateCache) {

}])
.controller('CarouselDemoCtrl', function ($scope) {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [
            {
                image: '/img/home/carousel/1.jpg',
                text: 'Feria Alternativa'
            },
            {
                image: '/img/home/carousel/2.jpg',
                text: '2'
            },
            {
                image: '/img/home/carousel/3.jpg',
                text: '3'
            },
            {
                image: '/img/home/carousel/4.jpg',
                text: '4'
            },
            {
                image: '/img/home/carousel/5.jpg',
                text: '5'
            }
        ];
});