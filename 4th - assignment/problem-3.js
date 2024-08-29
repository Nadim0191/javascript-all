function deleteInvalids(items) {
    let uniq = [];
  for ( let perItem of items ){
  
  if  (typeof perItem === "number"){
     uniq.push(perItem);
  }

 
}
return uniq
}
let arrayItem = [ "NaN", 1,12,0 ,-1 ," undefined" ] 
let result = deleteInvalids(arrayItem)
console.log (result);

