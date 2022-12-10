/*ignore eslint*/
import Image from 'next/image';
import Link from 'next/link';
import styles from './LastPost.module.css';

export default function LastPost() {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image
          src="/../public/post1.png"
          width="512"
          height="512"
          alt="isaias 61:4"
        />
      </div>
      <div className={styles.card__paragraph}>
        <h2>Otra historia de familia</h2>
        <p>
          Sabemos que durante el tiempo de aislamiento muchas familias entraron
          en grandes conflictos, familias completas en crisis. De repente casi
          la totalidad de las familias comenzamos a compartir más tiempo del
          habitual. Hubo quienes que pasaban sin verse prácticamente durante la
          semana y comenzaron a convivir 24/7. Seguramente habría más ejemplos;
          como los trabajadores de la salud, que pasaron a “vivir” en sus
          trabajos y estar más aislados de sus familias… otros por estar con
          virus y aislados pasaban crisis relacionadas a esta condición…. De
          repente “casa” era casa, trabajo, jardín, escuela, taller de arte,
          música, gimnasio, cine, café y mucho más….
        </p>
        <Link href="/posts/1">
          <small>Continuar leyendo...</small>
        </Link>
      </div>
    </div>
  );
}
