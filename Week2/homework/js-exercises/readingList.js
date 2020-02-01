let readingArray = [{title :"bookTitle1",author :"bookAuthor1", alreadyRead :true} , {title :"bookTitle2",author :"bookAuthor2", alreadyRead :true},{title :"bookTitle3",author :"bookAuthor3", alreadyRead :false} ];
for (let i=0 ; i<readingArray.length ; i++){ 
    if (readingArray[i].alreadyRead===true)
        {console.log("The " + readingArray[i].title + " By " +readingArray[i].author +" already read" )}
else {console.log("The " + readingArray[i].title + " By " +readingArray[i].author +" need to be read it" )}}
    
    
    
