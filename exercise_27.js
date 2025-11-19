const start_spec_equal = (str) => {
    if (str.length < 4){
        return false;
    }
    const exact = str.substring(0, 4);
    if (exact === 'Java'){
        return true;
    } else {
        return false;
    }
}

console.log(start_spec_equal('Javascript'));
