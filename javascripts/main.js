"use strict";

let $ = require('jquery'),
    db = require('./db-interact'),
    view = require('./view'),
    show = require('./dom-build'),
    filter = require('./filter');

require('materialize-css/js/dropdown.js');

$(".Add-Music-View").hide();

$("#add-music-link").click(view.showAddMusicView);

$("#list-music-link").click(view.showListMusicView);

$('#addButton').click(function(){
  let newObj = show.makeSongObj();
  db.addToFirebase(newObj)
  .then(function(newObj){
    db.getSongs()
    .then(function(data){
      show.showSongs(data);
    });
  });
});

// $(document).on("click", ".artists", function(event) {
//  let artist = event.target.textContent;
//  filter.filterByArtist(artist);
// });

$(document).on("click", ".artist-filter", function(event) {
  let artist = event.target.textContent;
  $('#artist-div').html(artist);
});

$(document).on("click", ".delete-btn", function(event) {
  console.log(event.target);
  let songToDelete = event.target.id;
  db.deleteSong(songToDelete)
  .then(function(){
    db.getSongs()
    .then(function(data){
      show.showSongs(data);
    });
  });
});

$(document).on("click", "#filter-btn", function(event){
  console.log(event);
  let artist = $('#artist-div').html();
    filter.filterSongs(artist);
    // show.showSongs(filteredSongs);
});

$(document).ready(function(){
db.getSongs()
.then(function(data){
  console.log(data);
  show.showSongs(data);
  show.filterForm(data);
});
});
