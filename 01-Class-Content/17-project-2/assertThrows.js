function assertThrows(func,x,y) {
    func(x,y);
}

function multiply(x,y) {
    return(x*y);
}

assertThrows("multiply",5,6)