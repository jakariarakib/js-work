console.log("1. শুরু"); // synchronous

setTimeout(() => {
    console.log("2. setTimeout callback"); // asynchronous
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise callback"); // microtask
});

console.log("4. শেষ"); // synchronous


/*JavaScript প্রথমে সব synchronous (এক লাইনে সাথে সাথে শেষ হয় এমন কাজ) চালায়।

যখন কোনো asynchronous কাজ (যেমন setTimeout, fetch) আসে, তখন সেটাকে Web APIs এ পাঠায়।

কাজ শেষ হলে সেটা callback queue (বা microtask queue) তে যায়।

Event Loop দেখে main stack ফাঁকা হলে queue থেকে callback নিয়ে আবার চালায়।

//কনকারেন্সি মানে হচ্ছে — একাধিক কাজ একসাথে শুরু করতে পারা, কিন্তু আসলে একই সময়ে চালানো নয়।
JavaScript এক থ্রেডে কাজ করে, কিন্তু non-blocking async কাজ ব্যবহার করে একই সাথে অনেক টাস্ক ম্যানেজ করতে পারে।

👉 উদাহরণ:

তুমি চা বানাচ্ছো (main task)।

একই সময়ে তুমি রাইস কুকারে ভাত বসালে (async task)।

তুমি চা বানাচ্ছো, ভাত meantime-এ রান্না হতে থাকে।

ভাত রান্না হলে কুকার beep দিয়ে বলে “হয়ে গেছে” (callback queue → event loop → main stack এ যায়)। */