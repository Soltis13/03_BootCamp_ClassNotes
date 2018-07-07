var type = parseFloat(process.argv[2]);
var number = process.argv[3];

// fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("bank.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
  // We will then print the contents of data
  console.log(data);

});

//total - this should tally up all of the money in the bank balance and display it for the user.


//deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)

//withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)

//lotto - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.