var a = process.argv[2];
var b = process.argv[3];
console.log(a===b);

if(a===b){
    console.log(true)
}else{console.log(false)}

if(a%7===0 && b % 7 === 0){
    console.log("both are multiples of 7")
}