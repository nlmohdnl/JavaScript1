let drinkTray = [] ;
const drinkTypes = ["cola", "lemonade", "water"];

for (let i= 0 ; i < 5 ; i++) {
     if (i<2){
         drinkTray.push(drinkTypes[0])}
else if (i>=2&&i<4){
    drinkTray.push(drinkTypes[1])}
else {  drinkTray.push(drinkTypes[2])}
}
console.log(" Hey guys, I brought a " + drinkTray.toString(drinkTray)+" !");



