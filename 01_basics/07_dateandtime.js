let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let mycreatedDate = new Date(2024, 0, 23)
// console.log(mycreatedDate.toDateString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

console.log(newDate.setSeconds(2));


newDate.toLocaleString('default', {
    weekday: "long"
})



