'use client';
import Image from 'next/image';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './MaintenancePage.module.css';

export default function MaintenancePage() {
  // Lista de equipamentos disponíveis para manutenção
  const maintenanceItems = [
    {
      id: 'm-total-station',
      name: 'Estação Total',
      image: '/9,96mbwebp.webp', // Usando a imagem do seu projeto como placeholder
      alt: 'Manutenção de Estação Total',
      description: 'Calibração completa, limpeza de óptica, ajuste de prumo a laser e revisão de eixos. Garantimos a precisão angular e linear do seu equipamento.'
    },
    {
      id: 'm-theodolite',
      name: 'Teodolito',
      image: '/9,96mbwebp.webp', 
      alt: 'Manutenção de Teodolito',
      description: 'Revisão mecânica e eletrônica. Lubrificação de eixos, ajuste de bolhas e colimação para garantir medições angulares perfeitas em obra.'
    },
    {
      id: 'm-level',
      name: 'Nível',
      image: '/9,96mbwebp.webp', 
      alt: 'Manutenção de Nível Óptico e Digital',
      description: 'Verificação do sistema de compensação automática, limpeza interna e retificação do fio cruz para nivelamentos precisos.'
    }
  ];

  // Função para rolar até o formulário e preencher o interesse
  const handleRequestQuote = (equipmentName) => {
    const formElement = document.getElementById('budget-form');
    
    if (formElement) {
      // Dispara evento para o ContactForm capturar (compatível com sua implementação atual)
      const event = new CustomEvent('fillForm', { 
        detail: `serviço Manutenção para ${equipmentName}` 
      });
      window.dispatchEvent(event);

      // Scroll suave até o formulário
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.container}>
      {/* Seção Explicativa do Serviço */}
      <section className={styles.introSection}>
        <h1 className={styles.introTitle}>Manutenção Especializada</h1>
        <p className={styles.introText}>
          Nosso laboratório conta com técnicos certificados e colimadores de última geração. 
          Realizamos manutenção preventiva e corretiva para garantir que seu equipamento topográfico 
          opere com a máxima precisão e confiabilidade no campo. Emitimos certificado de calibração.
        </p>
      </section>

      {/* Lista de Equipamentos (Cards) */}
      <section className={styles.equipmentGrid}>
        {maintenanceItems.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.cardImageContainer}>
              {/* Usando Image do Next.js para otimização */}
              <Image 
                src={item.image} 
                alt={item.alt} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <button 
                className={styles.btnRequest}
                onClick={() => handleRequestQuote(item.name)}
              >
                <i className="fas fa-wrench"></i> Solicitar Orçamento
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Formulário de Contato (Reutilizado) */}
      <ContactForm />
    </main>
  );
}