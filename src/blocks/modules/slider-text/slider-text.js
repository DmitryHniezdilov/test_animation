// <!-- Initialize Swiper -->

let sliderText = new Swiper('.js-slider-text', {
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
});

let sliderImg = new Swiper(".js-sliderImg", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: true,

  allowTouchMove: false,

  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },

  on: {
    init: function () {
      this.slides[2].classList.add("js-fade");
      this.slides[3].classList.add("js-fade");
      this.slides[4].classList.add("js-fade");
      this.slides[2].setAttribute("id", "js-scene1");
      this.slides[3].setAttribute("id", "js-scene2");
      this.slides[4].setAttribute("id", "js-scene3");
      initParallax("js-scene1");
      initParallax("js-scene2");
      initParallax("js-scene3");
    },

    transitionStart: function () {
      let removeFade = document.querySelectorAll(".js-fade");
      if (removeFade.length > 0) {
        for (let i = 0; i < removeFade.length; i++) {
          removeFade[i].classList.remove("js-fade");
        }
      }
      const removeId = document.querySelectorAll('[id*="js-scene"]');
      if (removeId.length > 0) {
        for (let i = 0; i < removeId.length; i++) {
          removeId[i].removeAttribute('id');
        }
      }
    },

    transitionEnd: function () {
      let imgActive = document.querySelectorAll(".swiper-slide-active");
      imgActive[1].classList.add("js-fade");
      imgActive[1].setAttribute("id", "js-scene1");
      let imgNext = document.querySelectorAll(".swiper-slide-next");
      imgNext[1].classList.add("js-fade");
      imgNext[1].setAttribute("id", "js-scene2");
      let imgPrev = document.querySelectorAll(".swiper-slide-prev");
      imgPrev[1].classList.add("js-fade");
      imgPrev[1].setAttribute("id", "js-scene3");
      initParallax("js-scene1");
      initParallax("js-scene2");
      initParallax("js-scene3");
    },
  },
});

// <!-- Initialize sliderImg -->

sliderText.on('slideNextTransitionStart', function () {
  sliderImg.slideNext(10, false);
});

sliderText.on('slidePrevTransitionStart', function () {
  sliderImg.slidePrev(10, false);
});

// <!-- Svg animation activate -->

let pathAnim = document.querySelector(".is-pathAnim");

sliderText.on('slideChangeTransitionStart', function () {
  pathAnim.classList.remove("is-pathAnim");
  setTimeout(function () {
    pathAnim.classList.add("is-pathAnim");
  }, 1);
});

// <!-- Parallax init for img -->

function initParallax(element) {
  let scene = document.getElementById(element);
  let parallaxInstance = new Parallax(scene);
}

// <!-- Init Parallax fot text and Splitting -->

document.addEventListener('DOMContentLoaded', function () {
  initParallax('js-text-scene');
  Splitting();
});
