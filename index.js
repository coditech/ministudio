const express = require('express')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.all('/api/form', (req, res) => {
    console.log(req.body)
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
     <h3>Contact Details</h3>
     <ul>
         <li>Name: ${req.body.name}</li>
         <li>Email: ${req.body.email}</li>
     </ul>
     <h3>Message</h3>
     <p>${req.body.message}</p>`
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,

            auth: {
                user: 'bob.jakmour@gmail.com',
                pass: 'blodseeker88x'
            }
        });
        let mailOptions = {
            from: 'test@testaccount', // sender address
            to: 'bob.jakmour@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: req.body.message, // plain text body
            html: htmlEmail // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.message);

            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        })

    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})