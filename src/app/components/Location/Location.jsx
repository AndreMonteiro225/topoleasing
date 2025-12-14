'use client';
import styles from './Location.module.css';

export default function Location() {
  // Endereço codificado para URL (segurança extra)
  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Topoleasing+Comercio+e+Locacao+Ltda+Sao+Paulo";

  return (
    <section id="location" className={styles.section}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Nossa Localização</h2>
          <p className={styles.description}>
            Visite nosso escritório para retirar equipamentos, conhecer nossa estrutura ou tomar um café com nossa equipe técnica.
          </p>
        </div>

        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8829447017497!2d-46.677982824843255!3d-23.53671217881674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57f12d0ea50f%3A0x4648242ea561b1e!2sTopoleasing%20Com%C3%A9rcio%20e%20Loca%C3%A7%C3%A3o%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1764170884547!5m2!1spt-BR!2sbr" 
            className={styles.mapFrame}
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Localização Topoleasing"
          ></iframe>
        </div>

        {/* Informações Extras de Contato */}
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <i className="fas fa-map-marker-alt"></i>
            <span>Rua Campevas, 213 - Perdizes, São Paulo - SP</span>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-clock"></i>
            <span>Seg - Sex: 08:00 - 18:00</span>
          </div>
        </div>

        {/* Botão de Rota */}
        <a 
          href={mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.btnRoute}
        >
          <i className="fas fa-location-arrow"></i> Traçar Rota Agora
        </a>

      </div>
    </section>
  );
}