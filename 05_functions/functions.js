// Write a function that takes in an array of numbers and
// returns the sum of all the numbers in the array.

// let array = function(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }
//  console.log(array([2,3,4]));

// function reverseString (str){
// let reversedString = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedString += str[i];

//     }
//     return reversedString;
// }

// let originalString = 'Whatsup';
// let result = reverseString(originalString);
// console.log(result);

// function reverseStr (str) {
//     return str.split('').reverse(). join('');
// }

// let originalStr = 'Hello';
// let reversed = reverseStr (originalStr);
// console.log(reversed);

// Write a function that takes in an array of objects representing people,
// where each object has properties for name, age, and gender,
// and returns an array of objects representing only the people who are over the age of 18.

// function printAdults(array) {
//   for (let i = 0; i < originalArray.length; i++) {
//     if (originalArray[i].age >= 18) {
//       console.log(`Adults = ${originalArray[i].name}, ${originalArray[i].age} years old`);
//     }
//   }
// };

// let originalArray = [
//   {
//     name: "Steeve",

//     gender: "Male",
//     age: 16,
//   },
//   {
//     name: "Igor",
//     gender: "Male",
//     age: 18,
//   },
//   {
//     name: "Micah",
//     gender: "Male",
//     age: 24,
//    },
// ];

// printAdults(originalArray)



// function filterAdults (people) {
//     let adults = [];
//     for (let i = 0 ; i < people.length; i++) {
//         if (people[i].age >= 18){
//         adults.push (people[i]);
//         }
//     }

//     return adults;

// };


// let originalArray = [
//     {
//       name: "Steeve",
  
//       gender: "Male",
//       age: 16,
//     },
//     {
//       name: "Igor",
//       gender: "Male",
//       age: 18,
//     },
//     {
//       name: "Micah",
//       gender: "Male",
//       age: 24,
//      },
//   ];


// console.log(filterAdults(originalArray));



// Write a function that takes in an array of
// numbers and returns a new array containing 
// only the even numbers from the original array.

// function showEvenNumbers (array) {
//     let evenNumbers = [];
//     for(let i = 0; i < array.length; i++) {
//     if(array[i] %2 === 0){
//     evenNumbers.push(array[i]);
//     }  
//     };
//     return evenNumbers;

// };

// let numbers = [1, 4, 5, 44, 32, 22, 33, 66, 67, 122,123,123,123,124, 124];
// console.log(showEvenNumbers(numbers));


// Write a function that takes in an array of strings and 
// returns a new array containing only the strings that start 
// with the letter "A".

// function namesStartsWithA(array) {
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     let singleString = array[i];
//     if (singleString[0].toLowerCase() === 'a' ){
//     newArray.push (array[i]);
//     }
// }

//     return newArray;
// };

// let myArray = ['iga', 'anama', 'Ouch', 'Apple'];
// console.log(namesStartsWithA(myArray));





// Write a function that takes in an array of objects representing books, where each object has 
// properties for title, author, and published, and returns an array of strings representing the 
// titles of all the books published in the year 2000 or later.


// function createStrings(books) {
//     let array = [];

//     for (let i = 0; i < books.length; i++) {
//             if (books[i].published > 2000){
//             array.push(`${books[i].title}`);
//         }
//     }

//     return array;
// }

// let myBooks = [
//     {
//         title: 'Title 1',
//         author: 'Author 1',
//         published: 2001
//     },
//     {
//         title: 'Title 2',
//         author: 'Author 2',
//         published: 1999
//     },
//     {
//         title: 'Title 3',
//         author: 'Author 3',
//         published: 2003
//     }
// ];

// const resultArray = createStrings(myBooks);
// console.log(resultArray);


// Write a function that takes in two numbers and returns the larger of the two.



// function largestNumber(num1, num2) {
//     return num1 > num2 ? num1 : num2;
// }
// 
// console.log(largestNumber(31,2));




// Write a function that takes in an array of numbers and 
// returns the smallest number in the array.

// function smallestNumber(array) {
//         let result = array[0];
//         for (let i = 0; i < array.length; i++){
//         if (array[i] < result) {
//             result = array[i];
//         }
//         }
//         return result;
// }
// let numbers = [3, -4, -54, -2, 4,];
// console.log(smallestNumber(numbers));




// Write a function that takes in an array of strings 
// and returns the longest string in the array.


// function getLongestString (firstNames) {
//     let longest = firstNames[0];
//     for (let i = 0; i < firstNames.length; i++){
//         if (firstNames[i].length > firstNames[0].length){
//             longest =  firstNames[i];
//         }
//     }
//         return longest;
// }
// 
// let names = ['Vita','Kate','Igor','Elizabeth'];
// let longestString = getLongestString (names)
// console.log (longestString);





// Write a function that takes in an array of objects representing students, 
// where each object has properties for name and grade, and returns an array 
// of objects representing only the students who have a grade of "A".



// function getBestStudents(students) {
//     let bestStudents = [];
//     for (let i = 0; i < students.length; i++){
//         let student = students[i];
//         if (student.grade === 'A'){
//         bestStudents.push(`${student.name}`)
//         }
//     }
//     return bestStudents;
// }


// let myStudents = [
//     {
//         name: "Igor",
//         grade: 'A'
//     },
//     {
//         name: 'Ivan',
//         grade: 'C'
//     },
//     {
//         name: "Dron",
//         grade: 'A'
//     },
// ];

// console.log(getBestStudents(myStudents))