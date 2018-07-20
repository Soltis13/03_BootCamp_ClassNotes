//# **Instructions**

//* Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)

//* Each character created using your constructor should have the following properties...

function Char(name,profession,gender,age,strength,hitpoints){
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
  this.printstats = function(){
    console.log("Name: "+this.name)
    console.log("Profession: "+this.profession)
    console.log("Gender: "+this.gender)
    console.log("Age: "+this.age)
    console.log("Strength: "+this.strength)
    console.log("Hit Points: "+this.hitpoints)
  }
}

//   * Name: The character's name --> String

//   * Profession: What the character does for a living --> String

//   * Gender: The character's gender --> String

//   * Age: The character's age --> Integer

//   * Strength: Abstraction for how strong the character is --> Integer

//   * HitPoints (HP): Abstraction for how much health the character has --> Integer

//   * PrintStats: Function which prints all of a character's properties to the screen

//   * Once you have created your constructor, create two new characters and print their properties to the screen

    var archer = new Char("Al","archer","male",13,95,2000)
    var barbarian = new Char("MinMax","barbarian","male",18,200,1000)

//console.log(JSON.stringify(archer))
//   * Fool around and get comfortable with your constructor before moving onto the next parts of the activity

// * Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

//   * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
        function IsAlive(person){
            if(person.hitpoints > 0){
                console.log(person.name+" is still alive with "+person.hitpoints+" hit points")
            }else{console.log(person.name+" is dead.")}
        }
//   * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
        function Attack(person1, person2){
            person1.hitpoints = person1.hitpoints-person2.strength
        }
//   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
        function LevelUp(person1){
            person1.age = person1.age+1;
            person1.strength = person1.strength+5;
            person1.hitpoints = person1.hitpoints + 25;
        }
// * BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!

archer.printstats()
console.log("---------------------------------------------------")
barbarian.printstats()

