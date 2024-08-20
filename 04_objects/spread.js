// let arrayOne = [1, 2, 3];
// let arrayTwo = [4, 5, 6];

// let allElements = [...arrayOne, ...arrayTwo];

// console.log(allElements);


function addStringToTheEnd(array, stringToAdd) {
    return [...array, stringToAdd];
}


let originalArray = ["apple", "banana", "cherry"];
let stringToAdd = "orange";

let newArray = addStringToTheEnd(originalArray, stringToAdd);
console.log(newArray);
