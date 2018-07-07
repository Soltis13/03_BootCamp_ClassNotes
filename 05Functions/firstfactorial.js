function FirstFactorial(num) { 

  if (num > 0){
      var sum = 1
      for(var i = 1; i <= num; i++){
          sum = sum * i
      }
  } 
  num = sum;
  console.log(sum)

  //return num; 
         
}