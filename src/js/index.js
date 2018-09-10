
import 'bootstrap'; //breathecode dom for more explicit errors
import 'breathecode-dom'; //DOM override to make JS easier to use
import '../style/index.scss';

window.onload = function(){
    
    let suit = suitGenerator();
    
    if (suit === "&#9829" || suit === "&#9830") {
        document.querySelector('#topsuit').style.color ="red";
        document.querySelector('#bottomsuit').style.color="red";
    } else {
        document.querySelector('#topsuit').style.color ="black";
        document.querySelector('#bottomsuit').innerHTML ="black";
    }
    
   document.querySelector('#cardnumber').innerHTML = numberGenerator();
   
   document.querySelector('#topsuit').innerHTML = suit;
   
   document.querySelector('#bottomsuit').innerHTML = suit;
   
  
    
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function numberGenerator() {
    
    let number = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
    
    return number[getRndInteger(0, 14)];
}

function suitGenerator() {
    let suits = ["&#9830", "&#9829", "&#9827", "&#9824"];
    
    return suits[getRndInteger(0, 4)];
}
