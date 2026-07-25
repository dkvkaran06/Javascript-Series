"use strict"; // treat all js code as newer version

// alert(3+3) we are nodejs not browser 
// There should be code readability high in our code , so that it looks good readable , understable
// let age =12
// console.log(3+3)
// console.log(typeof age)
// console.log(typeof "true")
// console.log(typeof false)
// console.log(typeof null) // it is object 
// console.log(typeof undefined) // it is undefined
// let username;
// console.log(username)
// const heroes=["dev","karan"] // array made
// let myobject ={name:"dev",// object having key value pairs
//     age: 22,
// }
// let name =function greet(){// funtion with stored inside variable here function take name of varibale, only can be called by varibable name as it is inside variable  
//     console.log("Hello")
// }

// name()
// function abc() // abc as function name 
// {
//     console.log('how are u')
// }
// abc() 

//Stack memory for primitive data types
let name ="dev"
let y=name // here a copy of original value has been created 
y="rdx"
console.log(name) // original value is still no modification
console.log(y) // here it gets update but orignal value be safe

let userone={
    name:"dev",
    age:22
}
let usertwo=userone
usertwo.age=23
console.log(userone.age)
console.log(usertwo.age)