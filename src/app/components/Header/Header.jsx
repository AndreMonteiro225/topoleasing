'use client';
import { useState } from 'react';
import styles from './Header.module.css'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <i className="fas fa-layer-group"></i> Topoleasing
        </div>

        {/* Desktop Menu */}
        <nav className={styles.menuDesktop}>
          <a href="#catalog">Equipamentos</a>
          <a href="#location">Localização</a>
          <a href="#contact">Fale Conosco</a>
        </nav>

        {/* Mobile Toggle */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {/* Mobile Overlay & Menu */}
      {isOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
      
      <nav className={`${styles.mobileModal} ${isOpen ? styles.active : ''}`}>
        <div className={styles.closeModal} onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        <h3 style={{ color: 'var(--primary-blue)' }}>Menu Rápido</h3>
        <a href="https://wa.me/5511999999999" className={styles.navBtn}>
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="#contact" className={styles.navBtn} onClick={toggleMenu}>
          <i className="fas fa-envelope"></i> Solicitar Orçamento
        </a>
        <a href="#location" className={styles.navBtn} onClick={toggleMenu}>
          <i className="fas fa-map-marker-alt"></i> Localização
        </a>
      </nav>
    </>
  );
}