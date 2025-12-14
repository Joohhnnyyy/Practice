let admin = "Ansh"
let password = 1234;

let attempts = 3;

while(attempts > 0){
  let userName = prompt("Enter your username:");
  let userPassword = +prompt("Enter your password:");
  if(userName === null || userPassword === null){
    console.log("Login cancelled.");
    break;
  }
    if(userName === admin && userPassword === password){
      console.log("Login successful!");
      break;
  }
  else{
    attempts--;
    console.log(`Login failed! You have ${attempts} attempts left.`);
  }
}
if(attempts === 0) console.error("Account is locked due to too many failed login attempts.");