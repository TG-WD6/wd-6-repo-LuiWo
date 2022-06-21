// opdr 1) Wat is het verschil tussen == en ===?

// ==  : Returns true if the operands are equal.
// ===  : Returns true if the operands are equal and of the same type.


// Opdr 2) Wat is het verschil tussen > en >=? En tussen < en <=?

// >  : Returns true if the left operand is greater than the right operand.
// >=  : Returns true if the left operand is greater than or equal to the right operand.

// <  : Returns true if the left operand is less than the right operand.
// <=  : Returns true if the left operand is less than or equal to the right operand.


// opdr 3)

let x = 4;
let y = 8;

if ( x == 4 && y == 8) {
    console.log("Result!")
};


// opdr 4)
if ( x == 4 || y == 8) {
    console.log("Result!")
};


// opdr 5)
if (!(x == 4 || y == 8)) {
    console.log("No Result!");
} else {
    console.log("Result!");
}


// opdr 6)
if ( !(x == 4 && y == 8)) {
    console.log("No Result!")
}  else {
    console.log("Result!");
}


// Opdr 7 t/m 11)

var big = 5;
var tiny = 10;

if ( big >= 5 && tiny <= 10) {
    console.log("I'm between 5 and 10!");
} else if ( big >= 11 && tiny <= 20 ) {
    console.log("I'm between 11 and 20!");
} else if ( big === 21 || tiny === 23 ) {
    console.log("I'm eiher 21 or 23!");
} else if( big <= 35 || big >= 40 && tiny <= 45 ) {
    console.log("I'm eiher smaller then 35 or between 40 and 45");
}


