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
  slidesPerView: numberOfSlides(),
  slidesPerColumn: 1,
  spaceBetween: 10,

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
