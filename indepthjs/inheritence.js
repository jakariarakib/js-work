// একটি সাধারণ object
let person = {
    greet: function() {
        console.log("হ্যালো, আমি একজন মানুষ");
    }
};

// আরেকটা object বানাই
let student = {
    study: function() {
        console.log("আমি পড়াশোনা করছি");
    }
};

// student এর prototype হিসেবে person কে সেট করি
Object.setPrototypeOf(student, person);

// এখন দেখি
student.study();  // নিজস্ব মেথড
student.greet();  // person থেকে Inherit করেছে

//Inheritance মানে হলো একটা object আরেকটা object এর property এবং method ব্যবহার করতে পারা।

//জাভাস্ক্রিপ্টে প্রতিটা object এর ভেতরে একটা লুকানো (hidden) property থাকে যেটাকে বলে prototype।