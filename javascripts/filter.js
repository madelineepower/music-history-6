"use strict";

let $ = require('jquery'),
    db = require('./db-interact'),
    data = require("./dom-build"),
    show = require('./dom-build.js');

let filterSongs = (artist) => {
  console.log("this artist was chosen", artist);
  db.getSongs()
  .then(function(data) {
  var filteredSongs = { songs: { } };
  var artistChosen = artist;
  for (var key in data) {
      var currentSong = data[key];
      if (currentSong.artist == artistChosen) {
        filteredSongs.songs = currentSong;
      }
  }
  console.log(filteredSongs);
  show.showSongs(filteredSongs);
});
};


module.exports = {filterSongs};

// var filteredSongs = { songs: { } };
//
// for (var key in existingSongObjectFromFirebase.songs) {
//     var currentSong = existingSongObjectFromFirebase.songs[key];
//
//     // Check if the currentSong.artist key value matches what the user selected
//     // If it does, add the current song to the `filteredSongs.song` object
// }
//
// // Update the DOM with the filtered songs object
