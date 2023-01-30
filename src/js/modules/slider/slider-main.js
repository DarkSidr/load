import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(btns, prevModules, nextModules) {
    super(btns, prevModules, nextModules);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });

    try {
      this.hanson.style.opacity = "0";
      if (n === 3) {
        this.hanson.classList.add("animated");
        setTimeout(() => {
          this.hanson.style.opacity = "1";
          this.hanson.classList.add("slideInUp");
        }, 3000);
      } else {
        this.hanson.classList.remove("slideInUp");
      }
    } catch (e) {}

    this.slides[this.slideIndex - 1].style.display = "block";
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  modulesBtn(btns, number) {
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(number);
      });
    });
  }

  bindTriggers() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.plusSlides(1);
      });
      btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.modulesBtn(this.prevModules, -1);
    this.modulesBtn(this.nextModules, 1);
  }

  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector(".hanson");
      } catch (e) {}
      this.showSlides(this.slideIndex);
      this.bindTriggers();
    }
  }
}
