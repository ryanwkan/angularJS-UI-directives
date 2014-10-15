'use strict';

/**
 * @ngdoc directive
 * @name angularJsUiDirectivesApp.directive:btnCls
 * @description
 * # btnCls
 */
app.directive('btnCls', function () {
    return {
      replace: true,
      template: '<div ng-click="confirmAction()"></div>',
      restrict: 'A',
      scope: {
        submit: '&',
        loadConfirm: '@',
        loadSpin: '@',
        loadText: '@',
        confirmText: '@',
        text: '@',
        confirmClass: '@'
      },
      controller: function($scope, $element, $timeout, $interval){
        var confirmed = false,
            loadSpin = $scope.loadSpin,
            loadConfirm = $scope.loadConfirm,
            loadText = $scope.loadText,
            confirmText = $scope.confirmText,
            confirmClass = $scope.confirmClass,
            text = $scope.text;
        var timer;
        var interval;

        (function init(){
          loadSpin = loadSpin === undefined ? 'true' : loadSpin;
          loadConfirm = loadConfirm === undefined ? 'true' : loadConfirm;
          loadText = loadText === undefined ? 'Processing' : loadText;
          confirmText = confirmText === undefined ? 'Are you sure?' : confirmText;
          confirmClass = confirmClass === undefined ? 'btn-danger' : confirmClass;
          text = text === undefined ? 'Submit' : text;

          $element.text(text);
        })();

        $scope.confirmAction = function(){

          if (confirmed === false){
            confirmed = true;
            $element.text(confirmText);
            var i = 5;
            interval = $interval(function(){
              $element.text(confirmText + ' ... ' + i );
              i--;
            },1000);

            $element.addClass(confirmClass);

            timer = $timeout(function(){
              confirmed = false;
              $interval.cancel(interval);
              $element.text(text);
              $element.removeClass(confirmClass);
            },7000);
          }
          else{
            $timeout.cancel(timer);
            $element.text(loadText);
            $element.removeClass(confirmClass);
            $scope.submit();
          }
        };

        $scope.cancelAction = function(){
          alert('cancelled');
        }

      }

//      link: function (scope, element, attrs) {
//        element.text(scope.text);
//      }
    };
  });