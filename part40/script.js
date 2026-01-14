let emails = [
  "john.doe@gmail.com",
  "ansh.johnson@yahoo.com",
  "user123@outlook.com",
  "admin@company.com",
  "support@mysite.org",
  "contact@service.net",
  "hello.world@gmail.com",
  "test_user@domain.co",
  "info@startup.io",
  "feedback@website.in"
];
function sendEmail(email){
  let time = Math.floor(Math.random() * 10)
  return new Promise((resolve,reject) => {
    setTimeout(() => {},time);
    let success = Math.floor(Math.random() * 15);
    if(success < 12){
      resolve(`Email sent to ${email}`);
    }
    else{
      reject(`Failed to send email to ${email}`);
    }
  }
  );
  }


  async function sendEmaileToAll(emailes){
    let allresponse = emailes.map(function (email) {
      return sendEmail(email)
      .then(function(data){
        return {status: "success", message: data};
      })
      .catch(function(error){
        return {status: "error", message: error};
      })
    })
    let ans = await Promise.all(allresponse);
    console.log(ans);
  }
  sendEmaileToAll(emails);



  // sendEmail("ansh.johnson@gmail.com")
  // .then(function (data) {
  //   console.log(data);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })
