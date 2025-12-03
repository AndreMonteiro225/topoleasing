"use client";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    {
      id: 1,
      path: "/9,96mbwebp.webp",
      alt: "Equipamento Topográfico em campo",
      text: "Equipamento Topográfico em campo",
    },
    {
      id: 2,
      path: "/9,96mbwebp.webp",
      alt: "Equipamento de precisão",
      text: "Equipamento de precisão",
    },
    {
      id: 3,
      path: "/9,96mbwebp.webp",
      alt: "Levantamento planialtimétrico",
      text: "Levantamento planialtimétrico",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  // Autoplay (opcional - passa sozinho a cada 5s)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]); // Recria o timer quando o slide muda para evitar pulos rápidos

  return (
    <section className={styles.hero}>
      
        <h1 className={styles.title}>Locação de Equipamentos Topográficos</h1>
        <p className={styles.subtitle}>
          Profissionalismo e precisão para sua obra.
        </p>

      <div className={styles.carouselContainer}>
        {/* Botão Anterior */}
        <button
          className={`${styles.controlBtn} ${styles.prevBtn}`}
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Janela do Carrossel */}
        <div className={styles.carouselWindow}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sliderImages.map((image, index) => (
              <div key={index} className={styles.slide}>
                <Image
                  src={image.path}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  priority={index === 0} // Carrega a primeira imagem mais rápido
                />
                <div className={styles.caption}><p>{image.text}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Próximo */}
        <button
          className={`${styles.controlBtn} ${styles.nextBtn}`}
          onClick={nextSlide}
          aria-label="Próximo"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Indicadores (Bolinhas) */}
        <div className={styles.indicators}>
          {sliderImages.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
