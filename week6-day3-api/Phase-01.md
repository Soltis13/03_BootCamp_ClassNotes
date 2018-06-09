# New York Times Article Search - Phase 01

## Front-End Team

* Create the layout for the design above. Feel free to use Bootstrap or to do something more customized of your own.

* Make sure to organize your code so as to have the necessary IDs.

* Incorporate text boxes for capturing User Input. Then research how to retrieve the input values in JavaScript

## Back-End Team

Row 1 - NA

Row 2 - (Input sections)

ID1 - SearchTerm
ID2 - NoRecord
ID3 - StartYear
ID4 - EndYear
ID5 - button - Search
ID6  - button - ClearResults

Row 3 - (info out)

ID7 -  output div - TopArtical

* Do preliminary research on the [API](http://developer.nytimes.com/article_search_v2.json).

* Register for an API Key.

API Key: 7839683277ad4bcfbec7be6f9e388f1f

* Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)

    // Built by LucyBot. www.lucybot.com
    var url = https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
    $.ajax({
    url: url,
    method: 'GET',
    })
    
    .done(function(result) {
    console.log(result);
    }).fail(function(err) {
    throw err;
    });

* Experiment with console logging various fields.
