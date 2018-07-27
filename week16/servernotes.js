var http = require("http")

var PORT = 8080;

function handleReqquest(request, response){
    response.end("Works")
}


http.createServer(function(request, result) {
    console.log("Server recieved a request");

    result.end("Hello World");
});

server.listen(700, function(){
    console.log("")
})