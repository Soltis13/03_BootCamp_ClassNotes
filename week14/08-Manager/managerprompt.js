// dependency for inquirer npm package
var inquirer = require("inquirer");
var runs = 0
var score = 0

// constructor function used to create programmers objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;

  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense++;
      console.log(this.name + "'s offense has gone up!\n----------");
    }
    else {
      this.defense++;
      console.log(this.name + "'s defense has gone up!\n----------");
    }
  };
  this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense--;
      console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
  };
  this.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
  };
}

// arrays used to contain all of our player objects
var starters = [];
var subs = [];
var team = [];

// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards
var createPlayer = function() {
    // if the length of the team array is 5 or higher, no more questions will be asked
    if (starters.length + subs.length < 5) {
      console.log("\nNEW PLAYER!\n");
      inquirer.prompt([
        {
          name: "name",
          message: "Player's Name: "
        }, {
          name: "position",
          message: "Player's position: "
        }, {
          name: "offense",
          message: "Player's Offensive Ability: ",
          validate: function(value) {
            if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
              return true;
            }
            return false;
          }
        }, {
          name: "defense",
          message: "Player's Defensive Ability: ",
          validate: function(value) {
            if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
              return true;
            }
            return false;
          }
        }
      ]).then(function(answers) {
        // runs the constructor and places the new player object into the variable player.
        // turns the offense and defense variables into integers as well with parseInt
        var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
        // adds a player to the starters array if there are less than five player objects in it.
        // otherwise adds the newest player object to the subs array
        if (starters.length < 3) {
          starters.push(player);
          team.push(player);
          console.log(player.name + " added to the starters");
        }
        else {
          subs.push(player);
          team.push(player);
          console.log(player.name + " added to the subs");
        }
        // runs the createPlayer function once more
        createPlayer();
      });
    }
    else {
      // loops through the team array and calls printStats() for each object it contains
      for (var i = 0; i < team.length; i++) {
        team[i].printStats();
      }

      playGame()
    }
};


var playGame = function() {
    // if the length of the team array is 5 or higher, no more questions will be asked
    if (runs < 5) {
        runs++
        console.log("---------\nROUND " + runs + "\n---------------------");
        var num1 = Math.floor(Math.random() * 20)+1;
        var num2 = Math.floor(Math.random() * 20)+1;
        var teamoffense = 0
        var teamdefense = 0
        
        for (var i = 0; i<starters.length; i++){
            teamoffense = teamoffense + starters[i].offense;
            teamdefense = teamdefense = starters[i].defense;
        }

        if(num1 < teamoffense){
            score++
        }
        if(num2 > teamdefense){
            score--
        }

      console.log("\nSubPlayer!\n");

      inquirer.prompt([
        {
   
        }, 
      ]).then(function(answers) {

   
      });

      inquirer.prompt([
        {
          name: "name",
          message: "Player's Name: "
        },  
      ]).then(function(answers) {
        // runs the constructor and places the new player object into the variable player.
        // turns the offense and defense variables into integers as well with parseInt
        var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
        // adds a player to the starters array if there are less than five player objects in it.
        // otherwise adds the newest player object to the subs array
        if (starters.length < 3) {
          starters.push(player);
          team.push(player);
          console.log(player.name + " added to the starters");
        }
        else {
          subs.push(player);
          team.push(player);
          console.log(player.name + " added to the subs");
        }
        // runs the createPlayer function once more
        createPlayer();
      });
    }

    else {


      }

    
    }
};






createPlayer()
