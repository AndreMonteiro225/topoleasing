'use client';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './CadastralPlanimetricSurveyPage.module.css';

export default function CadastralPlanimetricSurveyPage() {
  
  const handleRequestQuote = () => {
    const formElement = document.getElementById('budget-form');
    
    if (formElement) {
      // Preenche automaticamente o assunto no formulário
      const event = new CustomEvent('fillForm', { 
        detail: 'Serviço: Levantamento Planialtimétrico Cadastral' 
      });
      window.dispatchEvent(event);

      // Scroll suave
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Levantamento Planialtimétrico Cadastral</h1>
        <p className={styles.heroSubtitle}>
          A base sólida para a regularização e o sucesso do seu projeto de engenharia.
        </p>
      </section>

      {/* Conteúdo Explicativo */}
      <section className={styles.contentSection}>
        <div className={styles.importanceBox}>
          <h2 className={styles.sectionTitle}>Por que este serviço é indispensável?</h2>
          
          <div className={styles.textBlock}>
            O <strong>Levantamento Planialtimétrico Cadastral</strong> é muito mais do que um simples mapa. 
            Ele é um diagnóstico completo da realidade física e legal do seu terreno. É o documento técnico 
            exigido por cartórios e prefeituras para garantir que os limites da sua propriedade estejam 
            corretos e documentados.
          </div>

          {/* Grid de Benefícios */}
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-balance-scale"></i></div>
              <h3 className={styles.benefitTitle}>Segurança Jurídica</h3>
              <p className={styles.benefitText}>
                Essencial para usucapião, desmembramento e retificação de área. Evite disputas com vizinhos.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-hard-hat"></i></div>
              <h3 className={styles.benefitTitle}>Economia na Obra</h3>
              <p className={styles.benefitText}>
                Revela desníveis reais e interferências, evitando erros de projeto e desperdício de materiais.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-chart-line"></i></div>
              <h3 className={styles.benefitTitle}>Valorização</h3>
              <p className={styles.benefitText}>
                Um imóvel com documentação topográfica em dia transmite segurança e aumenta seu valor de mercado.
              </p>
            </div>
          </div>

          <div className={styles.textBlock} style={{ marginTop: '30px', textAlign: 'center' }}>
            Na <strong>Topoleasing</strong>, utilizamos Estações Totais e GPS de alta precisão para entregar 
            levantamentos em total conformidade com as normas técnicas (ABNT NBR 13.133).
          </div>

          <div className={styles.ctaContainer}>
            <button className={styles.btnCta} onClick={handleRequestQuote}>
              Solicitar Orçamento Agora
            </button>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <ContactForm />
    </main>
  );
}