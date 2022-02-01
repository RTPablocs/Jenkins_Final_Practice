const mailer = require('nodemailer')

console.log(process.argv[2])
const data = process.argv[2].split('/')


const transporter = mailer.createTransport({
    host: 'smtp.ionos.es',
    port: 587,
    auth: {
        user: data[0],
        passs: data[1]
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