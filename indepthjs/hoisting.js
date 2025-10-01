//var → উপরে উঠে যায়, কিন্তু ভ্যালু না পাওয়া পর্যন্ত undefined থাকে।

console.log(x)
var x = 8;
console.log(x)

//let / const → তারাও উপরে উঠে যায়, কিন্তু ইনিশিয়ালাইজ হওয়ার আগে ব্যবহার করলে error দেয় (temporal dead zone)।
//console.log(y)
var y = 20;

//Function Declaration (পুরো ফাংশন উঠে যায়, আগে থেকে ব্যবহার করা যায়):

sayhello()
function sayhello(){
    console.log("say hello")
}