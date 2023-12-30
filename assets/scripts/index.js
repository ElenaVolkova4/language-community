// работа кнопки меню
const menuBtn = document.querySelector(".menu-mobile__btn");
const mobileMenu = document.querySelector(".menu-mobile__list-wrapper");
const menuLinks = document.querySelectorAll(".menu__link");
const menuBtnClose = document.querySelector(".menu-mobile__btn-close");

// открытие меню
menuBtn.addEventListener("click", () => {
  // mobileMenu.classList.remove("hidden");
  // mobileMenu.classList.add("show");
  mobileMenu.classList.toggle("show");
});

// закрытие меню при нажатии на ссылку в меню
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

// закрытие меню при клике на крестик
menuBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

// закрытие меню при клике на любую область за его пределами
// document.addEventListener("click", (event) => {
//   const target = event.target;
//   if (!mobileMenu.contains(target) && target !== menuBtn) {
//     mobileMenu.classList.remove("show");
//     mobileMenu.classList.add("hidden");
//   }
// });

document.addEventListener("click", (event) => {
  // Проверяем, был ли клик на кнопке меню или на ее дочерних элементах
  if (
    event.target.closest(".menu-mobile__btn") ||
    event.target.closest(".menu-mobile__btn svg")
  ) {
    return;
  }
  // Если клик произошел вне кнопки меню, скрываем меню
  mobileMenu.classList.remove("show");
});

// слайдер Обо мне
const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // autoHeight: false,
});

// Объединить в одну????????????????????????????????????

// только на мобилке!!!!!
const widthMediaQuery = window.matchMedia("(max-width: 767px)").matches;

// Открытие/закрытие программ
// программы Испанского
const programSpanishTitle = document.querySelector(".programs__title--spanish");
const programSpanish = document.querySelector(".program__wrapper--spanish");

// программы Английского
const programEnglishTitle = document.querySelector(".programs__title--english");
const programEnglish = document.querySelector(".program__wrapper--english");

// программа Клуб
const programClubTitle = document.querySelector(
  ".programs__title--club-mobile"
);
const programClub = document.querySelector(".program__wrapper--club-mobile");

// window.addEventListener("resize", () => {
if (widthMediaQuery) {
  programSpanish.classList.add("close");

  programSpanishTitle.addEventListener("click", () => {
    programSpanishTitle.classList.toggle("open");

    if (programSpanishTitle.classList.contains("open")) {
      programSpanish.classList.remove("close");
      programSpanish.classList.add("show");
    } else {
      programSpanish.classList.remove("show");
      programSpanish.classList.add("close");
    }
  });

  programEnglish.classList.add("close");

  programEnglishTitle.addEventListener("click", () => {
    programEnglishTitle.classList.toggle("open");

    if (programEnglishTitle.classList.contains("open")) {
      programEnglish.classList.remove("close");
      programEnglish.classList.add("show");
    } else {
      programEnglish.classList.remove("show");
      programEnglish.classList.add("close");
    }
  });

  programClub.classList.add("close");

  programClubTitle.addEventListener("click", () => {
    programClubTitle.classList.toggle("open");

    if (programClubTitle.classList.contains("open")) {
      programClub.classList.remove("close");
      programClub.classList.add("show");
    } else {
      programClub.classList.remove("show");
      programClub.classList.add("close");
    }
  });
}

// слайдер Отзывы

// стрелка-скролл наверх
const arrowTop = document.querySelector(".arrow-top");

arrowTop.onclick = function () {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener("scroll", function () {
  arrowTop.hidden = pageYOffset < document.documentElement.clientHeight;
});

// слайдер Кейсы и отзывы
const feedbackSwiper = new Swiper(".feedbackSwiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-feedback-button-next",
    prevEl: ".swiper-feedback-button-prev",
  },
  slidesPerView: 3, // количетсво слайдов
  spaceBetween: 30, // расстояние между слайдами
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  // autoHeight: false,
  // Responsive breakpoints
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
