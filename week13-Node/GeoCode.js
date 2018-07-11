// include the geocoder npm location
//input command line argument - name of 
var Arg = process.argv;
var StrArray = []

console.log(Arg)

for(var i = 2; i < Arg.length; i++){
    var a = StrArray.push((Arg[i]))
}
var CityState = StrArray.join()
console.log(CityState)


var geocoder = require('geocoder');
 
// Geocoding
geocoder.geocode(CityState, function ( err, data ) {
    // If there is an error log it.
    if (err) {
        console.log(err);
      }else{
      console.log(JSON.stringify(data, null, 2))
}
);