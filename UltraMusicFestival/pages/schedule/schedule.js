(function () {
  'use strict';

  function formatTime(time) {
    return time.substr(0, time.length == 3 ? 1 : 2) + ':' + time.substr(-2, 2);
  }

  function formatDayFromDayNumber(dayNum) {
    switch(dayNum) {
      case 3:
        return 'Sunday';
        break;

      case 2:
        return 'Saturday';
        break;

      default:
        return 'Friday';
    }
  }

  function listViewItemTemplate(itemPromise) {
    return itemPromise.then(function (item) {
      var template = document.querySelector('.artist--template');
      if(template === null) return;

      var el = template.cloneNode(true);
      
      var artist = el.querySelector('.artist-short');
      artist.querySelector('img').src = item.data.image;
      artist.setAttribute('data-id', item.data.id);
      artist.querySelector('.artist-short__name').innerHTML = item.data.name;

      var stageName = 'TBD';
      var stage = Umf.getArtistStage(item.data.id);
      if(stage !== null) stageName = stage.name;

      var time = 'TBD';
      var timeNode = artist.querySelector('.artist-short__time');
      var timeMap = Umf.getArtistStageMap(item.data.id);
      timeNode.innerHTML = formatDayFromDayNumber(timeMap.day) + ' at ' + formatTime(timeMap.time) + 'pm';

      artist.querySelector('.artist-short__stage').innerHTML = stageName;

      var con = document.createElement('div');
      con.appendChild(artist)
      return con;
    });
  }
  
  function artistClickEvent(e) {
    //var artist = e.target.querySelector('.artist');
    //var artistId = parseInt(artist.getAttribute('data-id'));
    //if(Umf.schedule.isArtistInSchedule(artistId)) {
    //  Umf.schedule.remove(artistId);
    //  artist.classList.remove('added');
    //}
    //else {
    //  Umf.schedule.add(artistId);
    //  artist.classList.add('added');
    //}
  }

  function filterActiveArtists(obj) {
    var filtered = [];
    Umf.artists.forEach(function (artist) {
      Umf.schedule.schedule.forEach(function (scheduleArtistId) {
        if(artist.id === scheduleArtistId)
          filtered.push(artist);
      });
    });
    return filtered;
  }

  function showNoAdd() {
    document.querySelector('.no-add').style.display = 'block';
    document.querySelector('.no-add button').addEventListener('click', function () {
      Umf.showLineupPane();
    });
  }

  var screenSave = Umf.screenSize;
  function resizeListView() {
    var listView = document.querySelector('#listView');
    listView.style.height = (window.innerHeight - 50) + 'px';

    if(screenSave !== Umf.screenSize) {
      document.querySelector('#listView').winControl.forceLayout();
      screenSave = Umf.screenSize;
    }
  }

  function addArtistToTable(element, stageId, artist, day, duration) {
    var table = element.querySelector('table.schedule');
    var tr = table.tBodies[0].querySelectorAll('tr')[stageId - 1];
    var colspan = 1;

    var td = document.createElement('td');
    td.classList.add('selected');
    td.innerHTML = artist;
    td.colSpan = duration / 15;
    tr.appendChild(td);

    //for(var l = 0; l < 124; l++) {
    //}
  }

  function setupGrid(element) {
    Umf.artistStageMap.forEach(function (mp) {
      addArtistToTable(element, mp.stageId, Umf.getArtist(mp.artistId).name, mp.day, mp.duration);
    });        
  }

  var ControlConstructor = WinJS.UI.Pages.define('/pages/schedule/schedule.html', {
    ready: function (element, options) {
      options = options || {};
      this._data = WinJS.Binding.as({ });
      var artists = new WinJS.Binding.List(filterActiveArtists());
      
      if(!artists.length) showNoAdd();

      var lv = element.querySelector('#listView');
      lv.winControl.itemDataSource = artists.dataSource;
      lv.winControl.itemTemplate = listViewItemTemplate;
      lv.winControl.addEventListener('iteminvoked', artistClickEvent);

      setupGrid(element);
      
      window.addEventListener('resize', resizeListView);
      resizeListView();
      
      WinJS.Binding.processAll(element, this._data);
    },
  });
})();