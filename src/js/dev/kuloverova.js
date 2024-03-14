import popup from '../utils/popup';
import form from '../utils/form';
import 'inputmask';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

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
  try {
    ourPartnersSwiper();
  } catch {}
  try {
    certificates();
  } catch {}
  try {
    showMore();
  } catch {}
  try {
    dishesSwiper();
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

function ourPartnersSwiper() {
  const swiper = new Swiper('.our-partners__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1,
    allowTouchMove: true,
    loop: true,
    grid: {
      rows: 2
    },
    navigation: {
      nextEl: '.our-partners__swiper-btn--next',
      prevEl: '.our-partners__swiper-btn--prev'
    },
    breakpoints: {
      769: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: false,
        allowTouchMove: false,
        grid: {
          rows: 2
        }
      }
    }
  });
}

function certificates() {
  Fancybox.bind('[data-fancybox]', {
    idle: false,
    Thumbs: false,
    Carousel: {
      transition: 'slide'
    },
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: []
      }
    },
    on: {
      init: function () {
        $('.fancybox-bg').fadeIn();
      },
      close: function () {
        $('.fancybox-bg').fadeOut();
      }
    }
  });
  $('.fancybox-bg').on('click', function () {
    Fancybox.close();
  });

  const swiperOne = new Swiper('.certificates__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(2),
    loop: true,
    navigation: {
      nextEl: '.certificates__swiper-btn--next',
      prevEl: '.certificates__swiper-btn--prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    }
  });
}

function showMore() {
  const elem = document.querySelector('.devotion__text-box');

  let size = window.innerWidth > 768 ? 1120 : 512;
  let text = elem.innerHTML;

  window.addEventListener('resize', () => {
    size = window.innerWidth > 768 ? 1120 : 512;
    if (elem.hasAttribute('data-short')) {
      text_crop();
    }
  });

  function maxHeight() {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
  }

  function text_crop() {
    elem.setAttribute('data-fulltext', text);

    if (text.length > size) {
      const text2 = text.slice(0, size - 10);
      elem.innerHTML = text2 + '...';
      elem.setAttribute('data-short', true);
      elem.style.maxHeight = window.innerWidth > 768 ? '42.2rem' : '44.8rem';
    }
  }

  function expandText() {
    const fullText = elem.getAttribute('data-fulltext');
    if (elem.hasAttribute('data-short')) {
      elem.innerHTML = fullText;
      elem.style.maxHeight = 'auto';
      elem.removeAttribute('data-short');
      maxHeight();
      elem.parentElement.classList.add('isActive');
      window.addEventListener('resize', maxHeight);
    } else {
      window.removeEventListener('resize', maxHeight);
      elem.style.maxHeight = window.innerWidth > 768 ? '42.2rem' : '44.8rem';
      elem.parentElement.classList.remove('isActive');
      setTimeout(() => {
        text_crop();
      }, 300);
    }
  }

  text_crop();
  document.querySelectorAll('.devotion__btn').forEach((item) => item.addEventListener('click', expandText));
}

function dishesSwiper() {
  const swiperOne = new Swiper('.dishes__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(2),
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.dishes__swiper-btn--next',
      prevEl: '.dishes__swiper-btn--prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1

      }
    }
  });
}
