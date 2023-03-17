import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "madhav.kabra1100@gmail.com", // Your email where you'll receive emails
      from: "salonikabra1100@gmail.com", // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<h3>You've got a new mail from ${req.body.fullname.value}, their message is: ✉️${req.body.message.value} </h3>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;