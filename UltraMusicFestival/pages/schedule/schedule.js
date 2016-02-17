(function () {
  'use strict';

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

      element.querySelector('#listView').style.height = (window.innerHeight - 16) + 'px';
      
      WinJS.Binding.processAll(element, this._data);
    },
  });
})();