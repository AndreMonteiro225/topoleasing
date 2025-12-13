"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TopoleasingServices.module.css";
import Link from "next/link";
import Image from "next/image";


export default function TopoleasingServices() {
  const services = [
    {
      id: 1,
      name: "Locação de Equipamentos",
      description: "Catálogo completo de Estações Totais, Teodolitos e Níveis para locação imediata.",
      aboutBtn: "/CatalogPage",
    },
    {
      id: 2,
      name: "Manutenção e Suporte",
      description: "Laboratório especializado para calibração e conserto, garantindo precisão absoluta.",
      aboutBtn: "/MaintenancePage",
    },
    {
      id: 3,
      name: "Levantamento Cadastral",
      description: "Mapeamento planialtimétrico detalhado para regularização e projetos de engenharia.",
      aboutBtn: "/CadastralPlanimetricSurveyPage",
    },
    {
      id: 4,
      name: "Conferências Diárias",
      description: "Acompanhamento técnico contínuo em obra para controle de qualidade e execução.",
      aboutBtn: "/DailyConferencesPage",
    },
    {
      id: 5,
      name: "Loteamentos",
      description: "Projetos urbanísticos completos, do estudo de viabilidade à demarcação de lotes.",
      aboutBtn: "/SubdivisionsPage",
    },
    {
      id: 6,
      name: "Nivelamento Industrial",
      description: "Alta precisão para bases de máquinas e pisos industriais com níveis digitais.",
      aboutBtn: "/IndustrialLevelingPage",
    },
    {
      id: 7,
      name: "Alinhamento Industrial",
      description: "Alinhamento a laser de eixos e motores para máxima eficiência e vida útil.",
      aboutBtn: "/IndustrialAlignmentPage",
    },
  ];

  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      {/* VÍDEO DE FUNDO */}
      <div className={styles.imageWrapper}>
        <Image
        width={1200}
        height={800}
          src="/hero_3.webp"
          className={styles.imageBg}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* CONTEÚDO */}
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Soluções em Topografia</h1>
          <p>Tecnologia e expertise para elevar o nível do seu projeto.</p>
        </div>

        <section
          id="services"
          ref={containerRef}
          className={`${styles.servicesContainer} ${
            isVisible ? styles.visible : ""
          }`}
        >
          {services.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <div>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
              </div>
              
              <nav className={styles.serviceLinks}>
                <a
                  href={`https://wa.me/+5511970680610/?text=${encodeURIComponent(
                    `Olá, gostaria de saber mais sobre o serviço de ${service.name}.`
                  )}`}
                  className={`${styles.btnBase} ${styles.btnWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
                
                <Link href={service.aboutBtn} className={`${styles.btnBase} ${styles.btnRequest}`}>
                  Saiba Mais
                </Link>
              </nav>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}