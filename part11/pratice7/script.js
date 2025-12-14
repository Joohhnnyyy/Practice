prompt("Welcome to our ATM service:");
let balance = 1000;
let active = true;
while(active){
  let action = prompt("Choose an action: 1- Deposit, 2- Withdraw, 3- Check Balance, 4- Exit");
  switch(action){
    case '1':
      let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
      if(depositAmount > 0){
        balance += depositAmount;
        alert(`Successfully deposited $${depositAmount}. New balance is $${balance}.`);
      }
      break;

    case '2':
      let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
      if(withdrawAmount > 0 && withdrawAmount < balance){
        balance -= withdrawAmount;
        alert(`Successfully withdrew $${withdrawAmount}. New balance is $${balance}.`);
      }
      break;

    case '3':
      alert(`Current balance is $${balance}.`);
      break;

    case '4':
      alert("Thank you for using our ATM service. Goodbye!");
      active = false;
      break;
    default:
      alert("Invalid option. Please try again.");
  }
}