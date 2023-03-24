const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
// service: "gmail",
    host: "smtp.gmail.com", 
  port: 587,
  secure: false,
  auth: {
    user: "testmail@gmail.com", // gmail ID
    pass: "password" // gmai account password
  }
});

let mailOptions = {
  from: "testmail@gmail.com", //sender 
  to: "reciever@gmail.com", //reciever
  subject: "Nodemailer test mail",
  text: "The code executed succesfully",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email succesfully sent: " + info.response);
  }
});
