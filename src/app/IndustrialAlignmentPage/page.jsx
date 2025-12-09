'use client';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './IndustrialAlignmentPage.module.css';

export default function IndustrialAlignmentPage() {
  
  const handleRequestQuote = () => {
    const formElement = document.getElementById('budget-form');
    
    if (formElement) {
      // Preenche automaticamente o assunto no formulário
      const event = new CustomEvent('fillForm', { 
        detail: 'serviço Alinhamento Industrial de Máquinas a Laser' 
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
        <h1 className={styles.heroTitle}>Alinhamento Industrial</h1>
        <p className={styles.heroSubtitle}>
          Eficiência e durabilidade para suas máquinas. Maximize a disponibilidade e eficiência dos seus ativos rotativos.
        </p>
      </section>

      {/* Conteúdo Explicativo */}
      <section className={styles.contentSection}>
        <div className={styles.infoBox}>
          <h2 className={styles.sectionTitle}>Precisão a Laser para sua Indústria</h2>
          
          <div className={styles.textBlock}>
            O desalinhamento de eixos é responsável por mais de 50% das falhas prematuras em máquinas rotativas. 
            O serviço de <strong>Alinhamento Industrial a Laser</strong> da Topoleasing corrige desvios angulares 
            e paralelos com precisão micrométrica, garantindo que seus motores, bombas, compressores e redutores 
            operem em perfeita harmonia.
          </div>

          {/* Grid de Benefícios */}
          <div className={styles.benefitsGrid}>
            
            {/* Card 1 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-heartbeat"></i></div>
              <h3 className={styles.benefitTitle}>Aumento da Vida Útil</h3>
              <p className={styles.benefitText}>
                Proteja rolamentos, selos e eixos contra desgaste prematuro, estendendo o tempo entre falhas (MTBF).
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-plug"></i></div>
              <h3 className={styles.benefitTitle}>Economia de Energia</h3>
              <p className={styles.benefitText}>
                O alinhamento preciso reduz o atrito e o esforço do motor, podendo economizar até 15% no consumo elétrico.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-volume-mute"></i></div>
              <h3 className={styles.benefitTitle}>Menos Vibração e Ruído</h3>
              <p className={styles.benefitText}>
                Um conjunto alinhado opera de forma suave, eliminando vibrações nocivas que afrouxam componentes.
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-chart-line"></i></div>
              <h3 className={styles.benefitTitle}>Menor Custo</h3>
              <p className={styles.benefitText}>
                Previna quebras inesperadas e evite custos emergenciais com peças de reposição e paradas de produção.
              </p>
            </div>

          </div>

          <div className={styles.textBlock} style={{ marginTop: '30px', textAlign: 'center' }}>
            Nossa equipe utiliza <strong>alinhadores a laser de última geração</strong>, eliminando o erro humano dos métodos 
            convencionais. Entregamos relatórios detalhados "antes e depois" para comprovar a qualidade do serviço.
          </div>

          <div className={styles.ctaContainer}>
            <button className={styles.btnCta} onClick={handleRequestQuote}>
              Solicitar Alinhamento
            </button>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <ContactForm />
    </main>
  );
}