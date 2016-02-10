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


  var Artist = WinJS.Class.define(function (name, facebook, twitter, bio, isHeadliner) {
      this.name = name;
      this.facebook = facebook;
      this.twitter = twitter;
      this.bio = bio;
      this.isHeadliner = isHeadliner
    },
    {
      toString: function () {
        return this.name;
      }
    },
    {
    }
  );

  var Stage = WinJS.Class.define(function (name, location) {
      this.name = name;
      this.location = location;
    },
    {},
    {}
  );
  
  var artists = [
    new Artist('Afrojack', '', '', '', true),
    new Artist('Armin Van Buuren', '', '', '', true),
    new Artist('Avicii', '', '', '', true),
    new Artist('Caribou', '', '', '', true),
    new Artist('Carl Cox', '', '', '', true),
    new Artist('Chet Faker', '', '', '', true),
    new Artist('David Guetta', '', '', '', true),
    new Artist('Destroid', '', '', '', true),
    new Artist('Dubfire', '', '', '', true),
    new Artist('Eric Prydz', '', '', '', true),
    new Artist('Hardwell', '', '', '', true),
    new Artist('Jamie Jones', '', '', '', true),
    new Artist('Kaskade', '', '', '', true),
    new Artist('Knife Party', '', '', '', true),
    new Artist('Kygo', '', '', '', true),
    new Artist('Loco Dice', '', '', '', true),
    new Artist('Marco Carola', '', '', '', true),
    new Artist('Martin Garrix', '', '', '', true),
    new Artist('Miike Snow', '', '', '', true),
    new Artist('Nero', '', '', '', true),
    new Artist('Pendulum', '', '', '', true),
    new Artist('The Prodigy', '', '', '', true),
    new Artist('Purity Ring', '', '', '', true),
    new Artist('Rabbit on the Moon', '', '', '', true),
    new Artist('Seth Troxler', '', '', '', true),
    new Artist('DJ Snake', '', '', '', true),
    new Artist('Tiesto', '', '', '', true),
    new Artist('Tycho', '', '', '', true),
    new Artist('Zedd', '', '', '', true)
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

  WinJS.Namespace.define("Umf", {
    artists: new WinJS.Binding.List(artists),
    showSchedulePane: function () {
      console.log('now showing schedule pane.');
    },
    showLineupPane: function () {
      console.log('now showing lineup pane.');
    }
  });

  WinJS.UI.processAll().done(function () {
    var splitView = document.querySelector(".splitView").winControl;
    
    var svCommand = document.querySelector('.nav-commands div[data-win-control="WinJS.UI.SplitViewCommand"]').winControl;
    

    new WinJS.UI._WinKeyboard(splitView.paneElement);
  });

  app.start();
}());