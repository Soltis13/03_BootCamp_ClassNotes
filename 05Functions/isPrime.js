function PrimeTime(num) { 
    var isprime = true
    if(num<1){
        isprime = false
    }

    for(var i=(num-1);i>1;i--){
        if(num%i===0){
            isprime = false
        }
    }
    return isprime

}

PrimeTime(1);