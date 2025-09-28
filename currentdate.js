var day = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;

    return (dd+sp+mm+sp+yy);

}

console.log(day('/'));
console.log(day('-'));