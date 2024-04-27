import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["texts"];

  connect() {
    this.handleProjects(this.textsTargets);
  }

  handleProjects(target) {

    target.forEach((textGroup) => {
      this.setColors(textGroup);
      this.setSizes(textGroup);
      this.getGeometry(textGroup);
      const textGroupSortedByWidth = this.sortByWidth(textGroup);
      this.setOpacity(textGroupSortedByWidth);
      this.setAnimation(textGroup);
    });
  }

  setColors(textGroup) {
    let colorClasses = ["text-greenish", "text-blue", "text-lightblue", "text-purple"];
    Array.from(textGroup.children).forEach((text) => {
      let colorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
      text.classList.add(colorClass);
      colorClasses.splice(colorClasses.indexOf(colorClass), 1);
    });
  }

  setSizes(textGroup) {
    let fontSizeMultiples = [0.25, 0.5, 1, 2];
    Array.from(textGroup.children).forEach((text) => {
      let fontSizeMultiplier = fontSizeMultiples[Math.floor(Math.random() * fontSizeMultiples.length)];
      text.style.fontSize = `${40 * fontSizeMultiplier}px`;
      fontSizeMultiples.splice(fontSizeMultiples.indexOf(fontSizeMultiplier), 1);
    });
  }

  getGeometry(textGroup) {
    Array.from(textGroup.children).forEach((text) => {
      text.setAttribute('data-width', text.getBoundingClientRect().width);
      text.setAttribute('data-height', text.getBoundingClientRect().height);
      text.setAttribute('data-anchor-x', text.getBoundingClientRect().x);
      text.setAttribute('data-anchor-y', text.getBoundingClientRect().y);
    });
  }


  sortByWidth(textGroup) {
    return Array.from(textGroup.children).sort((a, b) => {
      const widthA = parseInt(a.getAttribute("data-width"), 10);
      const widthB = parseInt(b.getAttribute("data-width"), 10);
      return widthA - widthB; // Compare widths
    });

  }

  setOpacity(textGroup) {
    const opacityMap = {
      3: 10,//7
      2: 8,//5
      1: 6,//4
      0: 4//3
    };
    textGroup.forEach((text, i) => {
      text.style.opacity = `${opacityMap[i]}%`;
    });
  }

  setAnimation(textGroup) {
    Array.from(textGroup.children).forEach((text) => {

        this.setAnimationUtils(text);
    });
  }

  setAnimationUtils = (text) => {
    let coinFlip = Math.floor(Math.random() * 2);
    let newPosAddition = Math.random() * 1.5 + 0.5;

    let initialOpacity = text.style.opacity;
    // text.style.opacity = "0";

      let movement = 0;
      const intervalToClear = setInterval(() => {
        if (coinFlip === 1) {
          movement += newPosAddition;
        } else {
          movement -= newPosAddition;
        }
        text.style.position = "relative";
        text.style.left = `${movement}px`;
        if (!(this.isVisibleInViewportX(text))) {
          clearInterval(intervalToClear);
          text.style.left = "0px";
          this.fadeIn(text, initialOpacity);
          this.setAnimationUtils(text);
        }
      }, 33);

    //event listener
  }

  isVisibleInViewportX(elem) {
    let x = elem.offsetLeft;
    let width = elem.offsetWidth;
    let isVisible = ( x + width > ( window.scrollX ) && ( x < window.scrollX + window.innerWidth ));
    return isVisible;
  }

  fadeIn = (text, initialOpacity) => {
    const opacities = [
      { opacity : "0"},
      { opacity : `${initialOpacity}`}
    ]

    const fadeInConfig = {
      duration: 1000,
      iterations: 1
    }
    text.animate(opacities, fadeInConfig);
  }
}
