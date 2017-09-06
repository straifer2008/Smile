/*require('jquery/src/jquery.js');
require('bootstrap/dist/js/bootstrap.js');
require('owl.carousel/src/js/owl.carousel.js');*/
/*include('jquery/src/jquery.js');
include('bootstrap/dist/js/bootstrap.js');
include('owl.carousel/src/js/owl.carousel.js');*/

$(document).ready(function(){
    $('.slider-top').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true
    });

    var prev = $('.owl-prev');
    var next = $('.owl-next');
    prev.html("<i class='fa fa-chevron-left fa-3x' aria-hidden='true'></i>");
    next.html("<i class='fa fa-chevron-right fa-3x' aria-hidden='true'></i>");

    $('#monitor').html($(window).width());

    $(window).resize(function() {
        var viewportWidth = $(window).width();
        $('#monitor').html(viewportWidth);
    });

    $('.product-carusel').owlCarousel({
        items: 8,
        nav: false,
        dots: false,
        margin: 32,
        autoWidth: true,
        center: true,
        loop: true
    });
});