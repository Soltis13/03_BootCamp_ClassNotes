// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// var orm = require("");
var Todo = require("../models/todos.js");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.Todo.findAll({}).then(function(dbTodo) {
      res.json(dbTodos);

    
    });
  });



  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTodo){
      res.json(dbTodo)
    })
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    db.Todo.delete({

    }).then(function(dbTodo) {
 
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    db.Todo.editTodo({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTodo){
      res.json(dbTodo)
  });
};
