
// while(i > 11){
//     console.log(`${i} x 10 = ${i * 10} `);
//     i--;


// };

// let i =20;
// for(let i = 0; i <= 10; i++) {
//     console.log (i)
// };


// let i = 5;

// while ( i > 0 && i <= 150){
//     console.log(i);
//     i++;
//     if (i == 100) {break;}
// };


let products = [
    {
        name: 'Product A',
        price: 25, 
        quantity: 3
    },

    {
        name: 'Product B',
        price: 20, 
        quantity: 4
    },
    {
        name: 'Product C',
        price: 10, 
        quantity: 9
    },
    {
        name: 'Product D',
        price: 15, 
        quantity: 5
    },
    {
        name: 'Product E',
        price: 40, 
        quantity: 10
    }
];


// 2. Loop through the array using a for loop and print out the name and price of each product.

// for (let i = 0; i < products.length; i++) {
//     console.log (`${products[i].price}`);

// }


// let lowestPrice = products[0].price;
// let cheapestProduct = products[0];

// for (let i = 1; i < products.length; i++) {
//     if (products[i].price < lowestPrice){
//         lowestPrice = products[i].price;
//         cheapestProduct = products[i];
//     }
// }
// console.log(`Product ${cheapestProduct.name} is the cheapest at $${cheapestProduct.price} `);



// let mostInStock = products[0].quantity;
// let itemMostPopular = products[0];

// for (let i = 1; i < products.length; i++){
//     if (products[i].quantity > products[0].quantity ){
//         mostInStock = products[i].quantity;
//         itemMostPopular = products[i];
//     }
// };
// console.log (`Name of the product: ${itemMostPopular.name}`)
// console.log (`Higher avalability is ${itemMostPopular.quantity}`);
// console.log (`Most popular product's cost is $${itemMostPopular.price}`);



// 1 2 3 4 5 
// quantity
// price

// 1 = quantity1 * price1 
// total 1 + 2 + 3 ...


// let totalPrice = 0;

// for (let i = 1 ; i < products.length; i++){
//     totalPrice += products[0].price * products[0].quantity;
// }

// console.log (`${totalPrice} is the total price of all products in stock`);


for ( let i = 1; i <= 100; i++ ) {
    if (i %3 === 0 && i %5 === 0){
        console.log (`FizzBuzz`);
    } 
    else if (i %3 === 0){
        console.log (`Fizz`);
    } else if (i %5 === 0 ){
        console.log (`Buzz`);
    } else {
    console.log (i);
    }

}



