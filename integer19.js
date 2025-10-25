function integer19(n){
    if(n<=19){
        return (n-19)
    } else {
        return 3*(n-19)
    }
}

console.log(integer19(78));
console.log(integer19(10));