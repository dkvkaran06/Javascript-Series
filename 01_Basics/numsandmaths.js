// const score=49.53
// console.log(typeof score)
// const sc=new Number(499)
// console.log(typeof sc)
// // HERE WE HAVE ALSO SOME FUNCTIONS 
// console.log(score.toString())
// console.log(typeof score)
// console.log(sc.toString().length) 
// console.log(sc.toFixed(2))

// console.log(score.toPrecision(4)); // precision count starts from before decimal 
// const hundred=1000000
// console.log(hundred.toLocaleString());
// console.log(hundred.toLocaleString('en-IN')) /// THIS IS FOR INDIAN STYLE NUMBER 


// //++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++
// console.log(Math.round(3.22))
// console.log(Math.abs(-3))
// console.log(Math.ceil(4.5)) //WILL GIVE UPPER VALUE
// console.log(Math.floor(3.3)) //WILL GIVE LOWER VALUE
// console.log(Math.max(3,4,3,2,5,7))
// console.log(Math.min(3,5,1,5,5))

//RANDOM FUNCTION
// console.log(Math.random());
// console.log((Math.random()*10)+1); // to get value between 1 and 10 we have added 1
// //now needed single value so floor functino
// console.log(Math.floor(Math.random()*10)+1)


// // so for getting value between two points we neeed trick so 
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) // THIS FORMULA IS IMPORTANT TO REM 
// THAT MIN AT LAST ENSURES YOUR VALUE MUST BE BETWEEN 10 AND 20 NOT FROM 0
// MIN IS USED TO SHIFT THE STARTING POINT FROM 0 TO 10 IN THIS SCOPE 
