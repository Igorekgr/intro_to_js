// Write a function that takes an array of objects 
// representing books and returns an array containing 
// the titles of those books.

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

// let titlesOnly = myBooks.map((book) =>{
//     return `${book.title}`;
// })

// console.log (titlesOnly);


// Write a function that takes an array of objects representing 
// products and returns an array containing only the products that are currently in stock.


// let products = [
//     {
//         name: 'Product A',
//         quantity: 15,
//     },
//     {
//         name: 'Product B',
//         quantity: 0,
//     },
//     {
//         name: 'Product C',
//         quantity: 14
//     }
// ];

// let productsInStock = products.filter((product) =>{
//     return product.quantity > 0

// })
// console.log(productsInStock)




// let products = [
//     {
//         name: 'Product A',
//         quantity: 15,
//     },
//     {
//         name: 'Product B',
//         quantity: 0,
//     },
//     {
//         name: 'Product C',
//         quantity: 14
//     }
// ];

// function getProductNamesInStock(products) {
//     return products.filter(product => product.quantity > 0)
//       .map(product => product.name) ;        
// }

// console.log(getProductNamesInStock(products)); 






// Write a function that takes an array of objects representing 
// users and returns the first user whose email address matches 
// a given email.



// function findUserByEmail (users, email) {
//     return users.find (user => user.email === emailToFind);
// }


// let usersArray = [
//     { name: "John Doe", phoneNumber: "123-456-7890", email: "john.doe@example.com" },
//     { name: "Jane Smith", phoneNumber: "234-567-8901", email: "test.com" },
//     { name: "Alice Johnson", phoneNumber: "345-678-9012", email: "test.com" },
//     { name: "Bob Brown", phoneNumber: "456-789-0123", email: "bob.brown@example.com" }
// ];

// let emailToFind = "test.com";
// let result = findUserByEmail (usersArray, emailToFind);
// console.log(result);





// Write a function that takes an array of objects representing tasks and 
// returns true if all the tasks are marked as complete, otherwise returns false.


// function allTasksAreDone(tasks) {
//     return tasks.every(task => task.status === "completed");
// };

// let tasks = [
//     {
//         title: 'task 1',
//         status: 'completed', 
//     },
//     {
//         title: 'task 2',
//         status: 'completed', 
//     },
//     {
//         title: 'task 3',
//         status: 'completed', 
//     },
// ];

// let result = allTasksAreDone(tasks);
// console.log(result);






// Write a function that takes an array of objects 
// representing purchases and returns the total amount 
// spent on those purchases.


// let products = [
//       {
//         name: "product 1",
//         type: "Electronics",
//         price: 55,
//       },
//       {
//         name: "product 2",
//         type: "Electronics",
//         price: 800,
//       },
//       {
//         name: "product 3",
//         type: "Electronics",
//         price: 1200,
//        },
//     ];
    

//     function totalPrice (products) {
//         let total = 0; 
//         products.forEach(function(product) {
//             total += product.price; 
//         });
//         return total;
//     };

//    let result = totalPrice(products);
//    console.log(`Total price = ${result}`)



// let products = [
//       {
//         name: "product 1",
//         type: "Electronics",
//         price: 55,
//       },
//       {
//         name: "product 2",
//         type: "Electronics",
//         price: 800,
//       },
//       {
//         name: "product 3",
//         type: "Electronics",
//         price: 1233,
//        },
//     ];
    

//     function totalPrice (products) {
//         return products.reduce((total, product) => {
//             return total + product.price;  }, 0); }
         
            
//         let result = totalPrice(products);
//         console.log(`Total price = ${result}`)




// Write a function that takes an array of numbers as 
// input and returns the sum of all the numbers in the array.


// function sumOfArray(numbers) {
//     return numbers.reduce(function(total,number){
//     return total + number}, 0);
//     };
// let numbers = [1,3,5,33];
// let sum = sumOfArray(numbers);
// console.log(sum)




// Write a function that takes an array of strings as input 
// and returns a new array with all the strings converted to uppercase.

// let strings = ['Hello', 'My Name Is', 'test'];

// function convertToUpperCase (strings) {
//     return strings.map ((string) => {
//         return string.toUpperCase();
//     })
// }

// console.log(convertToUpperCase(strings));




// Write a function that takes an array of numbers as input 
// and returns a new array with all the even numbers from the original array.


// let arrayOfNumbers = [1,2,3,4,5,6,7,8,9];

// function showEvenNumbers (numbers){
//     return numbers.filter((number)=> {
//         return number % 2 === 0;
//     })
// }

// console.log(showEvenNumbers(arrayOfNumbers));


// Write a function that takes an array of strings as input and 
// returns a new array with all the strings that have a length of 4 or less.


// let arrayOfStrings = ['Hello', 'Hi', 'Lots of characters', 'more'];

// function displayShortWords (words){
//     return words.filter ((word) =>{
//         return word.length < 4;
//     })
// }

// console.log(displayShortWords(arrayOfStrings));
