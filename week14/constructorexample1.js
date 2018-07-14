function Programmer(name, position, age, favLang){
    this.name = name;
    this.position = position;
    this.age = age;
    this.FavoriteLanguage = favLang;
    }

Programmer.prototype.printInfo = function(){
    console.log()
}

var ProgrammerObj = new Programmer("Bob", "coder", 33, "Javascript")

ProgrammerObj.printInfo();