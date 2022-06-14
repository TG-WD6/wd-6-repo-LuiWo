// Opdr 1)

var controler = 20;

if ( controler == 3) {
    console.log("I'm same as 3");
} else if ( controler > 4) {
    console.log("I'm bigger than 4");
}  else if ( controler > 11) {
    console.log("I'm bigger than 11");
}  else if ( controler < 3) {
    console.log("I'm smaller than 3");
}

// opdr 2)

// 2 : I'm smaller than 3
// 3 : I'm same as 3
// 4 : undifined  (nothing is same as 4 or > 4)
// 5 : I'm bigger than 4
// 20 : I'm bigger than 4 (statement comes before the > 11)



// opdr 3) 

// if/else type number possible?
var numberMonth = 1;


if ( numberMonth == 1) {
    console.log("It's Januari");
} else if ( numberMonth == 2) {
    console.log("It's Februari");
} else if ( numberMonth == 2) {
    console.log("It's Maart");
}
 else if ( numberMonth == 4) {
    console.log("It's April");
}
 else if ( numberMonth == 5) {
    console.log("It's Mei");
}
 else if ( numberMonth == 6) {
    console.log("It's Juni");
}
 else if ( numberMonth == 7) {
    console.log("It's July");
}
 else if ( numberMonth == 8) {
    console.log("It's August");
}
 else if ( numberMonth == 9) {
    console.log("It's September");
}
 else if ( numberMonth == 10) {
    console.log("It's October");
}
 else if ( numberMonth == 11) {
    console.log("It's November");
}
 else if ( numberMonth == 12) {
    console.log("It's December");
}
 else {
    console.log("Geen geldige maand!");
}


// opdr 4 

var month = 1;

switch (month) {
    case 1 : 
       console.log("It's Januari")
       break;
    case 2 : 
       console.log("It's Februari")
       break;
    case 3 : 
       console.log("It's Maart")
       break;       
    case 4 : 
       console.log("It's April")
       break;       
    case 5 : 
       console.log("It's Mei")
       break;
    case 6 : 
       console.log("It's Juni")
       break;
    case 7 : 
       console.log("It's Juli")
       break;
    case 8 : 
       console.log("It's Augustus")
       break;
    case 9 : 
       console.log("It's September")
       break;
    case 10 : 
       console.log("It's October")
       break;
    case 11 : 
       console.log("It's November")
       break;
    case 12 : 
       console.log("It's December")
       break;
    default:
        console.log("Geen geldige maand!")
}


// opdr 5)

// let x = 3;
// let results;

// if (x <= 4 && x >= 0) {
//     results = 2;
// } else {
//     results =5;
// }
// console.log(results)


a ?b:c

let x = 3;
let results;
x == 3 ? console.log( results=2) : console.log(results=5)