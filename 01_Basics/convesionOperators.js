let score="32" // a string
let age="32abc"
let abc=null
console.log(typeof score)
console.log(typeof (score))
console.log(typeof abc)

let ValueInNumber=Number(score) // converted to number
let Value=Number(age) // it also converts to number but there is abc that also considered number that is issue
let Vale=Number(abc)
console.log(typeof ValueInNumber)
console.log(typeof Value)
console.log(Value) // prints nan
console.log(Vale)
let a=1
let b=Boolean(a)
console.log(b)