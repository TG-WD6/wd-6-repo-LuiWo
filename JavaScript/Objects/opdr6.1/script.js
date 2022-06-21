// opdr 1


 let favPetOne = {  
    name: "Jinx",
    soort: "Cat",
    gender: "Female",
    attittude: "Sassy"
 }



 let favPetTwo = {  
    name: "Archie",
    soort: "Bunny",
    gender: "Male",
    attittude: "Bratty"
 }

 let favPetThree = {  
    name: "Floppy",
    soort: "Dog",
    gender: "Male",
    attittude: "Hyper"
 }


// Object Constructor
let objectConstructed = new Object();

objectConstructed.name = "Brutus";
objectConstructed.Dog = "Dog";
 
console.log(objectConstructed);

// Literal Constructor
let litterallyConstructed = {
    name: "Brutus",
    soort: "Dog",
}

console.log(litterallyConstructed);

// Function Constructor
function Pet(name, soort) {
    this.name = name
    this.soort = soort
}

let functionConstructed = new Pet("Brutus", "Dog")

console.log(functionConstructed);

// Singleton Constructor
let singleton = new function() {
    this.name = "Brutus",
    this.soort = "Dog"
}

console.log(singleton);


// Class-based Constructor
class bestDoggy {
    constructor(name, soort) {
        this.name = name
        this.soort = soort
    }

    goodDoggy() {
        console.log(`${this.name} is a really good boy`)
    }
}

const Dog = new bestDoggy("Brutus", "Dog")

console.log(Dog);



//  opdr 2

// Object.create() 


const ageOne = Object.create( {favPetOne, age: 3})
const ageTwo = Object.create({favPetTwo, age: 2})
const ageThree = Object.create({favPetThree, age: 8})

console.log(ageOne);
console.log(ageTwo);
console.log(ageThree);


// opdr 3

let people = [

personOne = {
    name: "Jeff",
    age: 25
},


personTwo = {
    name: "Anny",
    age:8
},


personThree = {
    name: "Sandy",
    age: 34
},


persoFour = {
    name: "Julius",
    age: 49
},


personFive = {
    name: "Lucy",
    age: 28
},


personSix = {
    name: "Mario",
    age: 50
},


personSeven = {
    name: "Mike",
    age: 13
},


personEight = {
    name: "Maxy",
    age: 4
},


personNine = {
    name: "Ruby",
    age: 17
},


personTen = {
    name: "Weis",
    age: 20
},

]

console.log(people);


