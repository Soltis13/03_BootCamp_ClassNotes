function LetterCapitalize(str) { 
    var ans=str[0].toUpperCase()
    for(var i=1; i<str.length;i++){
        if(str[i-1]===" "){
            ans=ans+str[i].toUpperCase()
        }else{
            ans=ans+str[i]
        }   
    }
    return ans;    
}
LetterCapitalize(str)