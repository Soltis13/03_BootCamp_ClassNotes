var Client = require('predicthq')

var phq = new Client({access_token: "Ju4c1yXOdSiFt4HN51cuOKPMZiqMbh"})

phq.events.search({q: 'Madonna', rank_level: 5, country:'AU', 'start.gte' : '2016-01-01'})
    .then(function(results){
        var events = results.toArray()
        for(var i=0; i < events.length; i++)
            console.info(events[i].rank, events[i].category, events[i].title, events[i].start, events[i].location )
    })