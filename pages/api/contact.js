import sgMail from '@sendgrid/mail';

if (process.env.API_KEY) {
  sgMail.setApiKey(process.env.API_KEY);
}

export default async function contact(req, res) {
  let email = req.body;
  if (typeof email === 'string') {
    email = email.replace(/['"]+/g, '');
  }

  const msg = {
    to: email,
    from: 'somoshuelladejesus@gmail.com',
    subject: 'Novedades - Somos Huella',
    text: 'Gracias por suscribirte a nuestras novedades',
    html: `
    <div
    style={ width: 600px; background: #fff; margin: auto; height: 400px; }
  >
    <h1 style={ text-align: center; border: 1px solid orange; }>
      Somos <span style={ color: orange; }>Huella</span>
    </h1>
    <h2 style={ text-align: center; }>
      Gracias por suscribirte a nuestras novedades
    </h2>
    <h3 style={ text-align: center; padding: 30px; }>
      Te recomendamos nuestro ultimo post:
      <a href="https://www.somoshuella.com.ar/posts/1">
        Otra historia de familia
      </a>
    </h3>
    <ul>
      <li>
        Web: <a href="https://www.somoshuella.com.ar">Somos Huella</a>
      </li>
      <li>
        Email: <a mailto="somoshuelladejesus@gmail.com">Somos Huella</a>
      </li>
    </ul>
  </div>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('email sent successfully');
  } catch (err) {
    console.error(err);
  }

  res.send({ status: 200 });
}
