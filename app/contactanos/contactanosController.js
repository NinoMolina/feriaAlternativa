'use strict';

angular.module('contactanos', [])
.controller('ContactanosCtrl', ['$scope','$http',function($scope,$http) {
        $scope.result = 'hidden'
        $scope.resultMessage;
        $scope.formData; //formData is an object holding the name, email, subject, and message
        $scope.submitButtonDisabled = false;
        $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
        $scope.submit = function(contactform) {
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;
            if (contactform.$valid) {
                $http({
                    method: 'POST',
                    url: 'contact-form.php',
                    headers: {'Content-Type': 'application/json'},
                    data: $scope.formData
                }).success(function(data){
                    console.log(data);
                    if (data.success) { //success comes from the return json object
                        $scope.submitButtonDisabled = true;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-success';
                    } else {
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-danger';
                    }
                }).error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = 'El mensaje no fue enviado. No se pudo contactar con el servidor. ' + status;
                    $scope.result='bg-danger';
                });
            } else {
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
                $scope.result='bg-danger';
            }
        }
}]);
