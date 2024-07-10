const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "batman"]

//marvel.push(dc)
// console.log(marvel);

// const all = marvel.concat(dc)
// console.log(all); //concat better than push

const all = [...marvel, ...dc] //spread used for more than 2 arrays
// console.log(all);
const anotherarray = [1,2,3, [4,5,6], 7, [6,7, [4, 5]]]
const realanother = anotherarray.flat(Infinity)
//console.log(realanother);

console.log(Array.isArray("yash"))
console.log(Array.from("Yash"));
console.log(Array.from({name: "Yash"}));//cannot convert directly so []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


