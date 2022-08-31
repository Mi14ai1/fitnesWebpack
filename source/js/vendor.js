// Swiper 7.4.1
import Swiper from './vendor/swiper-bundle';

let swiper = new Swiper('.coaches-slider__swiper', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.coaches-slider__next',
    prevEl: '.coaches-slider__prev',
  },
  breakpoints: {
    640: {
      centeredSlides: false,
      spaceBetween: 30,
    },

    1200: {
      centeredSlides: false,
      spaceBetween: 40,
    },
  },
});

export {swiper};
