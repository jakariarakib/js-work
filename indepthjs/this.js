
const person = {
    name: "goeu",
    sayname: function(){
        console.log(this.name);
    }
};

person.sayname()

function test() {
  console.log(this);
}
test();

//JavaScript-এর this keyword বাংলায় বলতে গেলে 👉 "বর্তমান অবজেক্টকে বোঝায়" বা "যেটা কনটেক্সট তার রেফারেন্স"।