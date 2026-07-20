const accountId=12334
let accountEmail ="dkvkaran2004@gmail.com"
var accountPassword ="1234" // prefer not to use var because of block scope and functional scope.

accountCity="Jaipur"
//accountId=32424 cannot be done as const do not allow reassigned or redeclaration.
let accountState; // a null variable will show undefined as value.
accountEmail="dev@gmail.com"
accountPassword="23433"
accountCity="Delhi"
console.log(accountId) // for printing single 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 
// for printing more things we use table
