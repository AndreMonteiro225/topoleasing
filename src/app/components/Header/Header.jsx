"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const phone = "+5511970680610";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={styles.head}>
        <div className={styles.logo}>
          <Link href="/">
            <Image quality={75} width={175} height={55} src={"/Gemini_Generated_Image_4468hj4468hj4468.webp"} />
            
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className={styles.menuDesktop}>
          <Link href="/#services">Serviços</Link>
          <Link href="/CatalogPage">Equipamentos</Link>
          <Link href="/#location">Localização</Link>
          <Link href="/#contact">Fale Conosco</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {/* Mobile Overlay & Menu */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

      <nav className={`${styles.mobileModal} ${isOpen ? styles.active : ""}`}>
        <div className={styles.closeModal} onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        <h3 style={{ color: "var(--primary-blue)" }}>Menu Rápido</h3>
        <a href={`https://wa.me/${phone}`} className={styles.navBtn}>
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <Link href="#contact" className={styles.navBtn} onClick={toggleMenu}>
          <i className="fas fa-envelope"></i> E-mail
        </Link>
        <Link
          href="/CatalogPage"
          className={styles.navBtn}
          onClick={toggleMenu}
        >
          <i className="fas fa-layer-group"></i> Equipamentos
        </Link>
        <Link href="#services" className={styles.navBtn} onClick={toggleMenu}>
          <i className="fas fa-concierge-bell"></i> Serviços
        </Link>
        <Link href="#location" className={styles.navBtn} onClick={toggleMenu}>
          <i className="fas fa-map-marker-alt"></i> Localização
        </Link>
      </nav>
    </>
  );
}
