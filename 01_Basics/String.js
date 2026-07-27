 const name ="dev"
let vale=23
// console.log(name + vale + " Hellp") 
console.log(name[1])
console.log(name.length)
// so now we will be using placeholder that will be easy and clear
console.log(`hello ${name} is ${vale} years`)
 //back tex(`)
const n= new String("karan")
// console.log(n.__proto__)
// console.log(n.length)
// console.log(n.toUpperCase())
// console.log(n[2])
// console.log(typeof name);

// console.log(typeof n)

// console.log(n.charAt(4))
// console.log(n.indexOf('r'))
const newString=n.substring(0,4)
console.log(newString)
const news=n.slice(-5,3) //here in this case start = lenght(5)+start(-5), so (0,3) "kar"
console.log(news);
const na=new String("https://chatgpt.com/c/")
console.log(na.replace("https","2"))
console.log(na);

console.log(na.includes("dev"))
console.log(na.split("."))///
