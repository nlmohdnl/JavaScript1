const cartForParty = {cake : 50 , juice : 4.5 , chips : 3.5 ,nuts : 5.5 ,checolate :20}
function calculateTotalPrice(object1) {
    let total = 0 ;
for ( property in object1 ){
total+=cartForParty[property];
}
return total;
}
console.log("the total cost of party food is " +calculateTotalPrice(cartForParty)+" euro");