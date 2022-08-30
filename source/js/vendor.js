// Swiper 7.4.1
import Swiper from './vendor/swiper-bundle';

let swiper = new Swiper('.coaches-slider__swiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  freeMode: true,
  navigation: {
    nextEl: '.coaches-slider__next',
    prevEl: '.coaches-slider__prev',
  },
});

export {swiper};
