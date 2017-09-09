$(document).ready(function(){
    $('#sliderTop').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["&lsaquo;", "&rsaquo;"]
    });

    $('#slider-products').owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        dots: false,
        margin: 15,
        center: true
    });
});