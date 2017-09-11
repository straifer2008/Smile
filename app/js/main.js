$(document).ready(function(){
    var touch = $('#touch-menu');
    var menuProducts = $('ul.products-tabs');
    $(touch).on('click', function (e) {
        e.preventDefault();
        menuProducts.slideToggle();
        touch.html();
    });


    $(window).resize(function () {
        var wid = $(window).width();
        if(wid > 640 && menuProducts.is(':hidden')) {
            menuProducts.removeAttr('style');
        }
    });



    $('#sliderTop').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["&lsaquo;", "&rsaquo;"],
        autoplay: true
    });

    $('#slider-products').owlCarousel({
        loop: true,
        nav: true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,

        responsive: {
            0: {
                items: 2,
                margin: 30,
                center: false,
                nav: false

            },
            641: {
                items: 3,
                margin: 20,
                center: false
            },
            992: {
                items: 5,
                center: true,
                margin: 35
            }
        }
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