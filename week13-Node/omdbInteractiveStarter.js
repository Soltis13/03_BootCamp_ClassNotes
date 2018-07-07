// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created
var UserEntry2 = process.argv[2];
var UserEntry3 = process.argv[3];
var movieName = ""
console.log(UserEntry3)
// var UserEntry4 = process.argv[4];
// var UserEntry5 = process.argv[5];

if(UserEntry3 != "undefined"){
    console.log("1 entry")
    movieName = UserEntry2
}else if(UserEntry3 === "undefined"){
    console.log("2 entry")
    movieName = UserEntry2
}
// var output=''
// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...


// Grab or assemble the movie name and store it in a variable called "movieName"

console.log(movieName)
// ...

var request  =require("request")
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function(error, response, data){
    if (!error && response.statusCode === 200){
        //console.log(data)
    }
    var dataArr = JSON.parse(data)
    console.log("The Year of release is : "+dataArr.Released)
 
})
// This line is just to help us debug against the actual URL.
//console.log(queryUrl);


// Then create a request to the queryUrl
// ...

// If the request is successful
// ...

// Then log the Release Year for the movie
// ...
