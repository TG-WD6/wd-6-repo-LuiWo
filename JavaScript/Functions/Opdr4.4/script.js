
// var names = (Esther, Madhwi, Nathan);
var names = document.getElementById("nameInput");
var teamOne = "Esther";
var teamTwo = "Madhwi";
var teamThree = "Nathan";





function nameChecker(names) {
  // Use DOM to get the input value and save it in the above var 
  // Function if/else it's own and then link into nameChecker

  if (names == teamOne || names == teamTwo || names == teamThree) {
    let result = console.log("Welcome " + names)

  } else 
      { let result = console.log("Name not recognized")
      }


 let inputNames = result;     
 return inputNames
};




// var inputNames = document.getElementsByTagName("input").innerText =" I should be working"; 


var resultChecker = (nameChecker(names), {return: result});
// var resultChecker = "I better fucking be working soon";
// console.log(resultChecker + " I work");



function placeResults() {
  // Use DOM to get the input value and save it in the above var 
   document.querySelector("p").innerText = ("Welcome, " + resultChecker);
};





// var resultChecker = function nameChecker(names) {return endChecker};
// var result = resultChecker(names);
// console.log(result + " I work");


// const x = function(names) {return endChecker};
// console.log(x);




// {return}
// var resultChecker = nameChecker(names);
// console.log(resultChecker);

// Store result from first function 
// let resultChecker = nameChecker();
// console.log(resultChecker);
