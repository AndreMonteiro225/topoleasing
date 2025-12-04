'use client';
import { useState } from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleEmailRequest = () => {
    // Lógica de scroll e preenchimento via evento customizado
    const event = new CustomEvent('fillForm', { detail: item.name });
    window.dispatchEvent(event);
    
    const formSection = document.getElementById('contact');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const imgUrl = `https://placehold.co/400x300/e6f0ff/0044cc?text=${encodeURIComponent(item.img)}`;
  const phone = '+5511970680610';
  return (
    <article className={styles.card}>
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
        {/* FRENTE */}
        <div className={styles.cardFront}>
          <div className={styles.cardImgContainer}>
            <img src={imgUrl} alt={item.name} className={styles.cardImg} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{item.name}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
            <button className={styles.btnFlip} onClick={handleFlip}>
              SOLICITAR
            </button>
          </div>
        </div>

        {/* VERSO */}
        <div className={styles.cardBack}>
          <h3>{item.name}</h3>
          <p>Escolha uma opção:</p>
          
          <a 
            href={`https://wa.me/${phone}?text=Olá, o equipamento ${encodeURIComponent(item.name)} se encontra disponível para locação?`} 
            target="_blank" 
            className={`${styles.actionBtn} ${styles.btnWhatsapp}`}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          
          <button onClick={handleEmailRequest} className={`${styles.actionBtn} ${styles.btnEmail}`}>
            <i className="fas fa-envelope"></i> Orçamento por E-mail
          </button>
          
          <a href={`tel:${phone}`} className={`${styles.actionBtn} ${styles.btnCall}`}>
            <i className="fas fa-phone"></i> Ligar Agora
          </a>

          <button className={`${styles.actionBtn} ${styles.btnCancel}`} onClick={handleFlip}>
            <i className="fas fa-undo"></i> Voltar
          </button>
        </div>
      </div>
    </article>
  );
}