"use strict";

/* HEADER */
$(function() {
    var header = $("#header");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("sticky");
        } /*else {
            // header.removeClass("sticky");
            header.addClass("bg-grad-white-blue");
        } */
    });
  
});

/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
document.getElementById('statistics_cards').innerHTML = renderCards( statistics );


/* SKILLS */
document.getElementById('skills_progress_bars').innerHTML = renderSkills( skills );


/* LATEST WORKS */



/* JOB HISTORY */



/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */