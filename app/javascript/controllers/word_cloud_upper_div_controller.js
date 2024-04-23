import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="word-cloud-upper-div"
export default class extends Controller {

  static targets = ["cloud"];
  connect() {
    this.cloudTarget.style.opacity = "0";
    setTimeout(() => this.cloudFadeIn(this.cloudTarget), 2500);
  }

  cloudFadeIn() {
    this.cloudTarget.classList.add("cloud-fade-in");
    this.cloudTarget.style.opacity = "100";
  }
}
