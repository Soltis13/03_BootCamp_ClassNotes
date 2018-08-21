
//https://developers.giphy.com/docs/

// Initial array of animals
var animals = ["dog", "cat", "rabbit", "hamster", "Jack Reacher"];
var animalImage = [];
var animalImageStill = [];

//ajax request for animal image
function displayAnimalInfo() {

    //the movie datbase https://developers.themoviedb.org/3/configuration/get-api-configuration
  var animal = $(this).attr("data-name");
  var xhr = $.get("https://api.themoviedb.org/3/search/movie?api_key=373b98cfb44a36458b78fb8be90e88e2&query="+animal);
  xhr.done(function(data) {
    console.log("Success got data", data);



    

  // })
 
  // // Creating an AJAX call for the specific movie button being clicked
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(data) {

  var results = data.results;


    for(var i = 0; i < results.length; i++){

      var gifDiv = $("<div class='row'>");
      

      var animalImage = $("<img>");
      animalImage.attr("src", "https://image.tmdb.org/t/p/w154"+results[i].poster_path);
      gifDiv.append("<div class='col-md-3'><img src='https://image.tmdb.org/t/p/w154"+results[i].poster_path+"'>");
      


      gifDiv.append("<div class='col-md-3'><p>Results "+results[i].id+"</p></div>")
      
      

      gifDiv.append("<div class='col-md-3'>"+results[i].overview+"</div>")

      
      

      $("#animals-view").prepend(gifDiv);
    }
  });

    //OMDB http://www.omdbapi.com/
    var animal2 = $(this).attr("data-name");
    var xhr2 = $.get("http://www.omdbapi.com/?t="+ animal2 +"&apikey=b2605f08");
    xhr2.done(function(data2) {
      console.log("Success got data", data2);

  });
};

//function to rendering animal buttons
function renderButtons() {

  //delete the prioir animals before adding new
  $("#buttons-view").empty();

  //loop thorugh array of animals
  for (var i = 0; i < animals.length; i++){

    //generate button for each animal in array
    var a = $("<button>");
    //adding class for animal-btn
    a.addClass("animal-btn btn btn-primary ");
    //adding a data-attribute
    a.attr("data-name", animals[i]);
    //providing an initial button text
    a.text(animals[i]);
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
  animals.push(animal);

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
$(document).on("click", ".animal-btn", displayAnimalInfo);

//call renderbutton to display inital buttons from intial array
renderButtons();