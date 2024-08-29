// let nadim ={
//     height:50,
//     class : "honurse 3rd year",
//     ssc: 2016,
//     hsc:2018,
// }
// // console.log(nadim.height);
// console.log(Object.keys(nadim));
let csc = {
    depertment:"csc",
    year : "2018",
    subject : {
        sub1: "softoware",
        sub2: "web-dev",
    },
    gpa:"a+",
    book: ["java","python", "php","go-lang"]
}
delete csc.year
 csc.book[3]="node-js"
// console.log(csc)
for(prop in csc){
    console.log(prop, ":", csc[prop])

}
