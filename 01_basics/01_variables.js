const accountId = 14458
let accountEmail =  "jeetchoudhary@gmail.com"
var accountPassword = "12345"
accountCity="jaipur"
let accountState;

//accountId=2    // not allowed

accountEmail="hc@hc.com"
accountPassword="12212"
accountCity="Bengaluru"


console.log(accountId);

/*
Prefer not to use var
bacause of issue in block scope and functional block
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])