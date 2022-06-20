
//Opdr1
var myNumber = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10];
console.log(myNumber);

//Opdr2
var myFruits = ["Appel", "Aardbei", "Banaan", "Mango", "Figs"];
console.log(myFruits);

//Opdr3
console.log(myFruits[0]);
console.log(myFruits[1]);

//Opdr4

var random = Math.floor(Math.random() * myNumber.length);
console.log(random); //7

// console.log(myFruits[7]); //undifined
// console.log(myFruits[5]); //undifined
// console.log(myFruits[3]); //Mango
console.log(myFruits[random]); // from 0 to 4 fruits are given, higher then 5 results undifined.

//opdr5 
console.log(myFruits.lenght);


//Opdr6 not fully working.
function fruits() {
    (myNumber) % (myFruits[random]) };

console.log(fruits());  //NaN


//opdr 7
myFruits[0] = "Peer";
console.log(myFruits);

//Opdr 8 not working fully yet
var soortedFruits = myFruits.sort();
console.log(soortedFruits);