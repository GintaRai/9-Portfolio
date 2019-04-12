"use strict";
/* HEADER */



/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
/**
 * Rendering list of statistics or services cards
 * @param {array} data - list of objects, contains {icon, number, title}
 * @returns {string} HTML of cards
 */
function renderCards(data) {
    var HTML = '',
        good_ones = 0;

    for (var i = 0; i < data.length; i++) {
        HTML += '<div class="card">\
                    <i class="fa fa-'+data[i].icon+'"></i>\
                    <div class="number">'+data[i].number+'</div>\
                    <div class="title">'+data[i].title+'</div>\
                </div>';
        good_ones++;
    }
    return HTML;
}