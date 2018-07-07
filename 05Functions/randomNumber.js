function randomNumInt(min, max){ //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);//set minimum value
   max = Math.floor(max);//set max value
   return Math.floor(Math.random() * (max - min)) + min; //returns range min =< x < max (does not include max)
};
randomNumber(1,10)