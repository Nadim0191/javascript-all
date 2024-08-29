function calculateMoney(ticket ) {
    let gurdBill = 500;
   let perPersonLunch = 50;
   let eightPersonLunchBill = perPersonLunch*8
   let perDayTotalCost = gurdBill+eightPersonLunchBill;
   let ticketPrice = 120;
   let perDayIncome = (ticketPrice*ticket)-perDayTotalCost
   return perDayIncome
}

function checkName(inputName) {
    let modifyName = inputName.trim().toLowerCase();
    let lastCharacter = modifyName.charAt(modifyName.length-1);
    let isVowel = /[aeiou]/.test(lastCharacter);
 
    if (isVowel==true){
        return "goodName"
    }
    else{
        return " badName"
    }
}

function deleteInvalids(items) {
    let uniq = [];
  for ( let perItem of items ){
  
  if  (typeof perItem === "number"){
     uniq.push(perItem);
  }

 
}
return uniq
}

function password(obj) {
    const newArray = ["name", "birthYear", "siteName"];
    for (const arr of newArray ) {
        if (!obj.hasOwnProperty(arr) || obj[arr] === null) {
            return "Invalid - Property is missing.";
        } else if (arr=== "birthYear" && (typeof obj[arr] !== "number" || obj[arr].toString().length !== 4)) {
            return "Invalid - Birth year must be a 4-digit number.";
        } else if (arr=== "siteName" && typeof obj[arr] !== "string") {
            return "Invalid - Site name must be a string.";
        } else if (typeof obj[arr] !== "string") {
            return "Invalid - " + arr+ " must be a string.";
        }
    }
    const myPass = (obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1) ) + "#" + obj.name + "@" + obj.birthYear;
    return myPass ;
}
