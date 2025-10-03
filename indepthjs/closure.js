function starttimer(){
    let seconds = 0;

    setInterval(function (){
        seconds++
        console.log(`time is ${seconds} second`);
    },1000)
}

starttimer();

//এখানে closure seconds ভ্যারিয়েবলকে মনে রেখে প্রতি সেকেন্ডে বাড়াচ্ছে।