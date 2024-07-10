const myArray = [0,1,2,3,4,5]
const myHeros = ["Superman", "Spiderman"]
const myArr2 = new Array(1,2,3,4)



// console.log(myArray[3]);

//shallow copy
//deep copy 

//array methods
// myArray.push(6);
// myArray.push(8);

myArray.unshift(9)
myArray.unshift(8)
myArray.shift()

// console.log(myArray.includes(9));
// //console.log(myArray);

// console.log(myArray.indexOf(4));

const newArray = myArray.join() //converts to string 

// console.log(myArray);
// console.log(newArray); 

//slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1,3)

console.log(myn2); //last range included and original array
console.log("C ", myArray);


