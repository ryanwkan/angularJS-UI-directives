'use strict';

/**
 * @ngdoc function
 * @name angularJsUiDirectivesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsUiDirectivesApp
 */
angular.module('angularJsUiDirectivesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
