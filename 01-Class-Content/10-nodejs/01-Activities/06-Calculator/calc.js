var a = parseFloat(process.argv[3]);
var b = parseFloat(process.argv[4]);
var c = process.argv[2];


//add values
if(c === "add"){
    console.log(a+b);
}

//subtract value
if(c === "subtract"){
    console.log(a-b);
}
//multiply
if(c === "multiply"){
    console.log(a*b);
}
//divid
if(c === "divid"){
    console.log(a/b);
}
//remainder
if(c === "remainder"){
    console.log(a%b);
}
//exp
if(c === "exp"){
    console.log(Math.pow(a,b));
}
//algebra
if(c === "algebra"){
    var q = process.argv[3];

    console.log(q[0],q[1],q[2],q[3],q[4],q[5],q[6])
    var p = q[5]+q[6]
    var o = parseFloat(p)
    var i = parseFloat(q[3])
    var u = parseFloat(q[0])
    console.log((o-i)/u)
}
