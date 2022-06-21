
let input = nameInput.value;
  var teamOne = "Esther";
  var teamTwo = "Madhwi";
  var teamThree = "Nathan";

function nameChecker(input) {

  let outCome;
  let howdy = "Welcome";
  let wrong = "Sorry, I don't know you";

  if (input == teamOne || input == teamTwo || input == teamThree) {
    outCome = console.log(howdy+ " " + input);
    return outCome;

  } else {
    outCome = console.log(wrong);
    return outCome;

  }
};


function myFunction(nameChecker) {


  let result = document.createElement("p");
  let newSentence = nameInput.value;
  result.innerText = ("Welcome " + newSentence);
  document.body.appendChild(result);
};

