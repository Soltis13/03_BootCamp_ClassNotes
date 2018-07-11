var NumArg = process.argv;

//.replace(/\D/g,'');

var numArray = []

for(var i = 2; i < NumArg.length; i++){
    numArray.push(parseInt(NumArg[i]))
}



console.log(numArray.sort())
