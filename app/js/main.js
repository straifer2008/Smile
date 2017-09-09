$(document).ready(function(){
    $('#sliderTop').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["&lsaquo;", "&rsaquo;"],
        autoplay: true
    });

    $('#slider-products').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        margin: 15,
        center: true
    });

    $('#slider-clearence').owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        dots: false,
        margin: 30
    });

    $('#slider-brands').owlCarousel({
        items: 8,
        nav: false,
        dots: false,
        margin: 50,
        autoWidth: true,
        startPosition: 5
    });
});