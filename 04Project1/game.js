

http://api.eventful.com/json/events/search?...&location=San+Diego

var events = ["blues", 'rock', 'country'];

//ajax request 
function displayEventInfo() {

    var event = $(this).attr("event-name");
    var xhr = $.get("http://api.eventful.com/json/events/search?q=" + events + "&api_key=jHN2HGKDVRbwN3q&limit=1");
  
    xhr.done(function(data) {
      console.log("Success got data", data);
    });
}

$(document).on("click", "#animal-btn", displayEventInfo);