'use strict';

/**
 * @ngdoc function
 * @name angularJsUiDirectivesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsUiDirectivesApp
 */
angular.module('angularJsUiDirectivesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.someFunction = function(string){
      alert('some function called!' + string );

    };

    $scope.doNotFire = function(){
      alert('should not see this');
    };
  });
