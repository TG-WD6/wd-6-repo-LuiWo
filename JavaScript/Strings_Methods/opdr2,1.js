let someKittens = "De poes van de buur heeft kittens gehad! Hij vraagt of wij nog kittens willen.";
console.log(someKittens.length);
// 78


//Opd 1)

let firstHalf = someKittens.slice(0, 39);
console.log(firstHalf);
// De poes van de buur heeft kitten gehad!

let secondHalf = someKittens.slice(40);
console.log(secondHalf);
// Hij vraagt of wij nog kittens willen.


//Opd 2)

let someUpperKittens = someKittens.toUpperCase();
console.log(someUpperKittens);
// DE POES VAN DE BUUR HEEFT KITTEN GEHAD! HIJ VRAAGT OF WIJ NOG KITTENS WILLEN.


//Opd 3)
let firstKittens = someKittens.indexOf('kittens');
console.log(firstKittens);
// 26

let lastKittens = someKittens.lastIndexOf('kittens');
console.log(lastKittens);
// 63


// Opd 4

let charFirst = someKittens.charAt(26);
console.log(charFirst);
// k 


let charLast = someKittens.charAt(63);
console.log(charLast);
// k 

