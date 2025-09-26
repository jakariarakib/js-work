let arr1 = ['a','v', 'a']

let mf = 1;
let m = 0;
let items;

for (let i = 0; i < arr1.length; i++){
    for(let j = i; j < arr1.length; j++){
        if(arr1[i] == arr1[j])
            m++;

        if(mf < m){
            mf = m;
            items = arr1[i];
        }
    }
    m = 0;
}

console.log(items+ " "+ mf+"times")