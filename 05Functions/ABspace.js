function ABCheck(str) { 
    console.log(str)
    console.log(str.length)
    for(var i=0;i<str.length;i++){
        console.log(str[i])
        console.log(str[i+4])
        console.log("-------------------")
        if(str[i] === "a"){
            if(str[i+4]==="b"){
                return true
            }
        }
        else if(str[i]==="b"){
            if(str[i+4]==="a"){
                return true
            }
        }
    }
  return false 
         
}
   
// keep this function call here 
ABCheck("Laura sobs");   


function AltABCheck(str){
    patt = /(a...b|b...a)/
    return patt.test(str); 
}

