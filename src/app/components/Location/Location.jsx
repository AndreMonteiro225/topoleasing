import styles from './Location.module.css';

export default function Location() {
  return (
    <section id="location" className={styles.section}>
      <h2 id='location' className={styles.title}>Nossa Localização</h2>
      <p className={styles.description}>Visite nosso escritório para retirar equipamentos ou tomar um café.</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8829447017497!2d-46.677982824843255!3d-23.53671217881674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57f12d0ea50f%3A0x4648242ea561b1e!2sTopoleasing%20Com%C3%A9rcio%20e%20Loca%C3%A7%C3%A3o%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1764170884547!5m2!1spt-BR!2sbr" 
        className={styles.mapFrame}
        allowFullScreen="" 
        loading="lazy"
      ></iframe>
    </section>
  );
}