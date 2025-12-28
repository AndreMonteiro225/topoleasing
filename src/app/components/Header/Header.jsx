"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Para destacar link ativo se necessário

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        {/* LOGO */}
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.svg"
            width={137}
            height={40}
            quality={75}
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className={styles.menuDesktop}>
          <Link href="/" className={styles.menuLink}>
            Início
          </Link>
          <Link href="/CatalogPage" className={styles.menuLink}>
            Catálogo
          </Link>

          {/* Menu Dropdown ou Links Diretos de Serviços */}
          {/* Para simplificar neste design clean, vamos focar nos principais */}
          <Link href="/MaintenancePage" className={styles.menuLink}>
            Manutenção
          </Link>

          {/* Botão de Destaque */}
          <Link
            href="#contact"
            className={styles.navBtnPrimary}
            style={{
              marginLeft: "15px",
              padding: "10px 25px",
              fontSize: "0.9rem",
            }}
          >
            Fale Conosco
          </Link>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Abrir Menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {/* OVERLAY ESCURO (Fundo do Mobile) */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* MENU MOBILE LATERAL */}
      <nav className={`${styles.mobileModal} ${isOpen ? styles.active : ""}`}>
        <div className={styles.mobileHeader}>
          <span className={styles.mobileTitle}>Menu</span>
          <div className={styles.closeModal} onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </div>
        </div>

        {/* Links Mobile com Ícones */}
        <Link href="/" className={styles.mobileLink}>
          <i className="fas fa-home" style={{ width: "20px" }}></i> Início
        </Link>
        <Link href="/CatalogPage" className={styles.mobileLink}>
          <i className="fas fa-th-large" style={{ width: "20px" }}></i> Catálogo
        </Link>
        <Link href="/MaintenancePage" className={styles.mobileLink}>
          <i className="fas fa-tools" style={{ width: "20px" }}></i> Manutenção
        </Link>
        <Link href="/DailyConferencesPage" className={styles.mobileLink}>
          <i className="fas fa-clipboard-check" style={{ width: "20px" }}></i>{" "}
          Conferências
        </Link>
        <Link href="/IndustrialAlignmentPage" className={styles.mobileLink}>
          <i className="fas fa-cogs" style={{ width: "20px" }}></i> Indústria
        </Link>

        {/* Botões de Ação Mobile */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            className={styles.mobileLink}
            style={{ color: "#25D366" }}
          >
            <i className="fab fa-whatsapp" style={{ width: "20px" }}></i>{" "}
            WhatsApp
          </a>
          <Link href="#contact" className={styles.navBtnPrimary}>
            Solicitar Orçamento
          </Link>
        </div>
      </nav>
    </>
  );
}
