"use strict";

let $ = require('jquery'),
    db = require('./db-interact'),
    view = require('./view'),
    show = require('./data-organize'),
    filter = require('./filter');


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

$(document).on("click", ".artists", function(event) {
 let artist = event.target.textContent;
 filter.filterByArtist(artist);
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


$(document).ready(function(){
db.getSongs()
.then(function(data){
  console.log(data);
  show.showSongs(data);
});
});
