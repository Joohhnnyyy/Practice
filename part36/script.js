// const prm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved!");
//   },4000)
// });

// prm
// .then(function () {
//   console.log("This runs after the promise is resolved.");
// })
// .catch(function () {
//   console.log("This runs if the promise is rejected.");
// });


// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(data => console.log(data.results[0].name.first))
// .catch(err => console.log("Error occurred: ", err));



// async function testing(){
//   let rawdata = await fetch(`https://randomuser.me/api/`);
//   let data = await rawdata.json();
//   console.log(data.results);
// }
// testing();

function getNum(){
  return new Promise((resolve, reject) => {
    Math.floor(Math.random() *10 ) > 5 ? resolve(`Success: Number is greater than 5 it is ${Math.floor(Math.random() *10 )}`) : reject(`Failure: Number is 5 or less it is ${Math.floor(Math.random() *10 )}`);
  });
}

async function checkNum(){
  let result = await getNum();
  console.log(result);

}

checkNum();