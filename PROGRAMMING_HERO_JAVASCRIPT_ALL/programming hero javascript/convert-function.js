function shourovHieght(inch){
let feet= inch/12;
 let feetint= parseInt(feet)
 let fraction = inch%12;
 let totalHeight = feetint + " ft " + fraction + " inch "
return totalHeight;
}
let hieghtconverter = shourovHieght(69)
console.log(hieghtconverter)