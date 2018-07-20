function AlphabetSoup(str) { 

    str = str.split("")
    //console.log(str)
    str=str.sort()
    //console.log(str)
    str=str.toString()
    //console.log(str)
    str=str.replace(/,/g,"")
    //console.log(str)
    return str;    
} 
AlphabetSoup("test");       