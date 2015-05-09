/**
 * Created by Nino on 24/04/2015.
 */

angular.module('myApp')
.controller('DropdownCtrl', function ($scope) {
    $scope.items = [
        'Ropa Bebes',
        'Ropa Niños',
        'Ropa Adultos',
        'Calzado Mujer',
        'Calzado Hombre',
        'Otros'
    ];

    $scope.status = {
        isopen: false
    };
}).controller('IndexCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.reload = function() {
        $window.location.href = '/';
    };
}]);
