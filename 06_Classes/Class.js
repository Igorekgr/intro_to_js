// Create a class called Animal that has a name property and a speak method. 
// The speak method should log a message to the console saying "Hello, my name is 
// {name}." Create an instance of the Animal class and call the speak method.

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     speak(){
//         console.log (`My name is ${this.name}`);
//     }
// }

// let animal1 = new Animal("Cat");
// animal1.speak();



// Create a class called Person that has name and 
// age properties, and a greet method that logs a message to the console saying 
// "Hello, my name is {name} and I am {age} years old.
// " Create an instance of the Person class and call the greet method.


// class Person{
//     constructor(name, age){
//         this.name = name; 
//         this.age = age;
//     }

//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// };

// let person1 = new Person ('Jeff', 34);
// person1.greet();


// Create a class called Car that has make, model, and year properties, 
// and a start method that logs a message to the console saying 
// "The {make} {model} is starting." 
// Create an instance of the Car class and call the start method.


// class Car{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     start(){
//         console.log(`${this.make} ${this.model} is starting.`);
//     }
// }
// let newCar1 = new Car('BMW', '750', '2024');
// newCar1.start();



// Create a class called Rectangle that has width and height properties, 
// and a getArea method that returns the area of the rectangle. 
// Create an instance of the Rectangle class and call the getArea method.



// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     getArea(){
//       return this.width * this.height;
//     }

// }

// let rectangle1 = new Rectangle (15,3);
// console.log(rectangle1.getArea());



// Create a class called BankAccount that has accountNumber, 
// accountHolderName, and balance properties, and a deposit method that takes in an amount and 
// adds it to the balance. Create an instance of the BankAccount class 
// and call the deposit method with an amount.



// class BankAccount {
//         constructor (accountNumber,accountHolderName, balance=0){
//             this.accountNumber = accountNumber;
//             this.accountHolderName = accountHolderName;
//             this.balance = balance;
//         }
//         deposit(amount){
//             this.balance += amount;
//             return (`Deposited $${amount}. New balance is $${this.balance}.`);
//         }
// }


// let newAccount = new BankAccount (123123, "Igor Zverev", 0);
// console.log(newAccount.deposit(50088));
// console.log(newAccount.deposit(10000));





// Create a class called Person that has name and email properties, 
// and a sendEmail method that takes in a message and sends an email to the person's email address. 
// Create an instance of the Person class and call the sendEmail method with a message.\


// class Person {
//     constructor (name, email){
//         this.name = name;
//         this.email = email;
//     }
//     sendEmail (message) {
//         console.log (`New message to ${this.email} has been sent: ${message}`);
//     }
// }

// let newPerson = new Person ('Jessica', 'test123.com');
// newPerson.sendEmail('Welcome to our group chat!')





// Create a class called Product that has name, price, and description properties, 
// and a discount method that takes in a percentage and returns the discounted price. 
// Create an instance of the Product class and call the discount method with a percentage.


class Product {
    constructor (name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
    }

    getDiscount(percentage){
        let discountedPrice =  this.price - (this.price * percentage / 100);
        console.log (`Original price of ${this.name} is ${this.price}$, but with ${percentage}% discount, your new price would be ${discountedPrice}$`)
    }
}

let newProduct = new Product ("Laptop", 1000, "Short Desctiption");
newProduct.getDiscount(13);
