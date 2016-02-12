(function () {
  'use strict';

  var app = WinJS.Application;
  var activation = Windows.ApplicationModel.Activation;

  app.onactivated = function (args) {
    if (args.detail.kind === activation.ActivationKind.launch) {
      if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
        // TODO: This application has been newly launched. Initialize your application here.
      } else {
        // TODO: This application was suspended and then terminated.
        // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
      }
      args.setPromise(WinJS.UI.processAll());
    }
  };

  app.oncheckpoint = function (args) {
    // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
    // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
    // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
  };


  var artists = [
    new Artist('Afrojack', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Armin Van Buuren', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Avicii', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Caribou', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Carl Cox', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Chet Faker', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('David Guetta', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Destroid', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Dubfire', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Eric Prydz', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Hardwell', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Jamie Jones', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Kaskade', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Knife Party', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Kygo', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Loco Dice', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Marco Carola', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Martin Garrix', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Miike Snow', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Nero', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Pendulum', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('The Prodigy', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Purity Ring', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Rabbit on the Moon', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Seth Troxler', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('DJ Snake', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Tiesto', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Tycho', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist('Zedd', '/images/artists/afrojack.jpg', '', '', '', true)
  ];

  var stages = [
    new Stage('Main Stage', null),
    new Stage('Live Stage', null),
    new Stage('Carl Cox & Friends', null),
    new Stage('Resistance', null),
    new Stage('A State of Trance', null),
    new Stage('Ultra Worldwide', null),
    new Stage('UMF Radio', null),
    new Stage('Stage7', null),
    new Stage('Oasis', null)
  ];

  function loadPage(uri) {
    var renderHost = document.querySelector(".renderingPageControls-renderedControl");  
    while(renderHost.hasChildNodes()) renderHost.removeChild(renderHost.firstChild);
      
    WinJS.UI.Pages.render(uri, renderHost, { artists: new WinJS.Binding.List(artists) }).done();
  }

  WinJS.Namespace.define("Umf", {
    showSchedulePane: function () {
      loadPage('/pages/schedule/schedule.html');
    },
    showLineupPane: function () {
      loadPage('/pages/lineup/lineup.html');
    }
  });

  WinJS.UI.processAll().done(function () {
    loadPage('/pages/schedule/schedule.html');

    var splitView = document.querySelector(".splitView").winControl;
    
    var svCommand = document.querySelectorAll('.nav-commands div[data-win-control="WinJS.UI.SplitViewCommand"]');
    Array.prototype.forEach.call(svCommand, function (el, ix) {
      if(ix === 0)
        svCommand[0].winControl.addEventListener('invoked', Umf.showSchedulePane);
      else if(ix === 1)
        svCommand[1].winControl.addEventListener('invoked', Umf.showLineupPane);
    });

    new WinJS.UI._WinKeyboard(splitView.paneElement);
  });

  

  app.start();
}());