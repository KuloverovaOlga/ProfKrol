import popup from '../utils/popup';
import form from '../utils/form';
import 'inputmask';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const modules = {};
window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    phoneMask();
  } catch {}
  try {
    dropdown();
  } catch {}
  try {
    heroSwiper();
  } catch {}
  try {
    newsTabs();
  } catch {}
  try {
    detNewsSwiper();
  } catch {}
  try {
    newsMainSwiper();
  } catch {}
  try {
    supervisorSwiper();
  } catch {}
  try {
    cooperationSwiper();
  } catch {}
});

function phoneMask() {
  const mask = new Inputmask('+7 (999) 999 99 99');
  mask.mask($('.phone-mask'));
}

function dropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const dropdownLink = dropdown.querySelector('.header__nav-item-link-wrapper');
    const dropdownInner = dropdown.querySelector('.header__dropdown-inner');

    $(dropdownInner).hide();

    function dropdownClick() {
      dropdown.classList.toggle('active');
      $(dropdownInner).slideToggle();
    }

    function showContent() {
      if (window.innerWidth < 768) {
        // $(dropdownInner).hide();
        dropdownLink.addEventListener('click', dropdownClick);
        dropdown.classList.remove('active');
      } else {
        $(dropdownInner).hide();
        dropdownLink.removeEventListener('click', dropdownClick);
      }
    }

    showContent();
    window.addEventListener('resize', showContent);
  });

  const burger = document.querySelector('.header__mob-burger');
  const headerInner = document.querySelector('.header__inner');
  const closeBtn = document.querySelector('.header__logo-close-btn');

  burger.addEventListener('click', () => {
    if (!burger.classList.contains('active')) {
      burger.classList.add('active');
      headerInner.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
  closeBtn.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function heroSwiper() {
  const swiperOne = new Swiper('.main-hero__swiper', {
    slidesPerView: 1,
    effect: 'fade',

    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    },

    breakpoints: {
      768: {
        allowTouchMove: false
      }
    }
  });
}

function newsTabs() {
  const tabs = document.querySelectorAll('.news__tabs-item');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });
}

function detNewsSwiper() {
  const swiperOne = new Swiper('.det-news__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(2),
    loop: true,
    navigation: {
      nextEl: '.det-news__swiper-btn--next',
      prevEl: '.det-news__swiper-btn--prev'
    }
  });
}

function newsMainSwiper() {
  const swiperOne = new Swiper('.news-main__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(2),
    loop: true,
    navigation: {
      nextEl: '.news-main__swiper-btn--next',
      prevEl: '.news-main__swiper-btn--prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 4
      }
    }
  });
}

function supervisorSwiper() {
  const swiperOne = new Swiper('.supervisor__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(2),
    loop: true,
    navigation: {
      nextEl: '.supervisor__swiper-btn--next',
      prevEl: '.supervisor__swiper-btn--prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    }
  });
}

function cooperationSwiper() {
  const sliders = document.querySelectorAll('.cooperation__swiper-slide');
  let rows = Math.ceil(sliders.length / 2);
  const swiper = new Swiper('.cooperation__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(2),
    grid: {
      rows: 1
    },
    navigation: {
      nextEl: '.cooperation__swiper-btn--next',
      prevEl: '.cooperation__swiper-btn--prev'
    },
    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: 0,
        grid: {
          rows: rows
        }
      }
    }
  });
}
