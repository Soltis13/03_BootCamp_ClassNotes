
function LongestWord(sen) { 

    var letter = /^[a-zA-Z]+$/;
    var wordArray = sen.split(" ")
    var longest = 0
    
    var longestWor='';
    
    for(var i = 0; i < wordArray.length; i++){
        console.log(wordArray[i])
        var word = wordArray[i]
        var length = 0
        
        for (var j=0; j<word.length; j++){
            length++
            //console.log(word.length)
            console.log(length)
            
  
            
        }
        if(longest < length){
            longestWor = word
            longest = length
        }
        console.log(longestWor)

    }
    sen = longestWor
  // code goes here  
  return sen; 
         
}
   
// keep this function call here 
LongestWord("The Test Case is");    