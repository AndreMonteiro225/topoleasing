import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import ContactForm from './components/ContactForm/ContactForm';
import Location from './components/Location/Location';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Catalog />
      <Location />
      <ContactForm />
      <Footer />
    </main>
  );
}