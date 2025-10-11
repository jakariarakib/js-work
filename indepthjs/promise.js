let myPromise = new Promise((resolve, reject) =>{
    let book = false;

    if(book){
        resolve('yes find it')
    } else{
        reject('not find out')
    }

})

myPromise.then(result => console.log(result))
.catch(error => console.log(error))

//প্রমিস হলো একটা অবজেক্ট, যা বলে দেয় কোনো অ্যাসিঙ্ক্রোনাস কাজ সফলভাবে শেষ হবে (resolve) নাকি ব্যর্থ হবে (reject)।