(function () {
  'use strict';

  function listViewItemTemplate(itemPromise) {
    return itemPromise.then(function (item) {
      var template = document.querySelector('.artist--template');
      if(template === null) return;

      var el = template.cloneNode(true);
      
      var artist = el.querySelector('.artist');
      artist.querySelector('img').src = item.data.image;
      artist.setAttribute('data-id', item.data.id);
      artist.querySelector('.artist__name').innerHTML = item.data.name;
      if(Umf.schedule.isArtistInSchedule(item.data.id))
        artist.classList.add('added');

      return artist;
    });
  }
  
  function artistClickEvent(e) {
    var artist = e.target.querySelector('.artist');
    var artistId = parseInt(artist.getAttribute('data-id'));
    if(Umf.schedule.isArtistInSchedule(artistId)) {
      Umf.schedule.remove(artistId);
      artist.classList.remove('added');
    }
    else {
      Umf.schedule.add(artistId);
      artist.classList.add('added');
    }
  }

  function resizeListView() {
    document.querySelector('#listView').style.height = (window.innerHeight - 50) + 'px';
  }

  var ControlConstructor = WinJS.UI.Pages.define('/pages/lineup/lineup.html', {
    ready: function (element, options) {
      options = options || {};
      this._data = WinJS.Binding.as({ });
      var artists = new WinJS.Binding.List(Umf.artists);

      var lv = element.querySelector('#listView');
      lv.winControl.itemDataSource = artists.dataSource;
      lv.winControl.itemTemplate = listViewItemTemplate;
      lv.winControl.addEventListener('iteminvoked', artistClickEvent);

      window.addEventListener('resize', resizeListView);
      resizeListView();
      
      WinJS.Binding.processAll(element, this._data);
    },
  });
})();