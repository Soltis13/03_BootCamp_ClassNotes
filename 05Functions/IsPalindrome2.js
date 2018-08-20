function Palindrome(str) { 

    // first we'll get rid of spaces and make the characters 
    // all lowercase to make it easier to work with
    var str = str.split(" ").join("").toLowerCase();
  
    // we wrote this reverse code in a previous solution
    var rev = str.split('').reverse().join('');
  
    // now it's very easy to check if a string is a palindrome
    return str === rev;
           
  }
     
  Palindrome("Never odd or even");                                                               
