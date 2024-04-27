import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="card-hover-animations"
export default class extends Controller {
  static targets = ["appDesc"];
  connect() {
    console.log("oui");
  }

  showMobileAppDesc() {
    this.appDescTarget.classList.add("mobile-app-desc-fade-in");
  }
   //
}
