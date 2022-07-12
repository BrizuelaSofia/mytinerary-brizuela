const nodemailer = require('nodemailer')
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2

const sendEmail = async (email, string) => { 

    const myOAuth2Client = new OAuth2(
        process.env.GOOGLE_CLIENTID,
        process.env.GOOGLE_CLIENTSECRET,
        "https://developers.google.com/oauthplayground"
    )
 console.log(myOAuth2Client)
 console.log('myOAuth2Client')
    myOAuth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESHTOKEN
    })

    const accessToken = await myOAuth2Client.getAccessToken()
  console.log(accessToken)
  console.log('accessToken')
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            type: "OAuth2",
            clientId: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_CLIENTSECRET,
            refreshToken: process.env.GOOGLE_REFRESHTOKEN,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false //para evitar que bloquee el antivirus
        }
    })
   console.log(transporter)
   console.log('transporter')
    let mailOptions = {
        from: process.env.USER,
        to: email,
        subject: 'verify account',
        html: 
        ` <a href=https://back-mytinerary-sofi.herokuapp.com/api/verify/${string}>CLICK!</a> 
            <h3>to confirm!</h3>`
    }
 console.log(mailOptions)
 console.log('mailOptions')
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error)
        } else {
            console.log(`check ${email} to confirm your account`) 
        }
    })
}

module.exports = sendEmail