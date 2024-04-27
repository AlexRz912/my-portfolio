import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-animation"
export default class extends Controller {
  static targets = [ "buttonText", "homepageText"];
  static outlets = [ "word-cloud-upper-div" ]

  addKeyframes() {
    this.homepageTextTarget.classList.add("homepage-texts-fade-out-left");
    this.buttonTextTarget.classList.add("button-fade-out-down", "disable-homepage-button");
    // this.transitionEndHandle();

    this.wordCloudAnim(this.wordCloudUpperDivOutletElement);
  }

  wordCloudAnim(elem) {
    const zoomKeyFrames = [
      {opacity : "1"}, // keyframe
      {opacity : "0"} // keyframe
    ]

    const zoomTiming = {
      duration : 1200,
      iterations : 1,
      easing : "ease-in"
    }
    elem.animate(zoomKeyFrames, zoomTiming);
    setTimeout( () => elem.style.display = "none", 1150);
    setTimeout( () => this.homepageTextTarget.style.display = "none", 1150);
    setTimeout( () => window.location.replace('/projects'), 1200); //trouver un moyen de reset la première page a time 0

  }
}
