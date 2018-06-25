


//Array of search terms


var ipadd = "https://api.ipify.org";
var myipadd = 0;
// firebase search terms
var search=["coffee"]



$.ajax({
    url: ipadd,
    method: "GET",
    async: false
}).done( function(response) {
  console.log(response);
  myipadd = response;
}, "jsonp")



//ajax call for location
var ipurl = "http://api.ipstack.com/"+myipadd+"?access_key=a07cea42b7d1f81063d55e1226fe0e86"
var lati=0
var long=0

 $.ajax({
     url: ipurl,
     method: "GET",
     async: false
   }).done(function(response){
     console.log("Success got data", response);
     lati = response.latitude;
     long = response.longitude;
    //long = response.longitude;
     //location = response.city;
     console.log(lati)
     console.log(long)
});
  


//ajax call for search term venue
var queryURL = "https://api.foursquare.com/v2/venues/search?ll="+lati+","+long+"&query="+search+"&radius=4000&client_id=GMCZAGCA1IOH5QCGZYJGYVD0YJLAAUGUNLWUJGGOC2IIXKUU&client_secret=IJUOBHZNIW3PY124FYWWAVULHIHDSNW2OZ1GPKDW2ARO1R2V&v=20180623";


$.ajax({
    url: queryURL,
    // params: params,
    method: "GET",
    async: false
  }).then(function(response) {
    console.log("Success got data", response);
});

