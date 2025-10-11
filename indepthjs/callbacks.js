function kajkorbo(callback){
    console.log("it's start")

    setTimeout(() =>{
        console.log("it's finished")

        callback()
    },2000)
}

kajkorbo(() =>{
    console.log("finished the callback")
})

//কোনো কাজ শেষ হলে পরে আরেকটা ফাংশন চালানো।