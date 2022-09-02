// Swiper 7.4.1
import Swiper from './vendor/swiper-bundle';

let swiper = new Swiper('.coaches-slider__swiper', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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

let carousel = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export {swiper, carousel};
