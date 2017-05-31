"use strict";

let $ = require('jquery');

let showAddMusicView = () => {
    $(".List-Music-View").hide();
    $(".Add-Music-View").show();
};

let showListMusicView = () => {
    $(".Add-Music-View").hide();
    $(".List-Music-View").show();
};

module.exports = {showAddMusicView, showListMusicView};
