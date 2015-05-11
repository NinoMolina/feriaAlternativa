'use strict';

angular.module('facebook', [])
.controller('FacebookCtrl', ['$scope',function($scope) {
        $scope.template = {url: '/facebook/facebook.html'};
        $scope.fbPage = 'https://www.facebook.com/instagram';

        // Are you familiar to IIFE ( http://bit.ly/iifewdb ) ?
        $scope.$on('$viewContentLoaded', function() {
            //loadFbSDK(document, $window.FB);
        });
}]);

var app = angular.module('myApp');
app.run(['$rootScope','$window', function($rootScope, $window) {

                $rootScope.user = {};

                $window.fbAsyncInit = function() {
                        // Executed when the SDK is loaded

                        FB.init({

                                /*
                                 The app id of the web app;
                                 To register a new app visit Facebook App Dashboard
                                 ( https://developers.facebook.com/apps/ )
                                 */

                                appId: '174931712664653',

                                /*
                                 Adding a Channel File improves the performance
                                 of the javascript SDK, by addressing issues
                                 with cross-domain communication in certain browsers.
                                 */

                                //channelUrl: 'app/channel.html',

                                /*
                                 Set if you want to check the authentication status
                                 at the start up of the app
                                 */

                                status: true,

                                /*
                                 Enable cookies to allow the server to access
                                 the session
                                 */

                                cookie: true,

                                /* Parse XFBML */

                                xfbml: true,

                                version: 'v2.3'
                        });

                };
                loadFbSDK(document, $window.FB);

        }
]);

var loadFbSDK = function(d, FB) {
    FB = null;
    var s = 'script';
    var id = 'facebook-jssdk';
    var js, fjs = d.getElementsByTagName(s)[0];
    //if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/es_LA/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
};
