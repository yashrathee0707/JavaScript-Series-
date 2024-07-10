const accountId = 144553 //cannot be changed, fixed value
let accountEmail = "YashRATHEE@google.com" //can be changed 
var accountPassword = "12345" //can be changed 
accountCity = "Jaipur" //not good method
let accountState; //undefined

accountEmail = "hc@g.com"
accountPassword = "2121212"
accountCity = "Delhi"

//do not use var because of issue in block scope and functional scope 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

console.log(accountId);


