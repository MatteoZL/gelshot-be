import nodemailer from "nodemailer";
import hbs from 'nodemailer-express-handlebars';

export default async function sendMail(client, order) {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    
    transport.use('compile', hbs({
      viewEngine: 'express-handlebars',
      viewPath: './src/',
      extName: '.hbs'
    }));

    let values = Object.assign({}, order._doc, client._doc);

    const mailOptions = {
      from: process.env.EMAIL,
      to: client.email,
      subject: "Gracias por comprar en Gelshot",
      text: "Tu pedido en Gelshot se ha realizado exitosamente",
      template: '/libs/main',
      context: {values}
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
