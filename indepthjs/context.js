function first(){
    console.log("inside first");
    second()
}

function second(){
    console.log("Inside second")
}

first()

console.log("done");


/*প্রোগ্রাম শুরু → GEC তৈরি → স্ট্যাকে যোগ।

first() কল → FEC for first() তৈরি → স্ট্যাকে যোগ।

console.log("Inside first") চলে।

তারপর second() কল → FEC for second() তৈরি → স্ট্যাকে যোগ।

console.log("Inside second") চলে।

second() শেষ → তার FEC স্ট্যাক থেকে বের হয়।

first() শেষ → তার FEC বের হয়।

শেষে console.log("Done") চলে → GEC-ও শেষ।*/
