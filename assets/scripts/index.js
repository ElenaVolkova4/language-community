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
  console.log("f");
  if (!mobileMenu.contains(target) && target !== menuBtn) {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hidden");
  }
});

// слайдер Обо мне

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
