// Build Object for  Bank accounts: A bank account can be 
// represented as an object with attributes such as account number, 
// balance, and account type. It can also have functions like deposit, 
// withdraw, and transfer.


let account = {
    accountNumber: 3211,
    balance: 34550,
    type: 'checking',
    deposit: function(){
        console.log(`Deposit the money`)
    },
    transfer: function(){
        console.log(`Money transfered`)
    }

};

// console.log(account);
// account.deposit();


// Suppose you are building an e-commerce application and you want 
// to create a new Product object with property name, price, manufacturer, 
// category

// Now add a description property to the Product 
// object you created

// Suppose the price of the Product object you 
// created earlier changes. Now the price increased by $10

// Remove the description property from the 
// Product object you created earlier.


let product = {
    propertyName: 'laptop',
    price: 1200,
    manufacturer: 'Dell',
    category: 'Electronics'

};


product.description = 'Dell Gamming laptop with i7 processor and 4TB ssd memory';

product.price = product.price + 10;


delete product.description;
// console.log(product);

let blogPosts = [
    {
        title:'title 1', 
        author:'Smith',
        date: '01/21/1990',
        content: 'Content 1'

    },
    {
        title:'title 2', 
        author:'Ray',
        date: '03/01/2012',
        content: 'Content 2'
    }, 
    {
        title:'title 3', 
        author:'King',
        date: null ,
        content: 'Content 3'
    }
];

for (let key in blogPosts){
    if (!blogPosts[key].date){
        console.log(`Please fill out the date for ${blogPosts[key].title}`)
    }
};


// for (let i = 0; i < blogPosts.length; i++) {
//     if (!blogPosts[i].date) {
//         console.log(`The blog post titled "${blogPosts[i].title}" has an empty date field.`);
//     }
// };



