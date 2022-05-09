// Mobile Menu
const btn = document.querySelector('.mobile-menu__icon');
let mobile = document.querySelector('.mobile-menu');
let icon = document.querySelector('.mobile-menu__icon');
btn.onclick = () => {
    mobile.classList.toggle('mobile-menu_show');
    icon.classList.toggle('icon_active');
}

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