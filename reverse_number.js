function reversed_number(n){
    n = n + "";
    return n.split("").reverse().join("")
}

console.log(Number(reversed_number(67)))