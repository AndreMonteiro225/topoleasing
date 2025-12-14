import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location';


export const metadata = {
  title: 'Topoleasing - Locação de Equipamentos Topográficos',
  description: 'Profissionalismo e precisão para sua obra.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <body className="main">
        <Header />
        {children}
        <Location />
        <Footer />
      </body>
    </html>
  );
}