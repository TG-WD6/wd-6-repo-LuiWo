// Opdr 1) 

// document.getElementsByClassName  	Find elements by class name
// document.getElementsByTagName        Find elements by tag name
// document.querySelector               Selects first of type
// document.querySelectorAll            Selects all of same type
// element.innerHTML                    Change the inner HTML of an element (the tegs themselves)
// element.innerText                    Changes the text of an element



var elementByclass = document.getElementsByClassName("headerTwo");
console.log("I am a getElementsByClassName");
console.log(elementByclass);

var elementTag = document.getElementsByTagName("h1");
console.log(" I am a getElementsByTagName");
console.log(elementTag);

var selectQuery = document.querySelector("#firstPara");
console.log(" I am a querySelector");
console.log(selectQuery);


var allQuery = document.querySelectorAll("p");
console.log( " I am a querySelectorAll");
console.log(allQuery);

var htmlInner = document.getElementsByTagName("h3").innerHTML = "There is just a lot of random text here";
console.log(" I am a innerHTML");
console.log(htmlInner);

var textInner = document.getElementById("secondPara" ).innerText;
console.log(" I am a innerText");
console.log(textInner);


// opdr 2)

function pressButtone() {
    console.log("Hello World");
}

var input = document.getElementById(inputField);

function change(input) {
    console.log(input);
    var result = console.log(input * 2);
    return result ; 
}