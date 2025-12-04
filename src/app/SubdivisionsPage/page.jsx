'use client';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './SubdivisionsPage.module.css';

export default function SubdivisionsPage() {
  
  const handleRequestQuote = () => {
    const formElement = document.getElementById('budget-form');
    
    if (formElement) {
      // Preenche automaticamente o assunto no formulário
      const event = new CustomEvent('fillForm', { 
        detail: 'Serviço: Projetos de Loteamento e Topografia' 
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
        <h1 className={styles.heroTitle}>Loteamentos Urbanos</h1>
        <p className={styles.heroSubtitle}>
          Da gleba bruta ao bairro planejado com inteligência, precisão e agilidade na aprovação.
        </p>
      </section>

      {/* Conteúdo Explicativo */}
      <section className={styles.contentSection}>
        <div className={styles.infoBox}>
          <h2 className={styles.sectionTitle}>Transformando Espaços em Oportunidades</h2>
          
          <div className={styles.textBlock}>
            O sucesso de um empreendimento imobiliário começa na precisão do seu projeto. O serviço de 
            <strong> Topografia para Loteamentos</strong> da Topoleasing é a chave para transformar grandes áreas 
            de terra em bairros residenciais, comerciais ou industriais bem estruturados e totalmente legalizados.
          </div>

          {/* Grid de Benefícios */}
          <div className={styles.benefitsGrid}>
            
            {/* Card 1 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-map-marked-alt"></i></div>
              <h3 className={styles.benefitTitle}>Otimização do Terreno</h3>
              <p className={styles.benefitText}>
                Projetamos o melhor aproveitamento da área, maximizando o número de lotes vendáveis sem comprometer a qualidade.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-road"></i></div>
              <h3 className={styles.benefitTitle}>Infraestrutura Eficiente</h3>
              <p className={styles.benefitText}>
                Levantamento preciso para redes de água, esgoto e drenagem, evitando custos excessivos com bombeamento ou aterro.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-file-signature"></i></div>
              <h3 className={styles.benefitTitle}>Aprovação Ágil</h3>
              <p className={styles.benefitText}>
                Entregamos documentação técnica rigorosamente dentro das normas (Lei 6.766/79) para acelerar o trâmite nos órgãos públicos.
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.benefitCard}>
              <div className={styles.iconContainer}><i className="fas fa-drafting-compass"></i></div>
              <h3 className={styles.benefitTitle}>Locação de Obras</h3>
              <p className={styles.benefitText}>
                Materializamos o projeto no campo, demarcando quadras e lotes com precisão milimétrica para a entrega final.
              </p>
            </div>

          </div>

          <div className={styles.textBlock} style={{ marginTop: '30px', textAlign: 'center' }}>
            Do estudo de viabilidade à entrega dos piquetes, a <strong>Topoleasing</strong> atua como parceira técnica 
            de incorporadoras e loteadoras, garantindo a valorização de cada metro quadrado do seu investimento.
          </div>

          <div className={styles.ctaContainer}>
            <button className={styles.btnCta} onClick={handleRequestQuote}>
              Solicitar Projeto de Loteamento
            </button>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <ContactForm />
    </main>
  );
}