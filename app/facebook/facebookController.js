'use strict';


angular.module('facebook', [])
.controller('FacebookCtrl', ['$scope','$window','$timeout',function($scope,$window,$timeout) {
        $scope.template = {url: '/facebook/facebook.html'};
        $scope.fbPage = 'https://www.facebook.com/instagram';

        var attempts = 0;
        var maxAttempts = 10;

        $scope.reloadFB = function() {
            if(typeof $window.FB == "undefined") {
                if(attempts < maxAttempts) {
                    $timeout( function(){ $scope.reloadFB(); }, 3000);
                    attempts++;
                }
                return;
            }
            var fbpage = document.getElementsByClassName('fb-page')[0];
            if(typeof fbpage != "undefined"){
                $window.FB.XFBML.parse(fbpage);
                $window.FB._initialized = false;
                $window.FB.init({
                    appId: '174931712664653',
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.3'
                });
            }
        };

}]);

(function(d, FB) {
    FB = null;
    var s = 'script';
    var id = 'facebook-jssdk';
    var js, fjs = d.getElementsByTagName(s)[0];
    //if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.async = false;
    js.src = "//connect.facebook.net/es_LA/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, window.FB));
