// // // function higherOrderFunction(fn){
// // //   fn();
// // //   fn();
// // // }

// // // higherOrderFunction(function(){
// // //   console.log("Hello from the callback function!");
// // // })


// // // function pure(a,b){
// // //   console.log(a+b);
// // // }


// // // function impure(a,b){
// // //   console.log(a+b + Math.random());
// // // }

// // // pure(2,3);
// // // impure(2,3);

// // // let obj = {
// // //   name: "ansh",
// // //   fnc: function(){
// // //     function fnc2(){
// // //       console.log(this);
// // //     }
// // //     fnc2();

// // //   },
// // // }

// // // obj.fnc();



// // // let arr = [1,2,3,4,5];

// // // let newarr =  arr.map(function ( val ){
// // //   return val * val;
// // // });

// // // console.log(newarr);

// // // let salary = [2000,3000,4000,5000];

// // // let totalSalary = salary.reduce(function ( acc , val ){
// // //   return acc + val;
// // // },0);

// // // console.log(totalSalary);



// // let arr = [1,2,3,4,5,6,7,8,9,10];

// // let evenarr = arr.filter(function (val){
// //   return val % 2 === 0;
// // });
// // console.log(evenarr);


// // let names = ["ansh","john","doe","alice","bob"];

// // let shortnames = names.every(function ( val){
// //   return val.length <= 3;
// // });

// // console.log(shortnames);

// let user = {
//   name: "ansh",
//   age: 25,
//   city: "new york",
// };

// Object.seal(user);
// user.age = 26;
// user.country = "USA"; // This will be ignored

// console.log(user);


let user = {
  name: "ansh",
  age: 25,
  address : {
    city: "new york",
    country: "USA",
    road: "5th avenue"
  }
}
let { road , city , country } = user.address;
console.log(road);
console.log(city);
console.log(country);