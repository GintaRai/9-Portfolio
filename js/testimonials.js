"use strict";
var testimonials_animation_time = 1000;

function renderTestimonials (data) {
    var HTML = '',
        items_HTML = '',
        element_width = 100 / data.length;

    data.forEach ( item => {
        items_HTML += `<div class="item" style="width: ${element_width}%;">${item}</div>`;
        
    });
    

    HTML = `<div class="testimonials">
                <div class="testimonials-list" style="width: ${100*data.length}%; margin-left: -100%;">
                    ${items_HTML}
                </div>
                <div class="testimonials-controls">
                    <i class="fa fa-chevron-left"></i>
                    <i class="fa fa-chevron-right"></i>
                </div>
            </div>`;

    return HTML;
}