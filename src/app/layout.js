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
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <Header />
      <body>{children}</body>
      <Location />
      <Footer />
    </html>
  );
}