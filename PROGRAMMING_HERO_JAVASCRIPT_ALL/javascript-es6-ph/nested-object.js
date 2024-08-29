const nadim = {
 firstName : "nadim ",
  lastName: "shourov",
  adress :{
    street:[
        {id:1,road:30},
        {id:2,road:30}
    ]

    
  }
}
const nadim2 = {
    firstName : "nadim ",
     lastName: "shourov",
     adress :{
       street:[
           {id:1,road:30},
          
       ]
   
       
     }
   }
console.log(nadim2.adress.street[1]?.road)