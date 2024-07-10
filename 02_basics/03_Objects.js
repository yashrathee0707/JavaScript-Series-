// singleton 

// Object Literals = way to declare objects
// Object.create  //constructor method

const mySym = Symbol("key1")


const Jsuser = {
    name: "Yash",
    "Full name": "Yash Rathee",
    [mySym]: "myKey1", //declaration of symbol is square brackets
    age: 20,
    Location: "Delhi",
    email: "yash@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]); //this is preferred 
// console.log(Jsuser[mySym]) 

Jsuser.email = "YASHRATHEE@@@@@@" //changed value
//Object.freeze(Jsuser) //next values wont be changed after this
//console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());
