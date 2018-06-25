
//https://developers.giphy.com/docs/

// Initial array of animals
var events = ["music", "Jazz"];

var movie = "Music";
//var queryURL = "http://api.eventful.com/json/events/search?" + events + "&location=Minneapolis&t=This+Weekend&c=music&api_key=jHN2HGKDVRHbwN3q";

//var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=sNwmsPY4XBIE2JAWvrAaC0ZvUG9KxF8k&keyword="+events+"/"
var url = 'https://api.foursquare.com/v2/venues/explore';

var queryURL = "https://api.foursquare.com/v2/venues/search?ll=44.9,-93.2&query=library&client_id=GMCZAGCA1IOH5QCGZYJGYVD0YJLAAUGUNLWUJGGOC2IIXKUU&client_secret=IJUOBHZNIW3PY124FYWWAVULHIHDSNW2OZ1GPKDW2ARO1R2V&v=20180623";

//var queryURL2 = "https://app.predicthq.com/events?q=jazz&categories=expos,concerts,festivals,performing-arts,sports,community&labels=all&labels.op=any&ranks=level3,level4,level5&date=next30days&places=5037649,5045360&client_id=phq.Isd4d1v0mKRpBdIknrX8bUDHJcisX9gvM8v64dQT&client_secret=M1eWxhcVj8SrwBrvvBdHpX7x4uQVhsv0SIHBbl0W&v=20180623"

var queryURL3 = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-05-15&primary_release_date.lte=2018-06-22&api_key=373b98cfb44a36458b78fb8be90e88e2"

var ipurl = "http://api.ipstack.com/131.212.248.60?access_key=a07cea42b7d1f81063d55e1226fe0e86"


 var lati;

// var long = 0;

// var location="";

$.ajax({
  url: ipurl,
  method: "GET"
}).done(function(response){
  console.log("Success got data", response);
  lati = response.latitude;
  //long = response.longitude;
  //location = response.city;
})
console.log(lati)

//console.log("lati"+lati+" long "+long+" location "+location)


$.ajax({
  url: queryURL,
  // params: params,
  method: "GET"
}).then(function(response) {
  console.log("Success got data", response);

  // for (var i = 0; i < response._embedded.events.length; i++){
  //   console.log(response._embedded.events[i])
  //     var gifDiv = $("<div class='item col-md-3' >");

  //     var rating = response._embedded.events[i];

  //     var p = $("<p>").text(rating.name);
  //     var d = $("<img>").attr("src", rating.images[i].url);

      

      
  //     gifDiv.append(p);
  //     gifDiv.append(d);
 

  //     $("#animals-view").prepend(gifDiv);

  //}
});
  

//ajax request for animal image
// function displayAnimalInfo() {

//   var animal = $(this).attr("data-name");
//   var xhr = $.get("http://minneapolis.eventful.com/json/events?q=hiphop&t=This+Weekend&c=musicapi_key=jHN2HGKDVRbwN3q");

//   xhr.done(function(data) {
//     console.log("Success got data", data);

  // })
 
  // // Creating an AJAX call for the specific movie button being clicked
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(data) {




    // for(var i = 0; i < results.length; i++){

      // var gifDiv = $("<div class='item col-md-3' >");

      // var rating = data.home_url;

      // var p = $("<p>").text(rating);


      
      // gifDiv.append(p);
 

      // $("#animals-view").prepend(gifDiv);
    



//function to rendering animal buttons
function renderButtons() {

  //delete the prioir animals before adding new
  $("#buttons-view").empty();

  //loop thorugh array of animals
  for (var i = 0; i < events.length; i++){

    //generate button for each animal in array
    var a = $("<button>");
    //adding class for animal-btn
    a.addClass("animal-btn btn btn-primary ");
    //adding a data-attribute
    a.attr("data-name", events[i]);
    //providing an initial button text
    a.text(events[i]);
    //adding the button to the html div
    $("#buttons-view").append(a);
  };
};

//onclick event of button click
$("#add-animal").on("click", function(event) {
  event.preventDefault();
  //grap the input from text box
  var animal = $("#animal-input").val().trim();

  //adding animal from the text box to array of annimals
  events.push(animal);

  //calling the render button function
  renderButtons();

});

// function to click and still images

//   $(document).on("click", ".item",
//      // function()
//      // {
//      //   var src = $(this).attr("src");
//      //   console.log(src)
//      //   $(this).attr("src", src.replace(/\.png$/i, ".gif"));
//      // },
    
//      function()
//      {
//        console.log(this);

//       var currentImage = this;

//        $(this).children('img').stop();

//        console.log(imageSrc);

//       $(this).children('img').attr("src", imageSrc.replace(/\.gif$/i, ".png"));
//        console.log(this);
//     },
//    )



//Click event on gifs with class of "_Giphy" executes pausePlayGifs function


//onclick event for all animal-btn elements
//$(document).on("click", ".animal-btn", displayAnimalInfo);

//call renderbutton to display inital buttons from intial array
renderButtons();