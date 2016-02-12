(function () {
  'use strict';

  var ControlConstructor = WinJS.UI.Pages.define('/pages/lineup/lineup.html', {
    ready: function (element, options) {
      options = options || {};
      this._data = WinJS.Binding.as({ artists: options.artists });

      var lv = element.querySelector('#listView');
      lv.winControl.itemDataSource = this._data.artists.dataSource;

      element.querySelector('.splitView__lineup').style.height = (window.innerHeight - 16) + 'px';
      
      WinJS.Binding.processAll(element, this._data);
    },
  });

  // The following lines expose this control constructor as a global.
  // This lets you use the control as a declarative control inside the
  // data-win-control attribute.

  //WinJS.Namespace.define('Controls_PageControls', {
  //  LineupPageControl: ControlConstructor
  //});
})();