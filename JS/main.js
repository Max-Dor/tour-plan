const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
    loop: true,
  // Navigation arrows
    navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
    },
    //Управление кнопками на клавиатуре//
    keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
    loop: true,
  // Navigation arrows
    navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
    },
    //Управление кнопками на клавиатуре//
    keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
// Управление менюшкой в мобильной версии//
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function (){
  console.log('Клик по кнопке');
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});
