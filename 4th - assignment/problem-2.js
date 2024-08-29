// function isGoodName(name) {
//     // Remove leading and trailing whitespaces
//     let trimmedName = name.trim().toLowerCase();

//     // Check if the last character is a vowel
//     let lastCharacter = trimmedName.charAt(trimmedName.length - 1);
//     console.log(lastCharacter)
//     let isVowel = /[aeiou]/.test(lastCharacter);

//     return isVowel ? 'Good Name' : 'Bad Name';
// }
// let myName = "nadim";
// let result = isGoodName(myName);
// console.log(result)
// let myname = "nadim";
// let lastcharecter = myname.charAt(3);
// let isVowel = /[aeiou]/.test(lastcharecter);
// console.log(lastcharecter)
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


