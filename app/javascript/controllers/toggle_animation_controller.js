import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-animation"
export default class extends Controller {
  static targets = [ "buttonText", "homepageText", "backgroundEaseInRight" ];

  addKeyframes() {
    this.homepageTextTarget.classList.add("homepage-texts-fade-out-left");
    this.buttonTextTarget.classList.add("button-fade-out-down", "disable-homepage-button");
    this.backgroundEaseInRightTarget.classList.add("background-fade-in-right", "background-opacity");
    this.transitionEndHandle();
  }

  transitionEndHandle() {
    this.backgroundEaseInRightTarget.addEventListener("animationend", () => {
      fetch('/controller/action', {
        method: 'POST',
        headers: { //Comprendre ce qu'il se passe dans headers, reviser les cours sur l'ajax
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ transition_finished: "true" })
      });
    });
  }
}
