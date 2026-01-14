//debounce and throttle functions

// function debounce (fn ,delay){
//     let timer;
//     return function (){
//       clearTimeout (timer);
//       timer = setTimeout (fn, delay);
//     }
// }
// document.querySelector("#search")
// .addEventListener("input", debounce (function (){
//     console.log("debounce api call");
// },300));

// function throttle (fn ,delay){
//   let lastCall = 0;
//   return function (){
//     const now = new Date();
//     if (now - lastCall >= delay){
//       lastCall = now;
//       fn();
//     }

//   }
// }
// window.addEventListener("mousemove", throttle (function (e){
//     console.log("throttle api call");
// },2000));

//json parse and stringify

const user = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "swimming"]
};

const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

const parsedUser = JSON.parse(jsonString);
console.log("Parsed Object:", parsedUser);