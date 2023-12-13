// работа кнопки меню
const menuBtn = document.querySelector(".menu-mobile__btn");
const mobileMenu = document.querySelector(".menu-mobile__list");
const menuLinks = document.querySelectorAll(".menu__link");
const menuBtnClose = document.querySelector(".menu-mobile__btn-close");

// открытие меню
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("show");
});

// закрытие меню при нажатии на ссылку в меню
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hidden");
  });
});

// закрытие меню при клике на крестик
menuBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  mobileMenu.classList.add("hidden");
});

// закрытие меню при клике на любую область за его пределами
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!mobileMenu.contains(target) && target !== menuBtn) {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hidden");
  }
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
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  // autoHeight: false,
});

// Объединить в одну????????????????????????????????????

// только на мобилке!!!!!
const widthMediaQuery = window.matchMedia("(max-width: 767px)").matches;

// Открытие/закрытие программ
// программы Испанского
const programSpanishTitle = document.querySelector(".programs__title--spanish");
const programsSpanish = document.querySelector(".program__wrapper--spanish");

// программы Английского
const programEnglishTitle = document.querySelector(".programs__title--english");
const programsEnglish = document.querySelector(".program__wrapper--english");

// window.addEventListener("resize", () => {
if (widthMediaQuery) {
  programsSpanish.classList.add("close");

  programSpanishTitle.addEventListener("click", () => {
    programSpanishTitle.classList.toggle("open");

    if (programSpanishTitle.classList.contains("open")) {
      programsSpanish.classList.remove("close");
      programsSpanish.classList.add("show");
    } else {
      programsSpanish.classList.remove("show");
      programsSpanish.classList.add("close");
    }
  });

  programsEnglish.classList.add("close");

  programEnglishTitle.addEventListener("click", () => {
    programEnglishTitle.classList.toggle("open");

    if (programEnglishTitle.classList.contains("open")) {
      programsEnglish.classList.remove("close");
      programsEnglish.classList.add("show");
    } else {
      programsEnglish.classList.remove("show");
      programsEnglish.classList.add("close");
    }
  });
}
// });

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
