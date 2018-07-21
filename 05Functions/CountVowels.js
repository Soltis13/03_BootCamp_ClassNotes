function VowelCount(str) { 
    var count=0
    for(var i=0;i<str.length;i++){
        console.log(str[i])
    
        if(str[i]===("a"||"e"||"i"||"o"||"u"||"A"||"E"||"I"||"O"||"U")){
            console.log("isvowel")
         count = count + 1 
        }
        console.log("-------------------")
        if(str[i]===/^[aeiouAEIOU]+$/){
            console.log("isvowel")
         count = count + 1 
        }
        console.log("-------------------")
    }
  // code goes here  
  return count; 
         
}
   
// keep this function call here 
VowelCount("Argument goes here");                            
