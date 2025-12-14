var iplTeams = [
  {
    name: "Mumbai Indians",
    fullName: "Mumbai Indians",
    primaryColor: "#004BA0",
    secondaryColor: "#D1AB3E",
    trophies: 5,
    captain: "Hardik Pandya"
  },
  {
    name: "Chennai Super Kings",
    fullName: "Chennai Super Kings",
    primaryColor: "#FDB913",
    secondaryColor: "#005CB9",
    trophies: 5,
    captain: "Ruturaj Gaikwad"
  },
  {
    name: "Kolkata Knight Riders",
    fullName: "Kolkata Knight Riders",
    primaryColor: "#3A225D",
    secondaryColor: "#D4AF37",
    trophies: 3,
    captain: "Shreyas Iyer"
  },
  {
    name: "Sunrisers Hyderabad",
    fullName: "Sunrisers Hyderabad",
    primaryColor: "#FF822A",
    secondaryColor: "#2C2C2C",
    trophies: 1,
    captain: "Pat Cummins"
  },
  {
    name: "Rajasthan Royals",
    fullName: "Rajasthan Royals",
    primaryColor: "#EA1A8E",
    secondaryColor: "#004BA0",
    trophies: 1,
    captain: "Sanju Samson"
  },
  {
    name: "Royal Challengers Bengaluru",
    fullName: "Royal Challengers Bengaluru",
    primaryColor: "#000000",
    secondaryColor: "#DA291C",
    trophies: 0,
    captain: "Faf du Plessis"
  },
  {
    name: "Delhi Capitals",
    fullName: "Delhi Capitals",
    primaryColor: "#004C93",
    secondaryColor: "#E31837",
    trophies: 0,
    captain: "Rishabh Pant"
  },
  {
    name: "Gujarat Titans",
    fullName: "Gujarat Titans",
    primaryColor: "#1B2133",
    secondaryColor: "#E5C07B",
    trophies: 1,
    captain: "Shubman Gill"
  },
  {
    name: "Lucknow Super Giants",
    fullName: "Lucknow Super Giants",
    primaryColor: "#0057B8",
    secondaryColor: "#F5791F",
    trophies: 0,
    captain: "KL Rahul"
  },
  {
    name: "Punjab Kings",
    fullName: "Punjab Kings",
    primaryColor: "#ED1B24",
    secondaryColor: "#C4C4C4",
    trophies: 0,
    captain: "Shikhar Dhawan"
  }
];


var button = document.getElementById("button");
var box = document.getElementById("box");
var main = document.querySelector("main");


button.addEventListener("click", function() {

  var team = iplTeams[Math.floor(Math.random()*iplTeams.length)];

  box.style.backgroundColor = team.primaryColor;
  box.style.color = team.secondaryColor;
  box.innerHTML = `<h1>${team.name}</h1>
                   <p>Captain: ${team.captain}</p>
                   <p>Trophies Won: ${team.trophies}</p>`;

  
  main.style.backgroundColor = team.secondaryColor;

});
