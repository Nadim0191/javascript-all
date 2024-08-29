function trueFalse(number,boolean) {
    if (boolean===true){
        let result = number*2
        return result
    }
    else{
        let result = number*3
        return result
    }
}
let number1 = 30;
let number2 = 20;
let b1 = true;
let b2 = false;
console.log(trueFalse(number1,b2))
console.log(trueFalse(number2,b1))