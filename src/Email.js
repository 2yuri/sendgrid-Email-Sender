const email = require("@sendgrid/mail");

require("dotenv").config();
email.setApiKey(process.env.SENDGRID_API_KEY);

exports.send = async (subject, body) => {
  const content = {
    to: process.env.SENDGRID_RECEIVER,
    from: process.env.SENDGRID_SENDER,
    subject: subject,
    text: "Novo contato recebido no site",
    html: body,
  };

  email.send(content);
};
