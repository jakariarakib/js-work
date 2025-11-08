function testhundred(x){
    return ((Math.abs(100 - x) <= 20) || (Math.abs(400 -x) <= 40))
}


console.log(testhundred(5));

console.log(testhundred(70))

const testfifty = (x) => ((Math.ceil(200* 45-x)))

console.log(testfifty(8))