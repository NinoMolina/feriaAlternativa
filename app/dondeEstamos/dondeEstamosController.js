'use strict';

angular.module('dondeEstamos', ['uiGmapgoogle-maps'])
.controller('DondeEstamosCtrl', ['$scope', function($scope) {
    $scope.map = {
        center: {latitude: -30.974616, longitude: -64.088573},
        zoom: 15
    };
    $scope.options = {
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    $scope.marker = {
        id: 0,
        coords: {
            latitude: -30.974616,
            longitude: -64.088573
        },
        options: {
            draggable: false
        },
        events: {}
    };

    $scope.infoWindow = {
        title: 'Feria Altenativa',
        desc: 'Ramon J. Carcano 285',
        show: true,
        windowOptions: {
            visible: true
        }
    };

    $scope.onClick = function() {
        $scope.infoWindow.windowOptions.visible = !$scope.infoWindow.windowOptions.visible;
    };

    $scope.closeClick = function() {
        $scope.infoWindow.windowOptions.visible = false;
    };
}]);

