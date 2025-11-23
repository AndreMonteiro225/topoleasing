import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Locação de Equipamentos Topográficos</h1>
      <p className={styles.subtitle}>Profissionalismo e precisão para sua obra.</p>
    </section>
  );
}