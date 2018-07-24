var inquirer = require('inquirer');
var mysql = require('mysql');


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bidList"
});

//==============================================================================
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
//   createBid();
// });
//
// function createBid(bid) {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       bid
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateBid();
//     }
//   );
//
//   // logs the actual query being run
//   console.log(query.sql);
// }
//
// function updateBid(bid) {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//         bid
//     ],
//     function(err, res) {
//       console.log(res.affectedRows + " bids updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteBid();
//     }
//   );
//
//   // logs the actual query being run
//   console.log(query.sql);
// }
//
// function deleteBid() {
//   console.log("Deleting all bids...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       // flavor: "strawberry"
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }
//
// function readBid() {
//   console.log("Selecting all bids...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     return res;
//     connection.end();
//   });
// }

//==============================================================================
function post(){
  inquirer.prompt([
    {
      type: "input",
      message: "Whatcha Post'in?",
      name: "post"
    },
    {
      type: "input",
      message: "Discription of item",
      name: "discription"
    },
    {
      type: "input",
      message: "Minimum bid",
      name: "minimumBid"
    },
  ])
  .then(function (data) {
    console.log(data);
  });

}

inquirer.prompt([
    {
    name: "bidStart",
    message: "Would you like to make a bid?",
    type: 'checkbox',
    choices: ['Post an item', 'Bid on an Item']
    }
  ]).then(function(inquireResponse)
      {
      if(inquirerResponse.choices === "Post an item"){
        post();
      }
      else if(inquireResponse.choices === "Bid on an Item"){

      }

  }).catch(function(error){
      // console.log("Error");
  });