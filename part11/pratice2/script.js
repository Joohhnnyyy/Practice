let wish = prompt("Enter your wish:");
let attemp = 1;
while (wish !== "stop"){
  wish = prompt("you like to continue? ");
  attemp++;
  alert("your attemp number is: " + attemp);
}
alert("You have exited the loop after " + attemp + " attemps.");