import { Controller } from "@hotwired/stimulus"
//  static jsais plus quoi
// Connects to data-controller="word-cloud"

/*
  > Créer un array contenant les noms des classes
*/

export default class extends Controller {
  static targets = ["texts"]; //Capter les div de


  connect() {
    

    this.textsTargets.forEach((textGroup) => {
      textGroup.style.opacity = "50%";
      Array.from(textGroup.children).forEach((text) => {
        text.classList.add(colorClasses[Math.floor(Math.random() * colorClasses.length)]); // Ajoutez votre classe à child
      });
    });


    console.log(this.textsTargets);
  }


}
