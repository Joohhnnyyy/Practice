let password = prompt("Enter your password:");
let username = prompt("Enter your username:");
attemp = 3;

while (attemp > 0) {
  if(password === "qwerty" && username === "admin") {
    alert("Welcome admin");
    break;
  } else {
    attemp--; 
    alert("Incorrect password or username your left attemps are:" + attemp);
    password = prompt("Enter your password:");
    username = prompt("Enter your username:");
  }

}
if (attemp === 0) {
  alert("Your account is locked");
}
