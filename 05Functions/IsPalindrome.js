function Palindrome(str) { 

    str = str.replace(/ /g, '');

    for (let i = 0, max = Math.floor(str.length/2); i < max; i++) {
        console.log(str[i])
        console.log(str[str.length-1-i])
        if (str[i] !== str[str.length-1-i]) {
            return false;
        }
    }
    return true;
         
}
   
// keep this function call here 
Palindrome("readlineenildaer"); 