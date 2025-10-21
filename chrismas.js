let today = new Date();

let cms = new Date(today.getFullYear(), 11, 25);

if(today.getMonth() == 11 && today.getDate() > 25){
    cms.setFullYear(cms.getFullYear() + 1)  ;
}

let one_day = 1000 * 60 * 60 * 24;

console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!"); 