"use strict"
const childernNum=[1,2,3,4,5];
const partnerNa=["lila","salwa","nadia","ola","donia"];
const locationArray=["dubai","damascus","amsterdam","moroco","jerusalem"];
const jobArray =["programmer","electricalEngineer","teacher","footballPlayer","chef"];

function randomItem(array){

    return array[Math.floor(Math.random() * array.length)];
}



function tellFortune(childrenNumber,partnerName,location,jobTitle) {

return `You will be a ${randomItem(jobArray)} in ${randomItem(locationArray)}, and married to ${randomItem(partnerNa)} with ${randomItem(childernNum)} kids.`

}

console.log(tellFortune());