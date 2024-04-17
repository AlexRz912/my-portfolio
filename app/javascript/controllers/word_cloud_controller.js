import { Controller } from "@hotwired/stimulus"
//  static jsais plus quoi
// Connects to data-controller="word-cloud"

/*
  > Créer un array contenant les noms des classes
*/

export default class extends Controller {
  static targets = ["texts"]; //Capter les div de


  connect() {

    this.handleProjects(this.textsTargets);
    console.log(this.textsTargets);
  }

  handleProjects(target) {
    target.forEach((textGroup) => {
      this.setColors(textGroup); //set colors to texts for each group
      this.setSizes(textGroup);
      this.sortByDimensions(textGroup);
    });
  }

  setColors(textGroup) {
    textGroup.style.opacity = "60%";
    let colorClasses = ["hello-title-color", "pres-subtitle-color", "here-subtitle-color", "portfolio-title-color"];
    Array.from(textGroup.children).forEach((text) => {
      let colorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
      text.classList.add(colorClass); // Ajoutez votre classe à child

    });
  }

  setSizes(textGroup) {
    let fontSizeMultiples = [0.5, 1, 1.5, 2];
    Array.from(textGroup.children).forEach((text) => {
      let fontSizeMultiplier = fontSizeMultiples[Math.floor(Math.random() * fontSizeMultiples.length)];
      text.style.fontSize = `${40 * fontSizeMultiplier}px`; // Ajoutez votre classe à child
      fontSizeMultiples.splice(fontSizeMultiples.indexOf(fontSizeMultiplier), 1);
    });
  }

  sortByDimensions(textGroup) {
    Array.from(textGroup.children).forEach((text) => {
      text.setAttribute('data-width', text.getBoundingClientRect().width);
    });
  }

}
