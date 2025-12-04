"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Estado para forçar o re-render da animação do timer
  const [timerKey, setTimerKey] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/9,96mbwebp.webp",
      title: "Precisão que Define Horizontes",
      subtitle: "Tecnologia de ponta e expertise para projetos topográficos de qualquer escala.",
    },
    {
      id: 2,
      image: "/9,96mbwebp.webp",
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

  const SLIDE_DURATION = 6000; // 6 segundos

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimerKey((prev) => prev + 1); // Reinicia a animação do timer
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimerKey((prev) => prev + 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setTimerKey((prev) => prev + 1);
  }

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className={styles.hero}>
      
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

      <div className={styles.overlay}></div>

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

      {/* Controles Laterais */}
      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.navBtn} aria-label="Anterior">
          <i className="fas fa-chevron-left"></i>
        </button>
        
        {/* TIMER CIRCULAR (Substitui ou complementa o botão de play/pause se houvesse) */}
        <div className={styles.timerContainer}>
           <svg className={styles.timerSvg} viewBox="0 0 40 40">
             {/* Círculo de fundo (cinza/transparente) */}
             <circle cx="20" cy="20" r="18" className={styles.timerBg} />
             {/* Círculo de progresso (animado) */}
             <circle 
               key={timerKey} // A chave muda -> React recria o elemento -> animação CSS reinicia
               cx="20" 
               cy="20" 
               r="18" 
               className={styles.timerProgress} 
               style={{ animationDuration: `${SLIDE_DURATION}ms` }}
             />
           </svg>
           {/* Ícone opcional no centro (ex: pause ou play) */}
           <div className={styles.timerIcon}>
             <i className="fas fa-clock"></i>
           </div>
        </div>

        <button onClick={nextSlide} className={styles.navBtn} aria-label="Próximo">
          <i className="fas fa-chevron-right" ></i>
        </button>
      </div>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

    </section>
  );
}