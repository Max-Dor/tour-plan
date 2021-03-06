$(document).ready(function(){
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
var menuButton = $(".menu-button");
menuButton.on('click', function (){
  $(".navbar-bottom").toggleClass("navbar-bottom--visible");
});

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
$(this).keydown(function(eventObject){
if (eventObject.which == 27)
$('.modal__overlay').hide();
$('.modal__dialog').hide();
});


});