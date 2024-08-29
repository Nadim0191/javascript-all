// function arraysum(numbers) {
//     let sum = 0;
//     for ( let number of numbers){
//         // console.log(number)
//          sum = sum + number;
//     }
//     return sum;

// }
// let array = [12,13,14,15,16,17];
//  let answer = arraysum(array);
//  console.log (answer);

// function allAraay(numbers) {
//     let sum = 0;
//    for(number of numbers) {
//       sum=sum+number;
//    }
//    return sum;
// }
// let array = [12,13,12,12,12,14,15,17,17,21]
// let sum = allAraay(array);
// console.log(sum)
function arrayOfSum(number){
   let sum=0;
for (num of number){
   console.log(num);
   sum = sum+num;
}
return sum
}

let array = [1,2,3,4,5,6,7,8,9,20]
let answer = arrayOfSum(array);
console.log(answer)