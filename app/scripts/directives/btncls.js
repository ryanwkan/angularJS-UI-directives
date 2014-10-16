'use strict';

/**
 * @ngdoc directive
 * @name angularJsUiDirectivesApp.directive:btnCls
 * @description
 * # btnCls
 */

/*global app:false */
app.directive('btnCls', function () {
    return {
      replace: true,
      template: '<div data-ng-click="confirmAction()"></div>',
      restrict: 'A',
      scope: {
        submit: '&',
        loadConfirm: '@',
        loadSpin: '@',
        loadText: '@',
        confirmText: '@',
        text: '@',
        confirmClass: '@',
        countdown: '@'
      },

      controller: function($scope, $element, $timeout, $interval){
        var confirmed = false,
            loadSpin = $scope.loadSpin,
            loadConfirm = $scope.loadConfirm,
            loadText = $scope.loadText,
            confirmText = $scope.confirmText,
            confirmClass = $scope.confirmClass,
            countdown = $scope.countdown,
            text = $scope.text;
        var timer;
        var interval;

        (function init(){
          loadSpin = loadSpin === undefined ? 'true' : loadSpin;
          loadConfirm = loadConfirm === undefined ? 'true' : loadConfirm;
          loadText = loadText === undefined ? 'Processing' : loadText;
          confirmText = confirmText === undefined ? 'confirm '+text+'?' : confirmText;
          confirmClass = confirmClass === undefined ? 'btn-danger' : confirmClass;
          countdown = countdown === undefined ? 'true' : countdown;
          text = text === undefined ? 'Submit' : text;

          $element.text(text);

        })();

        $scope.confirmAction = function(){

          if (confirmed === false){
            confirmed = true;
            $element.text(confirmText);
            var i = 5;
            interval = $interval(function(){
              if (countdown === 'true'){
                $element.text(confirmText + ' ... ' + i );
              }
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
            $interval.cancel(interval);
            $element.text(loadText).prepend('<i class="fa fa-circle-o-notch fa-spin"></i> ')
                .addClass('disabled')
                .removeClass(confirmClass);
            $scope.submit();
          }
        };

      }

//      link: function (scope, element, attrs) {
//        element.text(scope.text);
//      }
    };
  });
