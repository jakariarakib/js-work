const start_spec_equal = (str) =>{
    if (str.lebgth < 4){
        return false;
    }
    const excat = str.substring(0, 4)
    if (excat === 'Java'){
        return true;
    } else{
        return false;
    }
}

console.log(start_spec_equal('Javascript'))