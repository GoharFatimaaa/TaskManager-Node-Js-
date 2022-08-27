
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox283c271efaf94bc79155bf5361075f20.mailgun.org"
const apiKey=process.env.API_KEY
const mg = mailgun({apiKey , domain: DOMAIN});

const sendWelcomeEmail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'goharfatima2321@gmail.com',
        subject: 'welcome',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    };
    mg.messages().send(data, function (error, body) {
        console.log(data);
    });
}
const sendCancelationEmail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'goharfatima2321@gmail.com',
        subject: 'welcome',
        text: `Goodbye, ${name}. we will miss you.`
    };
    mg.messages().send(data, function (error, body) {
        console.log(data);
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}