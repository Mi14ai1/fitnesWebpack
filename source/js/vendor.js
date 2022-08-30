// Swiper 7.4.1
import Swiper from './vendor/swiper-bundle';

let swiper = new Swiper('.coaches-slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.coaches-slider__next',
    prevEl: '.coaches-slider__prev',
  },
});
