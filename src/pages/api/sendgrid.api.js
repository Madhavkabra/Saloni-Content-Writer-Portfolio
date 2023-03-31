import sendgrid from '@sendgrid/mail';
import { withCors } from './withCors';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  await withCors(req, res);

  console.log(process.env.SENDGRID_API_KEY, '-----------process.env.SENDGRID_API_KEY');
  const body = JSON.parse(req.body);
  try {
    await sendgrid.send({
      to: 'chandreshpatidar5@gmail.com', // Your email where you'll receive emails
      from: 'chandreshpatidar5@gmail.com', // your website email address here
      subject: `Portfolio, Message from ${body.fullname.value}`,
      html: `Sender email:${body.email.value}<br/> <h3>${body.message.value} </h3>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message, body });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
