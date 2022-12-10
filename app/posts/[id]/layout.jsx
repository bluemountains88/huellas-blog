import Image from 'next/image';
import Link from 'next/link';
import './styles.css';

/*const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};*/

export default async function Post({ params, children }) {
  //const { id } = params;
  //const post = await fetchSinglePost(id);
  return (
    <article className="single-post">
      <h2 className="single-post__title">Otra historia de familia</h2>
      <div className="single-post__body">
        <Image
          src="/../public/post1.png"
          height="380"
          width="380"
          alt="isaias 61:4"
        />
        <p>
          Esta semana es la semana 4 del devocional que venimos realizando,
          estuvimos trabajando la Revancha de la Vuelta a la Casa de Dios, La
          Revancha de la Unción, la Revancha de la Sanidad Emocional y esta
          semana estaremos trabajando La Revancha de la Restauración Familiar.
        </p>
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
          música, gimnasio, cine, café y mucho más….{' '}
        </p>
        <p>
          Todas y cada una de estas modalidades en que vivimos los casi dos años
          de pandemia impactaron significativamente en todas las familias;
          roces, peleas, discusiones; en los peores de los casos: divorcios,
          femicidios, violencia, abusos infantiles, muchos se encontraron con
          desconocidos y la lista sigue… ¿Por qué crees que pasó esto? ¿Será que
          la familia entró en crisis en la pandemia o ya estaba en crisis?
        </p>
        <p>
          La palabra de hoy es
          <strong> Isaías 61:1-4, haremos foco en el verso 4.</strong>
        </p>
        <p>
          <i>
            El Espíritu de Jehová el Señor está sobre mí, porque me ungió
            Jehová; me ha enviado a predicar bue nas nuevas a los abatidos, a
            vendar a los quebrantados de corazón, a publicar libertad a los
            cautivos, y a los presos apertura de la cárcel; 2 a proclamar el año
            de la buena voluntad de Jehová, y el día de venganza del Dios
            nuestro; a consolar a todos los enlutados; 3 a ordenar que a los
            afligidos de Sion se les dé gloria en lugar de ceniza, óleo de gozo
            en lugar de luto, manto de alegría en lugar del espíritu angustiado;
            y serán llamados árboles de justicia, plantío de Jehová, para gloria
            suya. 4 Reedificarán las ruinas antiguas, y levantarán los
            asolamientos primeros, y restaurarán las ciudades arruinadas, los
            escombros de muchas generaciones.
          </i>
        </p>
        <p>
          Pensaba en: - José que termino después de muchos años de heridas,
          abandonos, abusos, tristeza y soledad recibiendo la bendición para sus
          hijos Sabulón y Manases. - Job que lo perdió todo y lo recupero por su
          fidelidad a Dios. - El hijo prodigo que luego de haberlo desperdiciado
          todo, supo tomar la revancha de la vida - El joven endemoniado que fue
          liberado por Jesús del tormento de muchos tras el fracaso de los
          discípulos, a causa de la insistencia de su padre. Estas por nombrar
          algunas pocas, porque la Biblia está llena de historias de familias.
          Pero hoy te quiero contar otra historia … ¿ESTAS LISTO?
        </p>
        <h2>Otra Historia de Familia</h2>
        <p>
          Por el año 1902, específicamente un 25 de diciembre, en Génova, Italia
          Nacía Mario, a quien apodarían Natalio. Asus 5 años su papá viajo en
          barco a Argentina, mientras él estaba en un colegio de curas. Dos años
          después, Natalio llego al a Argentina tras un viaje en barco de 31
          días acompañado por su mamá, su tía y su hermanita menor. Fue así que,
          llegando al nuevo país, Natalio comenzó a trabajar en el campo con su
          papá (en condiciones de precariedad, por cierto) y lo siguió haciendo
          hasta que su cuerpo se lo permitió. Creció y a los 27 años se Casó con
          Oclides y tuvieron 5 hijos. La menor de ellos se llamó Amalia.
        </p>
        <p>
          ¿Hay algún descendiente de inmigrantes hoy? ¿Alguien que esta historia
          le suene familiar?
        </p>
        <p>
          Paralelamente a los sucesos antes mencionados nacía quien sería don
          Ramon. No tenemos exacto el año de nacimiento. Fue un 8 de Abril,
          podríamos suponer que a mediados de la década de los años 30, en una
          argentina en crisis. El papá de Ramoncito murió cuando él era un niño
          pequeño. Su mamá quedó desbastada y con 7 niños bajo su
          responsabilidad. En condiciones de extrema pobreza, Ramon y sus
          hermanitos fueron abandonados, siendo entregándos a diferentes
          personas: familiares, vecinos, conocidos, chacareros. Quedaron
          ubicados en diferentes ciudades de la Pcia. de Buenos Aires.{' '}
        </p>
        <p>
          Ramoncito trabajaba en una fonda, conocida como “La Fonda de la Vasca”
          a cambio de comida y un lugar para dormir… no fue a la escuela, pero
          fue un hombre de bien con un corazón amoroso y duro a la vez. Ramon
          creció, tuvo un buen trabajo en el Ferri y se casó con Elda; ella fue
          él gran amor de su vida con quien aprendió a amar y ser amado,
          escribir y cuantas cosas más, que contaría por las tardes a sus nietos
          muuchos años después. Producto de este amor nacerían dos hijos, el
          mayor de ellos fue llamado Oscar.
        </p>
        <p>
          Oscar y Amalia se casaron siendo mayores, formaron una familia y
          tuvieron 4 hermosos hijos. El tercero de ellos fue una niña, a la que
          llamaron Amorina. ¡Su infancia fue hermosa llena de juegos, hermanos y
          primos! ¡¡Fue lindo ser la nena de la familia durante unos años!!
          También vieron tiempos de separación, soledad, abandonos y tristezas.
        </p>
        <p>
          La niña creció y un día conoció a Marcelo, el hombre más hermoso,
          cariñoso, bueno, confiable, leal, inteligente y honrado del mundo (o
          al menos así lo ve ella hasta el día de hoy). Tal fue así, que un 25
          de diciembre con un anillo de papel aluminio ella le pidió matrimonio.
          Tratando de forjar su familia… se encontraron con el desafío de no
          quedar embarazados. Con el tiempo decidieron adoptar y dar amor, un
          amor que tenían en el pecho y necesitaba salir, porque el dolor sanó…
          pero el deseo seguía vivo.
        </p>
        <p>
          En medio de una crisis mundial, de una pandemia durante el año 2021
          Marcelo y Amorina conocieron y se enamoraron de Elizabeth y Jeremías,
          quienes serian y son sus hijos. Los hijos mas hermosos del universo y
          tuvieron así la mejor familia que ellos podrían haber soñado e
          imaginado podrían llegar a tener. ¡Los planes de Dios siempre son más
          altos! En medio del proceso sortearon muchísimos obstáculos, fueron
          interpelados y confrontados… tuvieron que morir para poder vivir, una
          vez más. Juntos descubrieron que estaban viviendo la promesa de Dios,
          la promesa de restitución de las ruinas antiguas construyendo nuevos
          muros para nuestros hijos, pero muros de los buenos por que como dice
          el proverbio “Como ciudad derribada y sin muro Es el hombre cuyo
          espíritu no tiene rienda”. Erradicando así el abandono de su linaje.
          Impresionante y poderoso, claro que cada paso produce un mucho
          esfuerzo y también mucho dolor, pero las glorias de Dios superan
          cualquier herencia de desolación.
        </p>
        <p>
          {' '}
          ¡¡¡La revancha de la restauración familiar, reconstruyendo las ruinas
          y escombros de generaciones!!! Solo Dios a través de Jesucristo puede
          cambiar para siempre la muerte en vida, solo a través de el podemos
          purificar nuestro linaje el cambia: Aprendamos a bendecir a nuestros
          hijos, a trazar para ellos la senda por Dios escogida para que de
          grandes no se olviden ella.
        </p>
        <o>Números 6, 24-27</o>
        <p>
          <i>
            24 Jehová te bendiga, y te guarde; 25 Jehová haga resplandecer su
            rostro sobre ti, y tenga de ti misericordia; 26 Jehová alce sobre ti
            su rostro, y ponga en ti paz. 27 Y pondrán mi nombre sobre los hijos
            de Israel, y yo los bendeciré.
          </i>
        </p>
      </div>
      <div>
        <Link href={`/posts/1/comments`}>Ver comentarios</Link>
        {children}
      </div>
    </article>
  );
}
