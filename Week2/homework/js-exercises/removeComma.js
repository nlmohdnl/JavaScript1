var myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
for (i = 0 ; i < 8 ; i++)
{ myString = myString.replace(',',' ');}

console.log(myString);