import Hero from './components/Hero/Hero';
import TopoleasingServices from './components/TopoleasingServices/TopoleasingServices';

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Hero />
      <TopoleasingServices />                                                                                                                                                                                                          
    </main>
  );
}