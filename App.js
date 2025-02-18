"use script"
let id = document.querySelector("p");
let adviceText = document.querySelector("h1");
let btn = document.querySelector("#advice-btn");

async function getAdvice(){
    
    try {
        let request = await fetch(`https://api.adviceslip.com/advice`);
        let response = await request.json();
        adviceText.innerText = `"${response.slip.advice}"`;
        id.innerText = `ADVICE #${response.slip.id}`
    } catch (error) {
        console.log(error);
        
    }
}
btn.addEventListener("click",getAdvice)
window.addEventListener("load",getAdvice)