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
/* SKILLS */
function renderSkills( data ) {
    var HTML = '';

    for (var i = 0; i < data.length; i++) {
        HTML += '<div class="progress-bar">\
                    <div class="title">'+data[i].title+'</div>\
                    <div class="bar">\
                        <div class="value" style="width:'+data[i].value+'%;">\
                            <div class="loading-part">\
                                <div class="vertical-line"></div>\
                                <div class="text-value">'+data[i].value+'%</div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
    }
    return HTML;
}


/* LATEST WORKS */
function renderWorks(data) {
    var HTML = '',
        filter_HTML = '',
        items_HTML = '';

    if ( !Array.isArray || data.length === 0 ) {
        return HTML;
    }

    for (let i = 0; i < data.length; i++) {
            filter_HTML += '<div class = "">\
                                '+i+'\
                            </div>'; 
        }

    for (var i = 0; i < data.length; i++) {
        items_HTML += '<div class="item" style="background-image: url(img/'+data[i].img+')">\
                            <div class="background">\
                                <div class="texts">\
                                    <h4>'+data[i].title+'</h4>\
                                    <span>'+data[i].categories+'</span>\
                                </div>\
                            </div>\
                        </div>';  
    }

    HTML += '<div class="gallery">\
                <div class="filter">\
                    <div>All</div>\
                    '+filter_HTML+'\
                </div>\
                <div class="item-list">\
                '+items_HTML+'\
                </div>\
            </div> -->';

return HTML;
}


/* JOB HISTORY */



/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */