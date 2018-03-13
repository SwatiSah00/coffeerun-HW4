(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function formHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }
  formHandler.prototype.addSubmitHandler = function(TO_WORK_ON_DIV) {
    console.log("Setting submit handler for form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      this.$element = $(TO_WORK_ON_DIV);
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
        //console.log("data[title] : " + data["title"]);
        //console.log("data[username] : " + data["username"]);
      });
      //console.log(data);
      //this.reset();

      //function msg_div(msg) {
      // Constructor code will go here
      var $div = $("<div></div>", {
        "id": "msg_ind",
        "class": "modal",
        "modal": "open"
      });

      //var $label = $("<label></label>");

      //var description = "Thank you for your payment," + data["title"] + " " + data["username"];

      //$label.append(description);
      $div.append("<p>Thank you for your payment, " + data["title"] + " " + data["username"] + "</p>")
        .append("<a rel=\"modal:close\" class=\"close-modal\">Close</a>");

      this.$element.append($div);
      //  }

    });
  };
  App.PaymentHandler = formHandler;
  window.App = App;
})(window);
