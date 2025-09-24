function find_longest_word(str){
    var array1 = str.match(/\w[a-z]{0,}/gi);

    var reasult = array1[0];
    
    for ( var x= 1; x < array1.length; x++){
        if (reasult.length < array1[x].length){
            reasult = array1[x];
        }
    }

    return reasult;
}

console.log(find_longest_word('New Manes comes up'))