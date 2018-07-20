var request = require('request');
var fs = require('file-system');

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    request(URL, function(error, response, body){
     if(error!==null){
      console.log('error:', error); // Print the error if one occurred
      
     }
     if(response.statusCode !== 200){
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
     
     }
     var data = JSON.parse(body) 
     console.log('body:', data); // Print the HTML for the Google homepage.
    
    fs.appendFile('log.txt',body,(err) =>{} )  
  })

  };

};

module.exports = TV;
