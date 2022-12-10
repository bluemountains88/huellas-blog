'use client';
import './styles.css';

const handleSend = (e) => {
  e.preventDefault();
  let email = e.target.elements.email.value;
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
  }).then((res) => {
    console.log(res);
  });
  e.target.reset();
};

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="title">
        <h2>Suscribite a nuestras novedades</h2>
      </div>
      <div>
        <form className="newsletter__form" onSubmit={handleSend}>
          <input
            type="email"
            name="email"
            placeholder="Ingrese su correo electronico..."
          />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}
