const number = [12,13,12,12,16,14];
const double = []

for (const num of number){
    const doubles = num*2
    double.push(doubles)
}
console.log (double)

// function double2(num) {
//     const result = num*5
//     return result
// }
// console.log(number.map(double2))
