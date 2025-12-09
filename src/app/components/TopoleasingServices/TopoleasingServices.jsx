"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TopoleasingServices.module.css";
import Link from "next/link";

export default function TopoleasingServices() {

  
  const services = [
    {
      id: 1,
      name: "Locação de Equipamentos",
      description:
        "Catálogo de equipamentos para locação.",
      aboutBtn: "/CatalogPage",
    },
    {
      id: 2,
      description:
        "Oferecemos serviços de manutenção e suporte para garantir o funcionamento ideal dos equipamentos.",
      name: "Manutenção e Suporte",
      aboutBtn: "/MaintenancePage",
    },
    {
      id: 3,
      name: "Levantamento planialtimétrico cadastral",
      description:
        "Realizamos levantamentos topográficos precisos para diversos fins.",
      aboutBtn: "/CadastralPlanimetricSurveyPage",
    },
    {
      id: 4,
      name: "Conferencias diárias",
      description:
        "Serviço de conferência diária para monitoramento e controle de obras.",
      aboutBtn: "/DailyConferencesPage",
    },
    {
      id: 5,
      name: "Loteamentos",
      description:
        "Serviço especializado em loteamentos para desenvolvimento urbano.",
      aboutBtn: "/SubdivisionsPage",
    },
    {
      id: 6,
      name: "Nivelamento industrial",
      description:
        "Oferecemos serviços de nivelamento industrial para garantir a precisão em projetos industriais.",
      aboutBtn: "/IndustrialLevelingPage",
    },
    {
      id: 7,
      name: "Alinhamento industrial de máquinas",
      description:
        "Oferecemos serviços de alinhamento industrial de máquinas para garantir a eficiência e precisão.",
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
            obs.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <main>
      <div className={styles.head}>
        <h1>Nossos Serviços</h1>
        <p>Conheça nossos serviços topográficos.</p>
      </div>

      <section id="services" style={{ scrollMarginTop: '1.8rem' }}
        ref={containerRef}
        className={`${styles.servicesContainer} ${
          styles["slide-in-blurred-left"]
        } ${isVisible ? styles.visible : ""}`}
      >
        {services.map((service) => (
          <div className={styles.serviceCard} key={service.id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <nav className={styles.serviceLinks}>
              <a href={`https://wa.me/+5511970680610/?text=${encodeURIComponent(`Gostaria de saber mais sobre como funciona o servico de ${service.name}.`)}`} className={styles.btnWhatsapp} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"> </i>Solicitar pelo WhatsApp
              </a>
              <Link href={service.aboutBtn} className={styles.btnRequest}>
                Sobre
              </Link>
            </nav>
          </div>
        ))}
      </section>
    </main>
  );
}
