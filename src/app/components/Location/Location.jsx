import styles from './Location.module.css';

export default function Location() {
  return (
    <section id="location" className={styles.section}>
      <h2 className={styles.title}>Nossa Localização</h2>
      <p className={styles.description}>Visite nosso escritório para retirar equipamentos ou tomar um café.</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870296646!2d-46.6585393850224!3d-23.561349684682856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
        className={styles.mapFrame}
        allowFullScreen="" 
        loading="lazy"
      ></iframe>
    </section>
  );
}