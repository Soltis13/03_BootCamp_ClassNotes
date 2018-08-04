var express = require("express");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];
app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
console.log("Queryed all-pets"+" "+res)
  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.

  res.render("index", { allPets: animals });
});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
var data = {animals:[]}
  // 3. Send all the animals that are not pets to the index.handlebars file.
  for (var i = 0; i < animals.length; i++) {
    console.log(animals[i].pet)
    if (animals[i].pet === false) {
      console.log(animals[i])
      res.render('index', {allPets: animals[i]} );
    }
  }
});

app.get("/:type", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
console.log("queried dog", req.url)
  // 1. Send the dog object from the animals array to the dog.handlebars file.
  for (var i = 0; i < animals.length; i++) {
    if (animals[i].animalType === req.params.type) {
      return res.render('animal', animals[i]);
    }
  }
});





// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
