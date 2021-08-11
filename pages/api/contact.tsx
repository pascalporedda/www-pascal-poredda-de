import { NextApiRequest, NextApiResponse } from 'next';
import { ContactData } from '../contact';
import * as EmailValidator from 'email-validator';

const nodemailer = require('nodemailer');

async function contact(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' || !req.body) {
    res.statusCode = 405;
    res.end();
    return;
  }

  const data = req.body as ContactData;

  if (
    !data.firstname ||
    !data.lastname ||
    !data.email ||
    !data.subject ||
    !EmailValidator.validate(data.email)
  ) {
    res.statusCode = 401;
    res.end();
  }

  const emailTemplate = `
    <p>Hey ${
      data.firstname
    }!<br> thanks for your request. I'll get back to you as soon as possible.<br><br>
    You submitted the following data:
    </p> 
    
    <ul>
       <li>Your name: ${data.firstname} ${data.lastname}</li>
       <li>Your email: ${data.email}</li>
       ${data.company ? `<li>Your company: ${data.company}</li>` : ''}
       <li>Type of the project: ${data.projectType}</li>
       <li>Brief description: ${data.subject}</li>
       <li>Full description of the project:</li>
    </ul>
    
    <p>${data.details.replaceAll('\n', '<br>')}</p>
    <br><br>
    <p>Until then,<br>Pascal</p>
  `;

  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp-relay.sendinblue.com',
    auth: {
      user: process.env.SENDINBLUE_USER,
      pass: process.env.SENDINBLUE_PASS,
    },
  });

  try {
    const response = await transporter.sendMail({
      from: 'Pascal Poredda <hello@pascal-poredda.de>',
      subject: 'Your request',
      to: data.email,
      replyTo: 'Pascal Poredda <hello@pascal-poredda.de>',
      bcc: 'me@pascal-poredda.de',
      html: emailTemplate,
    });

    if (response && response.messageId) {
      res.statusCode = 200;
      res.send({
        success:
          "Your request was submitted successfully. I'll get back to you as soon as possible.",
      });
      res.end();
      return;
    }
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.send({
      error:
        'An error occured while submitting the request. Please drop me an E-mail at: hello@pascal-poredda.de',
    });
    res.end();
    return;
  }
}

export default contact;
