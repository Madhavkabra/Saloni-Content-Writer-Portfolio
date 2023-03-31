import qs from 'qs';
import sendgrid from '@sendgrid/mail';
import { withCors } from './withCors';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  await withCors(req, res);

  try {
    const body = qs.parse(req.body);

    await sendgrid.send({
      to: 'salonikabra1100@gmail.com', // Your email where you'll receive emails
      from: 'salonikabra1100@gmail.com', // your website email address here
      subject: `Portfolio, Message from ${body.fullname.value}`,
      html: `Sender email:${body.email.value}<br/> <h3>${body.message.value} </h3>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error: error.message,
    });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
