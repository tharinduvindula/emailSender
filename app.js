const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to Tea Truth <br><br> <img src='https://i.ibb.co/1v6XfQV/favicon.jpg' style='width: 80px; height: 80px; margin: 20 %; margin - top: 8 %;'/></h1>"
  );
});

app.post("/sendmailAdminRegistation", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendmailAdminRegistation(user, info => {
    console.log(`The mail has beed send`);
    res.send(info);
  });
});

async function sendmailAdminRegistation(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<teatruth@gmail.com>', // sender address
    to: 'tharinduvindula@gmail.com', // list of receivers
    subject: "registation for web app", // Subject line
    html: `<h1 style='text-align: center'>Wellcome to Tea Truth <br><br> <img src='https://i.ibb.co/1v6XfQV/favicon.jpg' style='width: 80px; height: 80px; margin: 20 %; margin - top: 8 %;'/></h1>
    <p>visit this link for registation https://teatruth-8083d.web.app/registation?Token=${user.token}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

app.post("/sendmailManagerRegistation", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendmailManagerRegistation(user, info => {
    console.log(`The mail has beed send`);
    res.send(info);
  });
});

async function sendmailManagerRegistation(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<teatruth@gmail.com>', // sender address
    to: 'tharinduvindula@gmail.com', // list of receivers
    subject: "registation for web app", // Subject line
    html: `<h1 style='text-align: center'>Wellcome to Tea Truth <br><br> <img src='https://i.ibb.co/1v6XfQV/favicon.jpg' style='width: 80px; height: 80px; margin: 20 %; margin - top: 8 %;'/></h1><p>visit this link for registation https://teatruth-8083d.web.app/registation?Token=${user.token}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

app.post("/sendmailLoaderRegistation", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendmailLoaderRegistation(user, info => {
    console.log(`The mail has beed send`);
    res.send(info);
  });
});

async function sendmailLoaderRegistation(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<teatruth@gmail.com>', // sender address
    to: 'tharinduvindula@gmail.com', // list of receivers
    subject: "registation for web app", // Subject line
    html: `<h1 style='text-align: center'>Wellcome to Tea Truth <br><br> <img src='https://i.ibb.co/1v6XfQV/favicon.jpg' style='width: 80px; height: 80px; margin: 20 %; margin - top: 8 %;'/></h1><p>your token is ${user.token}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

app.post("/sendmailSupervisorRegistation", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendmailSupervisorRegistation(user, info => {
    console.log(`The mail has beed send`);
    res.send(info);
  });
});

async function sendmailSupervisorRegistation(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<teatruth@gmail.com>', // sender address
    to: 'tharinduvindula@gmail.com', // list of receivers
    subject: "registation for web app", // Subject line
    html: `<h1 style='text-align: center'>Wellcome to Tea Truth <br><br> <img src='https://i.ibb.co/1v6XfQV/favicon.jpg' style='width: 80px; height: 80px; margin: 20 %; margin - top: 8 %;'/></h1><p>your token is ${user.token}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

app.post("/sendmailDisstributorRegistation", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendmailDistributorRegistation(user, info => {
    console.log(`The mail has beed send`);
    res.send(info);
  });
});

async function sendmailDistributorRegistation(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<teatruth@gmail.com>', // sender address
    to: 'tharinduvindula@gmail.com', // list of receivers
    subject: "registation for web app", // Subject line
    html: `<h1 style='text-align: center'>Wellcome to Tea Truth <br><br> <img src='https://i.ibb.co/1v6XfQV/favicon.jpg' style='width: 80px; height: 80px; margin: 20 %; margin - top: 8 %;'/></h1><p>your token is ${user.token}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

app.post("/sendmailDisstributorRegistation", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendmailDistributorRegistation(user, info => {
    console.log(`The mail has beed send`);
    res.send(info);
  });
});

app.post("/sendmailwebfrogetpassword", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendmailwebfrogetpassword(user, info => {
    console.log(`The mail has beed send`);
    res.send(info);
  });
});

async function sendmailwebfrogetpassword(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<teatruth@gmail.com>', // sender address
    to: 'tharinduvindula@gmail.com', // list of receivers
    subject: "registation for web app", // Subject line
    html: `<h1 style='text-align: center'>Wellcome to Tea Truth <br><br> <img src='https://i.ibb.co/1v6XfQV/favicon.jpg' style='width: 80px; height: 80px; margin: 20 %; margin - top: 8 %;'/></h1>
    <p>visit this link for resetpassword https://teatruth-8083d.web.app/froget-password?Token=${user.token}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}


app.post("/sendmailappfrogetpassword", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendmailappfrogetpassword(user, info => {
    console.log(`The mail has beed send`);
    res.send(info);
  });
});

async function sendmailappfrogetpassword(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<teatruth@gmail.com>', // sender address
    to: 'tharinduvindula@gmail.com', // list of receivers
    subject: "registation for web app", // Subject line
    html: `<h1 style='text-align: center'>Wellcome to Tea Truth <br><br> <img src='https://i.ibb.co/1v6XfQV/favicon.jpg' style='width: 80px; height: 80px; margin: 20 %; margin - top: 8 %;'/></h1>
    <p>your token is ${user.token}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}


// main().catch(console.error);
