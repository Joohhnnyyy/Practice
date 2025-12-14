//cout how many numbers are between 1 and 15 which are grater then 8 


let counter = 0;

for(let i = 1 ; i < 16 ; i++){
  if( i > 8) counter++;
  else continue;
}
console.log(`There are ${counter} numbers between 1 and 15 which are greater than 8`);