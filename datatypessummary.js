// //Primitive - call by value

// //7 types : string, number, boolean, null, undefined, Symbol, BigInt
// //Symbol - unique value 

// const score = 100
// const scoreValue = 100.3 //number is number no decimal 

// const isLoggedIn = false
// const outsideTemo = null

// let userEmail;

// const id = Symbol('123')
// const anotherid = Symbol('123')

// console.log(id == anotherid);


// const bigNumber = 34252435346523423423562342352464236n
// console.log(typeof bigNumber);


// //Reference Type - Non Primitive - Call by reference

// //Array, Objects, Functions, 

// const heros = ["Superman", "Siderman"]
// let obj = {
//     name: "Yash",
//     age: "20"
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof heros);

//Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object


//****************Memory************* */
//stack(Primitive), heap(Non primitive) 
  
let myYoutubename = "yashRathee"

let anothername = myYoutubename
anothername = "Chaiiiii"

console.log(myYoutubename);
console.log(anothername);


let user1 = {
    email: "user@google.com",
    upi: "user@hdfc"
}

let user2 = user1

user2.email = "YASH@@@@"

console.log(user1.email);
console.log(user2.email);


