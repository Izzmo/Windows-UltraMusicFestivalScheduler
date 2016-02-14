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
    new Artist(1, 'Afrojack', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist(2, 'Armin Van Buuren', '/images/artists/ArminvanBuuren-update.jpg', '', '', '', true),
    new Artist(3, 'Avicii', '/images/artists/Avicii.jpg', '', '', '', true),
    new Artist(4, 'Caribou', '/images/artists/caribou.jpg', '', '', '', true),
    new Artist(5, 'Carl Cox', '/images/artists/carlcox-update.jpg', '', '', '', true),
    new Artist(6, 'Chet Faker', '/images/artists/chetfaker.jpg', '', '', '', true),
    new Artist(7, 'David Guetta', '/images/artists/david-guetta.jpg', '', '', '', true),
    new Artist(8, 'Destroid', '/images/artists/destroid.jpg', '', '', '', true),
    new Artist(9, 'Dubfire', '/images/artists/dubfire.jpg', '', '', '', true),
    new Artist(10, 'Eric Prydz', '/images/artists/ericprydz-update.jpg', '', '', '', true),
    new Artist(11, 'Hardwell', '/images/artists/Hardwell.jpg', '', '', '', true),
    new Artist(12, 'Jamie Jones', '/images/artists/jamiejones-2.jpg', '', '', '', true),
    new Artist(13, 'Kaskade', '/images/artists/kaskade.jpg', '', '', '', true),
    new Artist(14, 'Knife Party', '/images/artists/KnifeParty.jpg', '', '', '', true),
    new Artist(15, 'Kygo', '/images/artists/Kygo.jpg', '', '', '', true),
    new Artist(16, 'Loco Dice', '/images/artists/locodice-update.jpg', '', '', '', true),
    new Artist(17, 'Marco Carola', '/images/artists/marcocarola-update.jpg', '', '', '', true),
    new Artist(18, 'Martin Garrix', '/images/artists/MartinGarrix.jpg', '', '', '', true),
    new Artist(19, 'Miike Snow', '/images/artists/miikesnow.jpg', '', '', '', true),
    new Artist(20, 'Nero', '/images/artists/nero-ph.jpg', '', '', '', true),
    new Artist(21, 'Pendulum', '/images/artists/pendulum-placeholder.jpg', '', '', '', true),
    new Artist(22, 'The Prodigy', '/images/artists/theprodigy.jpg', '', '', '', true),
    new Artist(23, 'Purity Ring', '/images/artists/purityring.jpg', '', '', '', true),
    new Artist(24, 'Rabbit on the Moon', '/images/artists/rabbitinthemoon-ph.jpg', '', '', '', true),
    new Artist(25, 'Seth Troxler', '/images/artists/sethtroxler.jpg', '', '', '', true),
    new Artist(26, 'DJ Snake', '/images/artists/djsnake-2.jpg', '', '', '', true),
    new Artist(27, 'Tiesto', '/images/artists/Tiesto.jpg', '', '', '', true),
    new Artist(28, 'Tycho', '/images/artists/tycho.jpg', '', '', '', true),
    new Artist(29, 'Zedd', '/images/artists/zedd.jpg', '', '', '', true)
  ];

  var stages = [
    new Stage(1, 'Main Stage', null),
    new Stage(2, 'Live Stage', null),
    new Stage(3, 'Carl Cox & Friends', null),
    new Stage(4, 'Resistance', null),
    new Stage(5, 'A State of Trance', null),
    new Stage(6, 'Ultra Worldwide', null),
    new Stage(7, 'UMF Radio', null),
    new Stage(8, 'Stage7', null),
    new Stage(9, 'Oasis', null)
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
    },
    schedule: {
      schedule: [],
      add: function (artistId) {
        if(!isNaN(parseInt(artistId)))
          this.schedule.push(artistId);
      },
      remove: function (artistId) {
        if(!isNaN(parseInt(artistId))) {
          var indexToRemove = -1;
          this.schedule.forEach(function (el, i) {
            if(el == artistId) indexToRemove = i;
          });
          if(indexToRemove >= 0)
            this.schedule.splice(indexToRemove, 1);
        }
      },
      parse: function (data) {
        if(data.length <= 0) {
          console.info('Schedule data empty or not initialized yet.');
          return [];
        }

        var parsedData = [];
        try {
          parsedData = JSON.parse(data);
        }
        catch (ex) {
          console.error('Could not parse schedule from roaming data store.');
        }
        return parsedData;
      },
      load: function () {
        if(WinJS.Application.roaming.exists('userSchedule'))
          WinJS.Application.roaming.readText('userSchedule', '').done(function (data) {
            Umf.schedule.schedule = Umf.schedule.parse(data);
          });
      },
      save: function () {
        var serializedData = '';
        try {
          serializedData = JSON.stringify(Umf.schedule.schedule);
        }
        catch (ex) {
          console.error('Could not serialize schedule for roaming data store.');
        }
        
        WinJS.Application.roaming.writeText('userSchedule', serializedData);
      }
    }
  });

  WinJS.UI.processAll().done(function () {
    Umf.showLineupPane();
    Umf.schedule.load();

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