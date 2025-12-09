'use client';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './IndustrialLevelingPage.module.css';

export default function IndustrialLevelingPage() {
  
  const handleRequestQuote = () => {
    const formElement = document.getElementById('budget-form');
    
    if (formElement) {
      // Preenche automaticamente o assunto no formulário
      const event = new CustomEvent('fillForm', { 
        detail: 'serviço Nivelamento Industrial de Alta Precisão' 
      });
      window.dispatchEvent(event);

      // Scroll suave até o formulário
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Nivelamento Industrial</h1>
        <p className={styles.heroSubtitle}>
          A base da precisão produtiva. Garantia de estabilidade e performance para seu parque fabril.
        </p>
      </section>

      {/* Conteúdo Explicativo */}
      <section className={styles.contentSection}>
        <div className={styles.infoBox}>
          <h2 className={styles.sectionTitle}>Precisão Milimétrica para a Indústria</h2>
          
          <div className={styles.textBlock}>
            Em ambientes industriais, frações de milímetro separam o desempenho máximo de falhas catastróficas. 
            O serviço de <strong>Nivelamento Industrial</strong> da Topoleasing utiliza tecnologia de ponta para garantir 
            a planicidade e o alinhamento perfeito de bases, pisos e estruturas que suportarão seu maquinário.
          </div>

          {/* Grid de Benefícios */}
          <div className={styles.benefitsGrid}>
            
            {/* Card 1 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-cogs"></i></div>
              <h3 className={styles.benefitTitle}>Proteção do Ativo</h3>
              <p className={styles.benefitText}>
                Evitamos vibrações excessivas e desgaste prematuro em equipamentos de grande porte como tornos CNC e prensas.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-ruler-combined"></i></div>
              <h3 className={styles.benefitTitle}>Qualidade do Produto</h3>
              <p className={styles.benefitText}>
                Garantimos a estabilidade necessária para manter tolerâncias rigorosas na produção, evitando refugos e peças defeituosas.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-stopwatch"></i></div>
              <h3 className={styles.benefitTitle}>Montagem Eficiente</h3>
              <p className={styles.benefitText}>
                Dados precisos para chumbadores eliminam ajustes demorados, permitindo que a linha de produção inicie mais rápido.
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-shield-alt"></i></div>
              <h3 className={styles.benefitTitle}>Segurança Operacional</h3>
              <p className={styles.benefitText}>
                Certificamos a geometria correta para evitar instabilidade em pontes rolantes e robôs industriais.
              </p>
            </div>

          </div>

          <div className={styles.textBlock} style={{ marginTop: '30px', textAlign: 'center' }}>
            Utilizamos <strong>Níveis Digitais</strong> de alta precisão e Micrômetros a Laser para detectar desvios na 
            ordem de micrômetros, entregando laudos técnicos detalhados que atendem às normas internacionais.
          </div>

          <div className={styles.ctaContainer}>
            <button className={styles.btnCta} onClick={handleRequestQuote}>
              Solicitar Nivelamento
            </button>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <ContactForm />
    </main>
  );
}