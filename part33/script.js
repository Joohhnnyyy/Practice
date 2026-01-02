let user = {
  name: "Alice",
  age: 30,
  city: "New York",
  login : function() {
    console.log(this.name + " has logged in.");
  }
}
class userr {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  login() {
    if(this.name == "Alice" && this.age == 30 && this.city == "New York") {
      console.log(this.name + " has logged in.");
    }
    else{
      console.log("Missing user information.");
    }
  }
}
let user1 = new userr("Bob", 25, "Los Angeles");
user.login();
user1.login();



let product = {
  name: "Laptop",
  price: 1200,
  stock: 50,
  discount: 0.1,
  displayInfo : function (){
    return (`product Name : ${this.name}, Price : ${this.price}, Stock : ${this.stock}`);
  },
  afterDiscount : function() {
    let discountedPrice = this.price = (this.price * this.discount);
    return ( `Price after discount : ${discountedPrice}` );
  }

}
console.log(product.displayInfo());
console.log(product.afterDiscount());


class car {
  constructor(brand, model, year, color, speed) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.speed = speed;
  }
  drive(){
    return (`Brand: ${this.brand} , Speed: ${this.speed} km/h`);
  }
}

let car1 = new car ("Toyota", "Camry", 2020, "Red", 100);
console.log(car1.drive());
let car2 = new car ("Honda", "Civic", 2019, "Blue", 90);


class student {
  constructor(name, age, grade, major, gpa) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.major = major;
    this.gpa = gpa;
  }
  introduction (){
    return (`My name is ${this.name} , I am ${this.age} years old, majoring in ${this.major} with a GPA of ${this.gpa}.`);
  }
  
}
let stu1 = new student ("John", 20, "Junior", "Computer Science", 3.8);
console.log(stu1.introduction());
let stu2 = new student ("Emily", 19, "Sophomore", "Biology", 3.6);
console.log(stu2.introduction());


let obje = {
  sayName : function (){
   return (`Hello, my name is ChatGPT. ${this}`);
  },
  sayMyName : ()=>{
    return (`Hello, my name is ChatGPT.${this}`);
  }
}
console.log(obje.sayName());
console.log(obje.sayMyName());

function Name(val){
  this.name = val;
  this.login = function(){
    if(this.name == "Ansh"){
      console.log(name + " has logged in.");
  }
  else{
    console.log("Unknown user.");
  }

}

  
}
let an1 = new Name("Ansh");
let an2 = new Name("Deo");


function Name(){
  console.log(this.name);
  console.log(this.class);
  console.log(this.gender);

}

let obj = {
  name: "Ansh",
  class: 12,
  gender: "Male"
}

let testing = Name.bind(obj)
testing();