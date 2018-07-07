var type = process.argv[2];
var number = parseFloat(process.argv[3]);

// fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"

function ReadTheFile() {
  fs.readFile("bank.txt", "utf8", function(error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    // We will then print the contents of data
    //console.log(data);
    var total = 0;

    //sum the total
    for (var i = 0; i < dataArr.length; i++) {
      total = total + parseFloat(dataArr[i]);
      //console.log(parseFloat(dataArr[i]))
      //console.log(total);
    }
    let n = total.toFixed(2);
    console.log(n);
  });
}


function AppendToFile(num) {
    fs.appendFile("bank.txt", num, function(err) {

        // If the code experiences any errors it will log the error to the console.
        if (err) {
          return console.log(err);
        }
      
       

      
      });

}

function randomNumInt(min, max){ //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);//set minimum value
 max = Math.floor(max);//set max value
 return Math.floor(Math.random() * (max - min)) + min; //returns range min =< x < max (does not include max)
};



//total - this should tally up all of the money in the bank balance and display it for the user.
if(type === "total"){
    //console.log("is true")
    ReadTheFile()
}

//deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)
if(type === "deposit" && number > 0){
    
    var num = ", "+number 
    AppendToFile(num)
     // Otherwise, it will print: "movies.txt was updated!"
     console.log("Added" + num)
     console.log("New total is:")
     ReadTheFile()
}

//withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)
if(type === "withdraw" && number < 0){
  var num = ", "+ number 
  AppendToFile(num)
   // Otherwise, it will print: "movies.txt was updated!"
   console.log("Subtracted: " + num)
   console.log("New total is:")
   ReadTheFile()
}

//lotto - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
var winner = randomNumInt(1, 1000)
if(type === "lotto" && number === winner){
  var num = ", "+ number 
  AppendToFile(num)
  console.log("You win: " + number)
  console.log("New total is:")
     ReadTheFile()
     console.log("Lotto was: "+ winner)
}else{
  var num = ", "+ -number 
  AppendToFile(num)
  console.log("You lose: " + number)
  console.log("New total is:")
     ReadTheFile()
     console.log("Lotto was: "+ winner)
}




// I guess i can make changes :) - Jagnoor 