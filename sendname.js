const nodemailer = require("nodemailer");
require("dotenv").config();
const email = process.env.email;
const pwd = process.env.pwd;
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "smartfarmtn@gmail.com",
    pass: "ywiu itde uhjg nols",
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Rayenaskri01@gmail.com" <${email}>`, // sender address
    to: "gmcws@gmail.com", // list of receivers
    subject: "Hello :coche_trait_plein:", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
main().catch(console.error);
