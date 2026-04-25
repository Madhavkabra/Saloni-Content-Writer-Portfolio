import qs from 'qs';
import sendgrid from '@sendgrid/mail';
import { withCors } from './withCors';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  await withCors(req, res);

  try {
    const body = await parseRequestBody(req);
    const fullname = body?.fullname?.value || body?.fullname || 'Website Visitor';
    const senderEmail = body?.email?.value || body?.email || 'Not provided';
    const message = body?.message?.value || body?.message || '';

    await sendgrid.send({
      to: 'salonikabra1100@gmail.com', // Your email where you'll receive emails
      from: 'salonikabra1100@gmail.com', // your website email address here
      subject: `Portfolio, Message from ${fullname}`,
      html: `Sender email:${senderEmail}<br/> <h3>${message} </h3>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error: error.message,
    });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;

export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseRequestBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;

  const raw = await readRawBody(req);
  if (!raw) return {};

  const contentType = req.headers['content-type'] || '';
  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(raw);
    } catch (error) {
      // Fallback to urlencoded parser for malformed clients
      return qs.parse(raw);
    }
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    return qs.parse(raw);
  }

  // Best-effort fallback: try JSON first, then querystring
  try {
    return JSON.parse(raw);
  } catch (error) {
    return qs.parse(raw);
  }
}

async function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}
