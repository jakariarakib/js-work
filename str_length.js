const fornt_back_3 = (str) =>{
    if (str.length >= 3){
       
        const back = str.substring(str.length -3);
        return back + str + back;
    } else {
        return false;
    }

}

console.log(fornt_back_3("Jakaria"))