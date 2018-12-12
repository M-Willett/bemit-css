var $ = require('jQuery');

$(function() {
    var $scrollWindow = $('main.c-content');
    var transitionSpeed = 240;
    var headerHeight = $('header.c-header--app').height();
    $('a[href^="#"]:not(a[href="#"])').click(function() {
        var target = $(this.hash);
        if (target.length) {
            $scrollWindow.animate({
                scrollTop: $scrollWindow.scrollTop() + (target.offset().top - headerHeight)
            }, 
                transitionSpeed
            );
            // prevent default behaviour (no hash in path)
            return false;
        }
    });
});
