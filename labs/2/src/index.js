import Card from './components/Card';

function runOnLoad(){
    // Create container for us
    let element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    var newCard = new Card({content:"Sample value provided"});
    element.appendChild(newCard.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);