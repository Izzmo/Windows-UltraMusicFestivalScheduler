(function () {
  'use strict';

  var ControlConstructor = WinJS.UI.Pages.define('/pages/schedule/schedule.html', {
    ready: function (element, options) {
      options = options || {};
      this._data = WinJS.Binding.as({ });

      
      WinJS.Binding.processAll(element, this._data);
    },
  });
})();