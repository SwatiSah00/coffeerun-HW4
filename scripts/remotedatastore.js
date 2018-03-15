(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    // Code will go here
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    // Code will go here
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    //$.get(this.serverUrl + "/" + key, function(serverResponse) {
    $.get(this.serverUrl + "?emailAddress=" + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };


  //get that id on click
  RemoteDataStore.prototype.remove = function(key) {
    this.get(key, function(x) {
      var ans = x[0]["id"];
      console.log(ans);
      $.ajax(this.serverUrl + "/" + ans, {
        type: "DELETE"
      });
    }.bind(this));
    /*$.ajax(this.serverUrl + "/" + key, {
      type: "DELETE"
    });*/
  };

  /*RemoteDataStore.prototype.remove = function(key) {
    $.ajax(this.serverUrl + "/" + key, {
      type: "DELETE",
      success: function(response) {
        var obj = JSON.parse(json);
        console.log(obj[0]["id"]);
      }
    });
  };*/

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
