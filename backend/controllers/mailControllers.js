const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
    const { email, subject, message } = req.body;
    console.log(email, subject, message);

    var mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        text: message,
    };

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
            res.status(500).send("Une erreur s'est produite lors de l'envoi de l'e-mail.");
        } else {
            console.log("Email sent successfully!");
            res.status(200).send("E-mail envoyé avec succès.");
        }
    });
});

module.exports = { sendEmail };