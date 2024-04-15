import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-animation"
export default class extends Controller {
  static targets = [ "buttonText", "homepageText", "backgroundEaseInRight" ];
  addKeyframes() {
    this.homepageTextTarget.classList.add("homepage-texts-fade-out-left");
    this.buttonTextTarget.classList.add("button-fade-out-down", "disable-homepage-button");
    this.backgroundEaseInRightTarget.classList.add("background-fade-in-right", "background-opacity");
  }
}
