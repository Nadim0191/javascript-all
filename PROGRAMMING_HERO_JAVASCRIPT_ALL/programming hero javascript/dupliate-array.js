function duplicatrArray(dpa) {
    let uniqe = [];
  for( singledpa of dpa){
    if (uniqe.includes(singledpa)===false){
        uniqe.push(singledpa);
    }
  }
  return uniqe;
}

let arr = ["nadim","sadim","badim","latim","nadim","sadim"]
let result = duplicatrArray(arr);
console.log(result);