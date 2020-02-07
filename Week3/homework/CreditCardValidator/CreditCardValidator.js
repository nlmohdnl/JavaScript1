
"use strict"

//Number must be 16 digits,


function digitsNumber(cardNu){
let cardNutoSt=cardNu.toString();
let cardNuLe=cardNutoSt.length;
if(cardNuLe!==16){
    return true ;
    
}
return false ;
};

//all of them must be numbers
function isAllNumbers(cardNu) {

  if (isNaN(cardNu)){
    return true ;
    
}
return false ;
};


//The final digit must be even

function finalDigit(cardNu) {
    let cardNutoString=cardNu.toString();
    let lastDigit= cardNutoString.charAt(cardNutoString.length-1)

    if (lastDigit%2 !==0){
      return true ;
      
  }
  return false ;
  };

  //The sum of all the digits must be greater than 16
  function digitSum(cardNu) {
    let cardNutoSt=cardNu.toString();
    let sum1=0;
    for (let j=0;j<16;j++){
        sum1+=Number(cardNutoSt.charAt(j));
    }

    if ( sum1<=16){
      return true ;
      
  }
  return false ;
  };

  function cardValidator(cardNu){
    let r1=digitsNumber(cardNu);
    let r2=isAllNumbers(cardNu);
    let r3=finalDigit(cardNu);
    let r4=digitSum(cardNu);
    let r5="valid card"
  
      if (r1){console.log("Number must be 16 digits");}
   if (r2){console.log("all of them must be numbers");}
    if (r3){console.log("The final digit must be even");}
     if (r4){console.log("The sum of all the digits must be greater than 16");}
    else if(!r1&&!r2&&!r3&&!r4){console.log("valid card")};
  
  
  
    };
  
  
 
console.log(cardValidator("9999777788880000"));
console.log(cardValidator("a92332119c011112"));
console.log(cardValidator("4444444444444444"));
console.log(cardValidator("1111111111111110"));
console.log(cardValidator("6666666666666661"));
console.log(cardValidator("6666666666661666"));

