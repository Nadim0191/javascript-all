function oddAvg(numbers) {
    let odd = [];
    for (num of numbers){
       
        if( num % 2===1){
         odd.push(num)
        }
       
    }
    let sum = 0;
    tl= odd.length;
    for (oddserial of odd){
       
        sum = sum+oddserial
        total = sum/tl
     
        // console.log(sum)
      }
    return total;
}
let array = [121,123,120,110,125,111,166,1113,12121]
let result = oddAvg(array);
console.log(result)