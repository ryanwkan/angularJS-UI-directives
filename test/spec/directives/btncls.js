'use strict';

describe('Directive: btnCls', function(){
  var $scope, $compile, timeout, stubMyFunction;

  beforeEach(module('angularJsUiDirectivesApp'));

  beforeEach(inject(function(_$compile_, _$rootScope_, $injector){
    $scope = _$rootScope_;
    $compile = _$compile_;

    timeout = $injector.get('$timeout');
    stubMyFunction = sinon.stub();

    $scope.myFunction = stubMyFunction();

  }));

  describe('button', function(){
    var compileButton = function(markup, scope){
      var el = $compile(markup)(scope);
      scope.$digest();
      return el;
    };

    it('should work with no optionals', function(){
      var btn = compileButton('<button class="btn btn-primary" data-btn-cls data-submit="myFunction(1)"></button>', $scope);
      expect((btn).text()).toBe('Submit');
      btn.triggerHandler('click');
      expect((btn).text()).toContain('Confirm');
      timeout.flush(7000);
      expect((btn).text() ).toBe('Submit');
      btn.triggerHandler('click');
      expect((btn).text()).toContain('Confirm');
      btn.triggerHandler('click');
      expect((btn).text()).toContain('Processing');

      expect(stubMyFunction.called).toBe(true);

    });

//    it('should bind correctly to data-submit function', function(){
//      var btn = compileButton('<button class="btn btn-primary" data-btn-cls data-submit="myFunction()"></button>', $scope);
//
//      btn.triggerHandler('Click');
//      console.log(btn);
//      expect(stubConfirmAction.called ).toBe(true);
//      expect((btn).text() ).toContain('Confirm submit?');
//    });



  });
});