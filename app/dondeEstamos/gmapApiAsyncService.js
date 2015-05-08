'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp');
app.service('gmapApiAsyncService', function lazyLoadApi($window, $q) {
    function loadScript() {
        // use global document since Angular's $document is weak
        var s = document.createElement('script');
        s.src = '//maps.googleapis.com/maps/api/js?sensor=false';
        document.body.appendChild(s);
    };
    var deferred = $q.defer();

    $window.initMap = function () {
        deferred.resolve()
    };

    if ($window.attachEvent) {
        $window.attachEvent('onload', loadScript)
    } else {
        $window.addEventListener('load', loadScript, false)
    }

    return deferred.promise;
});