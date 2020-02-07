"use strict"

function giveCompliment(name) {
    let complimentArray = ["great", "awesome","nice","amazing","wonderful","kind","beutiful","lovely","friendly","good"]
  let randomItem = complimentArray[Math.floor(Math.random()*complimentArray.length)];
  return `You are ${randomItem} ${name}!`;
}
console.log(giveCompliment('Noer'));
console.log(giveCompliment('Noer'));
console.log(giveCompliment('Noer')); 