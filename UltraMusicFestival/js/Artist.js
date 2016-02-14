(function () {
  'use strict';

  window.Artist = WinJS.Class.define(function (id, name, image, facebook, twitter, bio, isHeadliner, dayPerforming) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.facebook = facebook;
    this.twitter = twitter;
    this.bio = bio;
    this.isHeadliner = isHeadliner;
    this.dayPerforming = dayPerforming;
  },
  {
    toString: function () {
      return this.name;
    }
  },
  {
  });
}());