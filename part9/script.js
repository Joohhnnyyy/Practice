let a = 10 ,b = 3; 
console.log("Addition: " + (a + b));
console.log("subtraction: " + (a - b));
console.log("multiplication: " + (a * b));
console.log("division: " + (a / b));
console.log("modulus: " + (a % b));

let x = 5 ;
console.log("updated value:" + (x+=3));
console.log("updated value:" + (x*=3));
console.log("updated value:" + (x-=3));
console.log("updated value:" + (x/=3));

let count  = 5;
console.log("pre-increment:"+ count++);
console.log("post-increment:"+ ++count);
console.log("pre-decrement:"+ count--);
console.log("post-decrement:"+ --count);


console.log("comparison 5 == '5':" + (5 == '5'));
console.log("comparison 5 === '5':" + (5 === '5'));

//logical AND and OR

console.log("logical AND true && false:" + (true && false));
console.log("logical OR true || false:" + (true || false));
console.log("logical not !true:" + (!true));


console.log(y);
var y = 10;

// console.log(z);
// let z = 20;

testing();
function testing(){
    console.log("Function hoisting works!");
}


// hello();
// var hello = function(){
//   console.log("Function expression hoisting test");
// }

let age = prompt ("Enter you age:");

alert
if(age>= 18){
  alert("you are eligible to vote ");
}
else{
  alert("you are not eligible to vote ");
}

let score = 40;
score >= 50 ? console.log("You passed the exam") : console.log("You failed the exam");


let temp = prompt("Enter the temperature:");
temp > 30 ? console.log("It's a hot day") : console.log("It's a cool day");


let day = prompt("Enter the day of the week (1-7):");
switch(day){
  case "1": alert("Monday");
  break;
  case "2": alert("Tuesday");
  break;
  case "3": alert("Wednesday");
  break;
  case "4": alert("Thursday");
  break;
  case "5": alert("Friday");
  break;
  case "6": alert("Saturday");
  break;
  case "7": alert("Sunday");
  break;
  default: alert("Invalid day");
}

let agee = 12;
let country = "india";
agee>18 && country ==="india"? console.log("You are eligible to vote"): console.log("You are not eligible to vote");