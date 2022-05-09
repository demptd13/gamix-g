// MOBIL MENU
$(document).ready(function() {
    $('.mobile-menu__icon').click(function(event) {
        $('.mobile-menu').toggleClass('mobile-menu_show');
        $('.mobile-menu__icon').toggleClass('icon_active');
    });
});


// Slider
$('.slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('.slider_shop').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
});