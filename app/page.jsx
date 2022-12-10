import LastPost from '../components/LastPost/LastPost';
import Newsletter from '../components/Newsletter';
import Section from '../components/Section';

export default function HomePage() {
  return (
    <>
      <Section title="Nuestro último post" />
      <LastPost />
      <Section title="Suscribite a nuestras novedades" />
      <Newsletter />
    </>
  );
}
