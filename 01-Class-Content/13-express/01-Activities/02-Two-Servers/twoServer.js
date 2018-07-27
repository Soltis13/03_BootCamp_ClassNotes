// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT_A = 7000;
var PORT_B = 7500;

// Create a generic function to handle requests and responses
function handleRequest_A(request, response) {
  console.log(response)
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url+" On PortA");
  
}

function handleRequest_B(request, response) {
  console.log(response)
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url+" ON Port B");
  
}

var server_A = http.createServer(handleRequest_A);
var server_B = http.createServer(handleRequest_B);

// Start our server so that it can begin listening to client requests.
server_A.listen(PORT_A, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT_A);
});
server_B.listen(PORT_B, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT_B);
});


