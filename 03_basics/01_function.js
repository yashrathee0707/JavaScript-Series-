

function sayMyName(){
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}

//sayMyName()

// function addTwoNumber(number1, Number2){
//     console.log(number1 + Number2);
// }

function addTwoNumber(number1, Number2){
    // let result = number1 + Number2
    // return result
    return number1 + Number2
}

const result = addTwoNumber(3, 4)

//console.log(result);

function loginUser(username){
    if(username == undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

//console.log(loginUser("Yash"))
//.log(loginUser())//undefined 

function calculateCartPrice(val1, val2, ...number1){ //rest operator
    return number1
}

console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Yash",
    price: 199
}

function handleObject(anyObject){
    
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "Same",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getarray){
    return getarray[1]
}

console.log((returnSecondvalue(myNewArray)));


