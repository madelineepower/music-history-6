"use strict";

let $ = require('jquery'),
    db = require('./db-interact'),
    data = require("./data-organize");

let filterByArtist = (artist) => {
  console.log("this artist was chosen", artist);
  //get song array..how? need to make ajax call again?
  // when finds a match, put into a new array
  // pass new array into show songs function
};
//function to get user input from the album dropdown, make new array, and display songs

module.exports = {filterByArtist};
