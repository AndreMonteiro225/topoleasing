"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados do slide: Imagem e textos podem mudar por slide se quiser
  const slides = [
    {
      id: 1,
      image: "/9,96mbwebp.webp", // Sua imagem principal
      title: "Precisão que Define Horizontes",
      subtitle: "Tecnologia de ponta e expertise para projetos topográficos de qualquer escala.",
    },
    {
      id: 2,
      image: "/9,96mbwebp.webp", // Pode ser outra imagem
      title: "Soluções para sua Obra",
      subtitle: "Aluguel, manutenção e calibração com a qualidade que você confia.",
    },
     {
      id: 3,
      image: "/9,96mbwebp.webp", 
      title: "Levantamentos Complexos",
      subtitle: "Do planejamento à execução, garantimos dados confiáveis.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Função para rolar até o formulário
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000); // 6 segundos por slide
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className={styles.hero}>
      
      {/* Imagem de Fundo (Renderiza apenas a ativa para efeito de fade se animar opacidade, ou troca o src) */}
      <div className={styles.bgImageContainer}>
        <Image
          src={slides[currentSlide].image}
          alt="Hero Background"
          fill
          priority
          className={styles.bgImage}
          quality={90}
        />
      </div>

      {/* Máscara Escura (Overlay) */}
      <div className={styles.overlay}></div>

      {/* Conteúdo de Texto */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {slides[currentSlide].title}
        </h1>
        <p className={styles.subtitle}>
          {slides[currentSlide].subtitle}
        </p>
        
        <button onClick={handleScrollToContact} className={styles.ctaButton}>
          Solicitar Orçamento 
          <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
        </button>
      </div>

      {/* Controles Laterais (Desktop) */}
      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.navBtn} aria-label="Anterior">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextSlide} className={styles.navBtn} aria-label="Próximo">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Indicadores (Bolinhas) */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

    </section>
  );
}