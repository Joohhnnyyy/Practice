
// apikey = "8802860be9a6b98bcce92605f56b0cfc";
// city = "London";
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
// fetch(url)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//   })

// async function fetchWeatherData(city) {
//   await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2 second delay
//   const apikey = "8802860be9a6b98bcce92605f56b0cfc";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;

// }
// fetchWeatherData("New York").then(data => console.log(data));


// function featchWeatherData(city) {
//   let apikey = "8802860be9a6b98bcce92605f56b0cfc"
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
// }
// featchWeatherData("noida");


// async function fetchWeatherData(city) {
//   let apikey = "8802860be9a6b98bcce92605f56b0cfc"
//   let rawdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
//   let data = await rawdata.json();
//   console.log(data);
// }
// fetchWeatherData("noida");

async function fetchWeatherData(city) {
  try{
    let apikey = "8802860be9a6b98bcce92605f56b0cfc"
    let rawdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    if(!rawdata.ok){
      throw new Error("City not found");
    }
    let data = await rawdata.json();
    console.log(data);
  }
  catch(error){
    console.log("Error:", error.message);
  }
}
fetchWeatherData("noidaa");


