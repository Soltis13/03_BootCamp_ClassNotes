//Array of movies
var WishList = [];
var Checkedout = [];
var Owned = [];

//ajax request for movie image
function displayMovieInfo() {

    var movie = $(this).attr("data-name");
    var xhr = $.get("https://api.themoviedb.org/3/movie/550?api_key=373b98cfb44a36458b78fb8be90e88e2")
    xhr.done(function(data) {
      console.log("Success got data", data);
    })
}
