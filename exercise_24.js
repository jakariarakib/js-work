const test_24 = (str) =>{
   
    const exact = str.substring(0, 1);
    return exact + str + exact;

}

console.log(test_24("will"));
console.log(test_24("from"));
