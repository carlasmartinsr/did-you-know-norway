import {facts} from "./data.js"
const btnReveal = document.querySelector("#btn-reveal")
const factDisplay = document.querySelector("#fact-display")
let randomIndex


 factDisplay.innerHTML=`
    <img src="img-facts/cat.svg">
    <p>Tap the button to discover a fun fact!</p> `


function revealFact(){
 randomIndex = Math.floor(Math.random() * facts.length)
 factDisplay.innerHTML=`
    <img src="${facts[randomIndex].image}">
    <p>${facts[randomIndex].fact}</p> `
}

btnReveal.addEventListener("click",revealFact)