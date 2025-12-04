'use client';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './DailyConferencesPage.module.css';

export default function DailyConferences() {
  
  const handleRequestQuote = () => {
    const formElement = document.getElementById('budget-form');
    
    if (formElement) {
      // Preenche automaticamente o assunto no formulário
      const event = new CustomEvent('fillForm', { 
        detail: 'Serviço: Conferências Diárias de Obra' 
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
        <h1 className={styles.heroTitle}>Conferências Diárias</h1>
        <p className={styles.heroSubtitle}>
          Monitoramento técnico contínuo para controle total da execução e qualidade da sua obra.
        </p>
      </section>

      {/* Conteúdo Explicativo */}
      <section className={styles.contentSection}>
        <div className={styles.infoBox}>
          <h2 className={styles.sectionTitle}>O Segredo da Obra sem Surpresas</h2>
          
          <div className={styles.textBlock}>
            No canteiro de obras, a precisão não é um luxo, é uma necessidade diária. O serviço de 
            <strong> Conferências Diárias</strong> da Topoleasing atua como os olhos técnicos da sua engenharia, 
            garantindo que o que foi projetado no escritório seja exatamente o que está sendo executado no campo.
          </div>

          {/* Grid de Benefícios */}
          <div className={styles.benefitsGrid}>
            
            {/* Card 1 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-search-location"></i></div>
              <h3 className={styles.benefitTitle}>Detecção de Desvios</h3>
              <p className={styles.benefitText}>
                Identificamos erros de execução no momento em que ocorrem, evitando custos enormes com retrabalho e demolições.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-check-double"></i></div>
              <h3 className={styles.benefitTitle}>Controle de Qualidade</h3>
              <p className={styles.benefitText}>
                Validamos etapas críticas como fundações e estruturas, assegurando que as tolerâncias normativas sejam respeitadas.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-file-contract"></i></div>
              <h3 className={styles.benefitTitle}>Documentação</h3>
              <p className={styles.benefitText}>
                Geramos relatórios diários que criam um histórico técnico valioso, protegendo a construtora juridicamente.
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-chart-pie"></i></div>
              <h3 className={styles.benefitTitle}>Economia</h3>
              <p className={styles.benefitText}>
                Otimizamos volumes de corte, aterro e concreto, evitando desperdício de materiais e custos desnecessários.
              </p>
            </div>

          </div>

          <div className={styles.textBlock} style={{ marginTop: '30px', textAlign: 'center' }}>
            Com a <strong>Topoleasing</strong>, você transforma a incerteza em dados precisos. Nossa equipe se integra 
            à rotina da sua obra, fornecendo suporte técnico para decisões com confiança total.
          </div>

          <div className={styles.ctaContainer}>
            <button className={styles.btnCta} onClick={handleRequestQuote}>
              Solicitar Acompanhamento
            </button>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <ContactForm />
    </main>
  );
}