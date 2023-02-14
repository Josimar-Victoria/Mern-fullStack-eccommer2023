const nodeMailer = require('nodemailer')

const sendMail = async options => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    // service: process.env.SMPT_SERVICE,
    auth: {
      user: 'josimarvictoria968@gmail.com',
      pass: 'wqvdyxahozvqutov'
    }
  })

  const mailOptions = {
    from: 'josimarvictoria968@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message
  }

  await transporter.sendMail(mailOptions)
}

module.exports = sendMail
