const last_first = (str1)=>{
    if(str1.length <= 1){
        return str1;
    }
    const mid_char = str1.substring(1, str1.length -1);
    const test = str1.charAt(str1.length -1);
    const test_1 = str1.charAt(0);
    
    return (str1.charAt(str1.length -1)) + mid_char + str1.charAt(0);

}

console.log(last_first("rakib"))