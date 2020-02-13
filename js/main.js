$(function() {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav',
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        touchMove: true,
        swipe: true,

        responsive: [{
                breakpoint: 921,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 741,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]

    });

    $('.header__menu-btn').on('click', function() {
        $('.header__menu > ul').slideToggle();
    })


    $('.header__drop-down.drop-down').on('click', function() {
        $(this).children('.drop-down__list').toggleClass('active');
        $(this).children('.drop-down__link').toggleClass('active');
    })

});