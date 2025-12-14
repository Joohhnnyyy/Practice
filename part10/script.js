let age = prompt("Enter a number:");
if(age === null){
    console.error("User cancelled the prompt.");
}
else{

  if (age.trim() === "") {
      console.error("No input provided.");
  }
  else{
    age = Number(age);
    if(isNaN(age)){
        console.error("Input is not a valid number.");
    }
    else{
        if(age < 0){
            console.error("Age cannot be negative.");
        }
        else if(age <= 12){
            console.log("You are a child.");
  }
        else if(age <= 19){
            console.log("You are a teenager.");
  }
        else{
            console.log("You are an adult.");
  }

}
  }}