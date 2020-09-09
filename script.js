const playButtonSelectors = document.querySelectorAll(".fa-play");
const youtubeVideoSelector = document.querySelector("#youtubeVideo");
const iframeSelector = document.querySelector("#iframeVideo");

playButtonSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    iframeSelector.src = selector?.dataset?.link
      ? selector.dataset.link
      : "https://www.youtube.com/embed/gEcK8U_QenI";
    youtubeVideoSelector.classList.add("show");
  });
});

const numberOfSlides = () => {
  return Math.floor(window.innerWidth / 480);
};

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
    1664: {
      slidesPerView: 4,
    },
    2500: {
      slidesPerView: 5,
    }
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  debugger: true
});


var slugSwiper = new Swiper(".swiper-container-slug", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
    2000: {
      slidesPerView: 5,
    }
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  debugger: true
});

// Spinner

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};


// Carousel Container

const Swiper1 = new Swiper(".swiper-container1", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination2",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".carousel-scrollbar2",
  },
  debugger: true
});