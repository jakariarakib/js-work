function validInteger(number){
    if(!Number.isInteger(number)){
        throw new Error("Invalid number please input an integer")
    }
    console.log('Number is valid', number)
}

try{
    validInteger(12)
    validInteger(2.89)

} catch(error){
    console.log('Error', error.message);
}