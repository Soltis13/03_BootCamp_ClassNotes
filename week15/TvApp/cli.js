// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

//input all text from the command line
var input = process.argv;
//create a new array to store inputs
var command=input[2] //command
var inputstr = '' //keywords
//console.log(input)

//start at 3. 0,1 are basics, 2 is command
for(var i=3; i<input.length; i++){
    inputstr= inputstr+input[i]+" "

}
console.log("Command: "+ command)
console.log("Keyword: " +inputstr)


// other ideas

var cli = {
    cmd: "",
    term: "",

    function (params) {
        
    },

    function (params){

    },

}

switch(cli,cmd){
    case "show":
        console.log("Show")
        break;

    case "actor":
        console.log("Actor")
        break;
    
    default:
        console.log("Unknown Command")
}