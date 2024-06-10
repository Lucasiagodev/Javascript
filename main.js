
// Menu section

document.querySelector('#open-nav-menu').addEventListener('click', function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open")
});

document.querySelector('#close-nav-menu').addEventListener('click', function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
});

//greeting section 

const greetingText = "Good morning";
const weatheCondition = "summy";
const userLocation = "New York";
let temperature  = "35.674";
let weatheText = `The weather is ${weatheCondition} in ${userLocation} it s${temperature.toString()}` ;
console.log(weatheText);

document.querySelector('#greeting').innerHTML = greetingText;
document.querySelector('p#weather').innerHTML = weatheText;