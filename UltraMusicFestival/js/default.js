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

      if(args.detail.prelaunchActivated) return;

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
    new Artist(29, 'Zedd', '/images/artists/zedd.jpg', '', '', '', true),

    new Artist(30, 'AlunaGeorge', '/images/artists/alunageorge-update.jpg', '', '', '', false),
    new Artist(31, 'Alison Wonderland', '/images/artists/alisonwonderland.jpg', '', '', '', false),
    new Artist(72, 'alyfija', '/images/artists/alyfija.jpg', '', '', '', false),
    new Artist(32, 'andhim', '/images/artists/andhim.jpg', '', '', '', false),
    new Artist(33, 'Andrew Rayel', '/images/artists/andrewrayel-update.jpg', '', '', '', false),
    new Artist(34, 'Apollonia', '/images/artists/Apollonia-update.jpg', '', '', '', false),
    new Artist(35, 'Art Department', '/images/artists/artdepartment-2.jpg', '', '', '', false),
    new Artist(36, 'Carnage', '/images/artists/Carnage.jpg', '', '', '', false),
    new Artist(37, 'The Chainsmokers', '/images/artists/thechainsmokers.jpg', '', '', '', false),
    new Artist(38, 'Duke Dumont', '/images/artists/dukedumont.jpg', '', '', '', false),
    new Artist(39, 'DVBBS', '/images/artists/dvbbs.jpg', '', '', '', false),
    new Artist(40, 'Fakear', '/images/artists/fakear-ph.jpg', '', '', '', false),
    new Artist(41, 'Fedde le Grand', '/images/artists/FeddeLeGrand.jpg', '', '', '', false),
    new Artist(42, 'Galantis', '/images/artists/galantis.jpg', '', '', '', false),
    new Artist(43, 'Guy Gerber', '/images/artists/guygerber-3.jpg', '', '', '', false),
    new Artist(44, 'Hot Since 82', '/images/artists/hotsince82-update.jpg', '', '', '', false),
    new Artist(45, 'Icona Pop', '/images/artists/iconapop.jpg', '', '', '', false),
    new Artist(46, 'Jackmaster', '/images/artists/jackmaster.jpg', '', '', '', false),
    new Artist(47, 'Jauz', '/images/artists/jauz-ph.jpg', '', '', '', false),
    new Artist(48, 'Joris Voorn', '/images/artists/jorisvoorn-update.jpg', '', '', '', false),
    new Artist(49, 'Joseph Capriati', '/images/artists/josephcapriati.jpg', '', '', '', false),
    new Artist(50, 'KSHMR', '/images/artists/kshmr.jpg', '', '', '', false),
    new Artist(51, 'Laidback Luke', '/images/artists/LaidbackLuke.jpg', '', '', '', false),
    new Artist(52, 'Lee Foss', '/images/artists/leefoss.jpg', '', '', '', false),
    new Artist(53, 'Marshmello', '/images/artists/marshmello-2.jpg', '', '', '', false),
    new Artist(54, 'The Martinez Brothers', '/images/artists/themartinezbrothers-update.jpg', '', '', '', false),
    new Artist(55, 'Mind Against', '/images/artists/mindagainst-2.jpg', '', '', '', false),
    new Artist(56, 'MK', '/images/artists/mk-update.jpg', '', '', '', false),
    new Artist(57, 'Nic Fanciulli', '/images/artists/nicfanciulli-update.jpg', '', '', '', false),
    new Artist(58, 'Party Favor', '/images/artists/partyfavor.jpg', '', '', '', false),
    new Artist(59, 'Patrick Topping', '/images/artists/patricktopping.jpg', '', '', '', false),
    new Artist(60, 'Robin Schulz', '/images/artists/robinschulz.jpg', '', '', '', false),
    new Artist(61, 'Sam Feldt', '/images/artists/samfeldt-2.jpg', '', '', '', false),
    new Artist(62, 'Slander', '/images/artists/slander.jpg', '', '', '', false),
    new Artist(63, 'Snails', '/images/artists/snails.jpg', '', '', '', false),
    new Artist(64, 'SNBRN', '/images/artists/snbrn-ph.jpg', '', '', '', false),
    new Artist(65, 'Tchami', '/images/artists/tchami-2.jpg', '', '', '', false),
    new Artist(66, 'Technasia', '/images/artists/technasia.jpg', '', '', '', false),
    new Artist(67, 'Thugfucker', '/images/artists/thugfucker-2.jpg', '', '', '', false),
    new Artist(68, 'Thomas Jack', '/images/artists/thomasjack.jpg', '', '', '', false),
    new Artist(69, 'Vicetone', '/images/artists/Vicetone.jpg', '', '', '', false),
    new Artist(70, 'W&W', '/images/artists/ww-update.jpg', '', '', '', false),
    new Artist(71, 'Yellow Claw', '/images/artists/yellowclaw.jpg', '', '', '', false)
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
  var artistStageMap = [
    { artistId: 1, stageId: 1},
    { artistId: 2, stageId: 1},
    { artistId: 3, stageId: 1},
    { artistId: 4, stageId: 1},
    { artistId: 5, stageId: 3},
    { artistId: 6, stageId: 1},
    { artistId: 7, stageId: 1}
  ];

  function loadPage(uri) {
    var renderHost = document.querySelector(".renderingPageControls-renderedControl");  
    while(renderHost.hasChildNodes()) renderHost.removeChild(renderHost.firstChild);
      
    WinJS.UI.Pages.render(uri, renderHost).done();
  }

  WinJS.Namespace.define("Umf", {
    artists: artists,
    stages: stages,
    artistStageMap: artistStageMap,
    getStage: function (stageId) {
      var selectedStage = null;
      this.stages.forEach(function (stage) {
        if(stage.id == stageId)
          selectedStage = stage;
      });
      return selectedStage;
    },
    getArtistStage: function (artistId) {
      var stage = null;
      this.artistStageMap.forEach(function (artistStageMap) {
        if(artistStageMap.artistId == artistId)
          stage = Umf.getStage(artistStageMap.stageId);
      });
      return stage;
    },
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
        this.save();
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
        this.save();
      },
      isArtistInSchedule: function (artistId) {
        if(isNaN(parseInt(artistId))) return false;
        
        var found = false;
        this.schedule.forEach(function (id) {
          if(id === artistId) found = true;
        });
        return found;
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
        var promise = new WinJS.Promise(function (complete, error, progress) {
          if(WinJS.Application.roaming.exists('userSchedule'))
            WinJS.Application.roaming.readText('userSchedule', '').done(function (data) {
              Umf.schedule.schedule = Umf.schedule.parse(data);
              complete();
            });
        });

        return promise;
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
    Umf.schedule.load().then(function () {  
      if(Umf.schedule.schedule.length)
        Umf.showSchedulePane();
      else
        Umf.showLineupPane();
    });

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