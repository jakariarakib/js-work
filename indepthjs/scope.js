function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count)
    }

    return inner;
}

let counter = outer();
counter();
counter();
counter();

//Here, inner() still has access to count because of lexical scope.