let arr = ["mango", "apple", "banana", "grapes", "orange"];
arr.forEach(function(fruit, index) {
  console.log("Fruit at index " + index + " is " + fruit);
});

arr.push("kiwi");
arr.unshift("strawberry");


console.log("After adding elements:", arr);
arr.shift();
console.log("After removing first element:", arr);

let obj = { 
  name: "John", 
  age: 30, 
  city: "New York", 
  package: "Gold",
  membership: "Premium",
  location: "USA"
};

for(let key in obj) {
  console.log(key + " : " + obj[key]);
}


setTimeout(() => {
  console.log("This message is displayed after 3 seconds");
  
}, 3000);