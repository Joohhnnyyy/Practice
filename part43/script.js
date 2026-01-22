// import test from './test.js';

// function test(a,b){
//     return a+b
// }
// const a = test(2,7);
// console.log("Value returned from test function:", a);
// console.log(test());
//React - UI
// React DOM - rendering library for web

// var h1 = document.createElement("h1");
// h1.innerText = "Hello World!";
// h1.style.color = "blue";
// document.body.appendChild(h1);

// var h1 = React.createElement("h1", { id: "header", style: { color: "red" } }, "Hello World!");
// var h2 = React.createElement('h2', { id: "subheader", style: { color: "green" } }, "Hello from h2");
// var div = React.createElement('div', {id: "parent", className: "elem"}, [h1, h2]);
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div);

// import h1 from './test.js';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1());
// console.log(h1);

// import div from './test.js';
// import circle from './test1.js';
import parent from './parent.js';
const root = ReactDOM.createRoot(document.getElementById("root"));
// const parent = ()=> React.createElement('div',{id: "parent", className: "parent"}, [div(), circle()]);
root.render(parent());