'use strict';

angular.module('facebook', [])
.controller('FacebookCtrl', ['$scope',function($scope) {
        //$scope.template = {url: '/facebook/facebook.html?r=' + window.Math.random()};
        $scope.template = {url: '/facebook/facebook.html'};
        loadFacebookSdk(document, 'script', 'facebook-jssdk');
}]);

var loadFacebookSdk = function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.3&appId=174931712664653";
        fjs.parentNode.insertBefore(js, fjs);
};

