// const shourov = [12,13,17,19];
// var shourov1 = shourov[3];
// console.log(shourov1);
// .........array---looping---
// const nadims = [12,13,14,14,15,14,12,15,16]
// for (let nadim of nadims){
//     console.log(nadim)
// }
// const nadims = [12,13,14,14,15,14,12,15,16]
// for (let i = 0; i<=nadims.length; i++){
// console.log (nadims[i]);
// }
// how to define an array | Indexed array
// array literal
let fruits // declaration
fruits = [ "orange", "banana", [12, 13] , "apple" ," ", true, null, undefined, 12] ; // initialization
console.log(fruits);

// less or almost no use
let students = new Array("Shuma", "Ahadi", "Nadim");
console.log(students)

let courses = Array("PHP", "JavaScript", "Python");
console.log(courses)

// How to access an array
//alert(fruits)
//alert(courses)
console.log(fruits[2])

// how to assign value to an array index

fruits[1] = "grapes" // assign
fruits[2][2]=14
fruits[2][3]=19
console.log(fruits)