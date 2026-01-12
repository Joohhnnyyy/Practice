// let a = 123;
// try{
//     console.log(a.name.frames);
// }

// catch(e){
//     console.log("An error occurred: " + e.message);
//     console.log("Stack trace: " + e.stack);
//     console.log("Error name: " + e.name);
//     console.log("Error toString: " + e.toString());
// }
// finally{
//     console.log("Execution of the try-catch block is complete.");
// }

// console.log("Script execution continues...");


try {
  a = 213;
  console.log(a.name.frames);
}
catch (err){
  // throw new Error("Custom Error : something went wrong!");
  console.error("Custom Error : something went wrong!");
}