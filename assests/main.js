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
new Swiper(".saunas-slider", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1100: { slidesPerView: 3 }
  }
});
new Swiper(".chans-slider", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  //   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
  navigation: {
    nextEl: ".chans-section .swiper-button-next",
    prevEl: ".chans-section .swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1100: { slidesPerView: 3 }
  }
});
let currentStep = 0;
const steps = document.querySelectorAll(".quiz-step");
const progress = document.getElementById("quizProgress");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const quizButtons = document.querySelector(".quiz-buttons-premium");

function showStep(step) {
  steps.forEach((el, i) => {
    el.classList.toggle("active", i === step);
  });

  // Progress bar
  const percent = ((step + 1) / steps.length) * 100;
  progress.style.width = percent + "%";

  // Prev button
  prevBtn.style.display = step === 0 ? "none" : "inline-block";

  // Next button text
  nextBtn.textContent = step === steps.length - 2 ? "Отправить" : "Далее";

  // Hide buttons on final success screen
  if (step === steps.length - 1) {
    quizButtons.style.display = "none";
  } else {
    quizButtons.style.display = "flex";
  }
}

nextBtn.addEventListener("click", () => {
  // If not last input step → go next
  if (currentStep < steps.length - 2) {
    currentStep++;
    showStep(currentStep);
  } 
  // If last form step → show success screen
  else if (currentStep === steps.length - 2) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener("click", () => {
  currentStep--;
  showStep(currentStep);
});

// Init
showStep(currentStep);
document.getElementById("year").textContent = new Date().getFullYear();
 document.addEventListener("DOMContentLoaded", () => {
        const faqItems = document.querySelectorAll(".faq-item");

        faqItems.forEach((item) => {
          const header = item.querySelector(".faq-header");

          header.addEventListener("click", () => {
            if (item.classList.contains("active")) {
              item.classList.remove("active");
            } else {
              faqItems.forEach((i) => i.classList.remove("active"));
              item.classList.add("active");
            }
          });
        });
      });