
console.log(localStorage);
 


//SAVES SEARCH INPUT INTO LOCALSTORAGE
const submitSearch = document.getElementById("submitSearch");
submitSearch.onclick = function () {
let checkStorage = localStorage;
let userInput = document.getElementById("userInput");
let searchInput = userInput.value;
let arrayStorage = Array(searchInput);


    if (searchInput) {
        // localStorage.setItem(arrayStorage, searchInput);
        localStorage.setItem(arrayStorage, searchInput);
        console.log(searchInput + " I work at the button");
        console.log(checkStorage);
    }


 
};


//AUTOCOMPLETE
//gets localStorage key and pass in an array
//set storage object into an array
//filter throught the storage array
//pass the strings in uppercase or lowercase
//



//CLEARS LOCALSTORAGE
const removeSearchData = document.getElementById("removeSearchData");
removeSearchData.onclick = function () {
    localStorage.clear();
    console.log(" I clear stuff")
    console.log(localStorage);
};


submitSearch.addEventListener("click", (event) => event.preventDefault());
removeSearchData.addEventListener("click", (event) => event.preventDefault());


export default {};