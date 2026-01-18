const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
new Swiper(".hero-swiper", {
  loop: true,
  effect: "fade",
  speed: 900,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
navigation: {
            nextEl: "[data-slider-button='2']",
            prevEl: "[data-slider-button='1']"
        }
});