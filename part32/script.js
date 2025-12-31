//global => window
// console.log(this); // window


//inside a function => window
// function test(){
//     console.log(this); // window
// }
// test();

//es5 function inside object => object
// const obj ={
//   func : function(){
//     console.log(this); // obj
//   }
// }
// obj.func();

//es6 function inside object => window
// const obj = {
//   func : () => {
//     console.log(this); // window
//   }
// }
// obj.func();

//es5 function inside es5 function inside object => object

// const obj ={
//   name: "ansh",
//   func : function(){
//     function test(){
//       console.log(this); // window
//     }
//     test();
//   }
// }
// obj.func();


//es6 function inside es5 function inside object => obj
// const obj = {
//   name: "ansh",
//   func : function (){
//     const test = () => {
//       console.log(this.name); // obj
//     }
//     test();
//   }
// }
// obj.func();

//call => call the function and set the this value
let obj = {
  name: "ansh",
  class: "js",
  number: 24235325
}
// function test(){
//   console.log(this.name + " " + this.class);
// }
// test.call(obj); // ansh js

// apply => call the function and set the this value in the form of array
// function test(num1, num2){
//   console.log(this.name + " " + this.class + " " + (num1 + num2));
// }
// test.apply(obj, [10, 20]); // ansh js 30

// // bind => return a new function with this value set to the passed value
// function test(num1, num2){
//   console.log(this.name + " " + this.class + " " + (num1 + num2));
// }
// let newFunc = test.bind(obj);
// newFunc(5, 15); // ansh js 20 