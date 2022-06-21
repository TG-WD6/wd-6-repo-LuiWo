var dutchSports = ["Voetbal", "Hockey", "Schaatsen"];
console.log(dutchSports);

//opdr 1

dutchSports.push("Zeilen", "Zwemmen");
console.log(dutchSports);


//opdr 2
dutchSports.unshift("Volleybal");
console.log(dutchSports);

//opdr 3

 var ballSports = dutchSports.slice(0, 3);
 console.log(ballSports);


//opdr 4
// console.log(dutchSports + " With ballsport");

console.log(dutchSports.slice(3));


//opdr 5 
ballSports = ballSports.sort();
console.log(ballSports);

// opdr 6 nog te doen
console.log(ballSports);


// opdr 7  nog te doen
 

var sportsLength = ballSports.length;
console.log(sportsLength);
