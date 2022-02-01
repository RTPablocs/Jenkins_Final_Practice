const mailer = require('nodemailer')




const transporter = mailer.createTransport({
    host: 'smtp.ionos.es',
    port: 587,
    auth: {
        user: process.argv[2],
        passs: process.argv[3]
    }
});

const mailOptions = {
    from: 'pablo@pablocs.com',
    to: 'amdpablocs@gmail.com',
    subject: 'Resultado de la Pipeline de NextJS',
    text: `linter_job: ${process.argv[3]} \n
    cypress_job: ${process.argv[4]} \n
    badge_job: ${process.argv[5]} \n
    deploy_job: ${process.argv[6]}`
};


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});