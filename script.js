var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector("button");


css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function colorSelector(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function random(){
    
    body.style.background = "linear-gradient(to right, rgb(" +
    Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) +
    "), rgb(" +Math.floor(Math.random()*255)+ ", " +Math.floor(Math.random()*255) + ", " +Math.floor(Math.random()*255)+
    ")";

    css.textContent = body.style.background + ";";
}

randomBtn.addEventListener("click", random);

color1.addEventListener("input", colorSelector);


color2.addEventListener("input", colorSelector);


