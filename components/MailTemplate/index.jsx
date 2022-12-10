export default function Template() {
  return (
    <div
      style={{ width: 600, background: '#fff', margin: 'auto', height: 400 }}
    >
      <h1 style={{ 'text-align': 'center', border: '1px solid orange' }}>
        Somos <span style={{ color: 'orange' }}>Huella</span>
      </h1>
      <h2 style={{ 'text-align': 'center' }}>
        Gracias por suscribirte a nuestras novedades
      </h2>
      <h3 style={{ 'text-align': 'center', padding: 30 }}>
        Te recomendamos nuestro ultimo post:{' '}
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
  );
}
