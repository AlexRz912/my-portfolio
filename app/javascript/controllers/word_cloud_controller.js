import { Controller } from "@hotwired/stimulus"
//  static jsais plus quoi
// Connects to data-controller="word-cloud"

/*
  > Créer un array contenant les noms des classes
*/

export default class extends Controller {
  
  colorClasses = ["hello-title-color", "pres-subtitle-color", "here-subtitle-color", "portfolio-title-color"];
  connect() {
    console.log("Hello");
  }


}
