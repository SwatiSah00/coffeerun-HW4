(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment='form']";
  var TO_WORK_ON_DIV = "[data-onsubmit-pop='Thank']";
  var App = window.App;
  var PaymentHandler = App.PaymentHandler;
  var formHandler = new PaymentHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(TO_WORK_ON_DIV);
})(window);
