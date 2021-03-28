const swiper = new Swiper('.swiper-container', {
  // Optional parameters
    loop: true,
  // Navigation arrows
    navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
    },
    //Управление кнопками на клавиатуре//
    keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});