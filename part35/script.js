// function fetchingdata(username,callback)
// {

//   setTimeout(() => {
//     console.log("fetching data please wait....");
    
//   }, 3000);

//   setTimeout(() => {
//         callback("data fetched successfully");
//         callback({name:username, age:22, country:"India"});

    
//   }, 4000);


// }

// fetchingdata("Ansh",function(data){
//   console.log(data);

// })


// function afterDelay(time , callback){
//   setTimeout(() => {
//     callback({message: "Task completed", status: "success"});
//   }, time);
// }

// afterDelay(5000, function(result){
//   console.log(result.message +  " - " + result.status);
// });



// function getUser(userName,callback){
//   setTimeout(() => {
//     console.log("fetching user data please wait....");
//     callback({userName: userName, age:22, country:"India",posts:5});
    
//   }, 2000);
// }
// function getUserPost(userName, callback){
//   setTimeout(() => {
//     console.log("fetching user posts please wait....");
//     callback({post1:"Post about JS", post2:"Post about HTML", post3:"Post about CSS"});
    
//   }, 3000);
// }

// getUser("Ansh", function(data){

//   getUserPost(data.userName, function(posts){
//     console.log(`User: ${data.userName}, Age: ${data.age}, Country: ${data.country}`); 
//     console.log("User Posts:", posts);

//   });
// });



// function instaDetails(username , callback){
//   setTimeout(() => {
//     callback({uniqueID:1234, username: username, followers:1500, following:300, posts:75});
    
//   }, 3000);
// }
// function metaDetails(uniqueID, callback){
//   setTimeout(() => {
//     callback({uniqueID: uniqueID, companyName:"Meta", founded:2004, ceo:"Mark Zuckerberg"});
//   }, 3000);

// }
// instaDetails("Ansh_07", function(userData){
//   metaDetails(userData.uniqueID, function(companyData){
//     console.log(`Instagram User: ${userData.username}, Followers: ${userData.followers}, Following: ${userData.following}, Posts: ${userData.posts}`);
//     console.log(`Company Name: ${companyData.companyName}, Founded: ${companyData.founded}, CEO: ${companyData.ceo}`);
//   });
// });


function loginUser(userName , callback){
  console.log("Logging in user, please wait....");
  setTimeout(() => {
    callback({userName: userName, userID: 101, status:"Logged In"});  
    
  }, 2000);
}

function fetchPermission(userID,callback){
  console.log("Fetching user permissions, please wait....");
  setTimeout(() => {
    callback({userID: userID, permission:"Admin", accessLevel:5,dashboardAccess:true});
    
  }, 4000);

}


function loadDashboard(permission,callback){
  console.log("Loading dashboard, please wait....");
  setTimeout(() => {
    callback({permission:"Granted", widgets:["Analytics","User Management","Settings"], theme:"Dark Mode"});
    
  }, 6000);
}

//christmas tree problem
//callback hell
//solution: Promises and async await
loginUser("Ansh_07",function (userData){
  fetchPermission(userData.userID,function(permissionData){
    loadDashboard(permissionData.permission,function(dashboardData){
      console.log("permission to access the dashboard:" + dashboardData.permission + " to load dashboard with widgets: " + dashboardData.widgets.join(", ") + " and theme: " + dashboardData.theme);
    })
  })

})

