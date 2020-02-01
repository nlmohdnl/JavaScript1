"use strict";

//Declare an object about omelete recipe
let  myRecipe = {mealName :  "omelete" ,
serves : 2 ,
ingredients : ["4 eggs","paprika/onion", "1 tsp salt/pepper" ]
}
//Log my recipe
const myRecipeArray = Object.entries(myRecipe); //this function will convert the object to an array of arrays
//myRecipe is now [["mealName","omelete"],["serves", "2"],["ingredients", ["4 eggs","paprika/onion", "1 tsp salt/pepper" ]]]

//this loop will through myRecipe
for (let i=0; i<3; i++){ 
    //myRecipeArray items are also arryas so we need to use double indexes to reach values
    if (i<=2){console.log(myRecipeArray[i][0].toString()+" : " + myRecipeArray[i][1])}
    else  { myRecipeArray.forEach(function(entry) {
        console.log(entry);
      });}}
      
    
     