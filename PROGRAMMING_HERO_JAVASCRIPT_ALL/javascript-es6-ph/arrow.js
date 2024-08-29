function minus (num1,num2){
    const resullt = num1 - num2
    return resullt
}

const firstResut = minus(20,5);
console.log (firstResut)

const secondResult = (a,b)=>a-b
const answer = secondResult (80,20)
console.log (answer)

const nadim = number => number[4]
const array = nadim([1,2,13,14,12,14,12])
console.log (array)

const getpi = ()=>Math.PI
console.log(getpi())
const nadimtwo = [12,11,121,123]
const nadimone =[ ...nadimtwo]
nadimone.push (1212)
console.log(nadimtwo)

const history = {
    name : "nadim mahmud",
     age : 12,
     education : 'honurs 4th year'
}
console.log (history.education)

const {name:boyos} = history;
console.log(boyos)

const  [no1,no2] = [12,13]
console.log(no1)
function multiple(a,b) {
    return [ a+5,b+7]

    
}
const [prothom , dityito] = multiple (10,20)
console.log (prothom,dityito)
