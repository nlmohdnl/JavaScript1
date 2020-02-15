"use strict"
//Number must be 16 digits
function digitsNumbers(number) {
if(number.length!==16){
return true;
} 
return false;
};
 //all of them must be numbers

function isAllNumbers(number) {
if(isNaN(number)){
return true;
} 
return false;
};
//You must have at least two different digits represented 

function isAllSame(number) {
    let count = 0 ;
    for (let i = 1 ; i < number.length; i++){

if(number.charAt(0)==number.charAt(i)){count++


    
}
if (count===15)

return true;
    } 
    return false;
    };

    //The final digit must be even
   
    function finalDigit(number) {
        
        if(number% "2" !==0){ return true}
        return false;
        };

//The sum of all the digits must be greater than 16
function digitsSum(number){
let sum = 0 ;
for (let j=0 ; j<number.length ; j++){

    sum+=Number(number.charAt(j));
}
if(sum <= 16){
    return true
}

return false
};

function cardValidator(number){
   

if (digitsNumbers(number)){


return "Number must be 16 digits" ;

}
else if (isAllNumbers(number)){

    return "all of them must be numbers" ;


}

else if (isAllSame(number)){

    return "You must have at least two different digits represented"

}

else if (finalDigit(number)){

    return "The final digit must be even"

}

else if (digitsSum(number)){

return " sum should be greater than 16"

}
return " valid card"

};



//declare a const credit card number examples
const creditCardNumber1 = "9999777788880000"; //valid number
const creditCardNumber2 = "6666666666661666"; //valid number
const creditCardNumber3 = "a92332119c011112"; //invalid characters
const creditCardNumber4 = "4444444444444444"; //only one type of number
const creditCardNumber5 = "1111111111111110"; //sum less than 16
const creditCardNumber6 = "6666666666666661"; //odd final number

//call Credit card validator function and log the result
console.log(cardValidator(creditCardNumber1));






































    

    




