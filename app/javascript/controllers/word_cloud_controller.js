import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["texts", "groupedTexts"];


  connect() {
    this.handleProjects(this.textsTargets);
  }

  handleProjects(target) {

    target.forEach((textGroup) => {
      this.setColors(textGroup);
      this.setSizes(textGroup);
      this.setOrientation(textGroup);
      this.getGeometry(textGroup);
      const textGroupSortedByWidth = this.sortByWidth(textGroup);
      this.setOpacity(textGroupSortedByWidth);
    });
  }

  setColors(textGroup) {
    textGroup.style.opacity = "80%";
    let colorClasses = ["hello-title-color", "pres-subtitle-color", "here-subtitle-color", "portfolio-title-color"];
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

  setOrientation(textGroup) {
    Array.from(textGroup.children).forEach((text) => {
      if (0 === Math.floor(Math.random() * 4)) {
        text.style.transform = "rotate(90deg)";
      }

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
      3: 5,
      2: 4,
      1: 3,
      0: 2
    };
    textGroup.forEach((text, i) => {
      console.log(opacityMap[i]);
      text.style.opacity = `${opacityMap[i]}%`;
    });
  }
}
