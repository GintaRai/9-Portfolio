"use strict";

/* HEADER */
window.onscroll = function(){stickToTop(); /*backToTop()*/};

// $(function() {
//     var header = $("#header");
  
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
//         if (scroll >= 50) {
//             header.addClass("sticky");
//         } /*else {
//             // header.removeClass("sticky");
//             header.addClass("bg-grad-white-blue");
//         } */
//     });
  
// });

$('#header .menu').click(function () {
    $('#sliding').toggleClass('sliding-menu-visible');
});

/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
document.getElementById('statistics_cards').innerHTML = renderCards( statistics );


/* SKILLS */
document.getElementById('skills_progress_bars').innerHTML = renderSkills( skills );


/* LATEST WORKS */
document.getElementById('latest_works').innerHTML = renderWorks( works );


/* JOB HISTORY */



/* TESTIMONIALS */
$('#testimonials > .container').html( renderTestimonials(testimonials) );


/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */