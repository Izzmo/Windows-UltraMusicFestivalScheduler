(function () {
  'use strict';

  function resizeSitemap() {
    var sitemap = document.querySelector('#sitemap');
    if(sitemap === null) return;
    sitemap.style.height = (window.innerHeight - 50) + 'px';

  }

  var ControlConstructor = WinJS.UI.Pages.define('/pages/sitemap/sitemap.html', {
    ready: function (element, options) {
      options = options || {};
      this._data = WinJS.Binding.as({ });

      window.addEventListener('resize', resizeSitemap);
      resizeSitemap();
            
      WinJS.Binding.processAll(element, this._data);
    },
  });
})();