var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 70,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1169: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
  },
});
