const accountId = 144553  //can't change const value
let accountEmail = "gayu@google.com"
var accountPassword = "123456789"
accountCity = "Chanadrapur"
let accountState;

// accountId = 2

accountEmail = "gayu@hj.com"
accountPassword = "5995963984"
accountCity = "jh"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])