"use strict";

let $ = require('jquery'),
    firebase = require('./fb-Config.js');

function getSongs() {
      return new Promise(function(resolve,reject) {
        $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/songs.json`
        }).done(function(songData){
          resolve(songData);
        }).fail(function(error){
          reject(error);
        });
      });
    }

function deleteSong(songID) {
     return new Promise(function(resolve, reject){
       $.ajax({
         url: `${firebase.getFBsettings().databaseURL}/songs/${songID}.json`,
         method: 'DELETE'
       }).done(function(){
         resolve();
       });
     });
    }

function addToFirebase(newObj) {
      console.log("add song", newObj);
        return new Promise (function(resolve, reject) {
          $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/songs.json`,
            type: 'POST',
            data: JSON.stringify(newObj),
            dataType: 'json'
          }).done(function(songID){
            resolve(songID);
          });
        });
    }
module.exports = {getSongs, deleteSong, addToFirebase};
