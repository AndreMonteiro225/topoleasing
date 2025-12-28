"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleEmailRequest = () => {
    // 1. Redireciona para a home com parâmetro do produto
    router.push(`/CatalogPage?product=${encodeURIComponent(item.name)}#budget-form`, { scroll: false });

    // 2. Dispara evento customizado (fallback para se já estiver na home)
    const event = new CustomEvent("fillForm", { detail: item.name });
    if (typeof window !== "undefined") {
      window.dispatchEvent(event);
    }

    // 3. Scroll manual garantido
    setTimeout(() => {
      const formSection = document.getElementById("contact");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Pequeno delay para garantir que a navegação terminou
  };

  const phone = "5511970680610"; // Removido o '+' para evitar problemas em alguns links

  // Lógica inteligente para imagem:
  // Se item.img não for um caminho de arquivo (ex: não tem barra), usa placeholder.
  // Caso contrário, usa a imagem real.
  const isRealImage = item.img && (item.img.startsWith("/") || item.img.startsWith("http"));
  
  // URL para imagem real ou placeholder gerado
  const displayImage = isRealImage 
    ? item.img 
    : `https://placehold.co/400x500/1e293b/ffffff?text=${encodeURIComponent(item.name)}`;

  return (
    <article className={styles.card}>
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ""}`}>
        
        {/* --- FRENTE --- */}
        <div className={styles.cardFront}>
          <div className={styles.cardImgContainer}>
            <Image
              src={displayImage}
              alt={item.name}
              // fill
              height={500}
              width={400}
              sizes="(max-width: 700px) 100vw, (max-height: 700px) 100vw"
              className={styles.cardImg}
              quality={75}
            />
          </div>
          
          <div className={styles.cardBody}>
            <div>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
            <button className={styles.btnFlip} onClick={handleFlip}>
              Ver Opções
            </button>
          </div>
        </div>

        {/* --- VERSO --- */}
        <div className={styles.cardBack}>
          <h3>{item.name}</h3>
          <p>Como deseja solicitar?</p>

          <a
            href={`https://wa.me/${phone}?text=Olá, o equipamento ${encodeURIComponent(
              item.name
            )} se encontra disponível para locação?`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.btnWhatsapp}`}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>

          <button
            onClick={handleEmailRequest}
            className={`${styles.actionBtn} ${styles.btnEmail}`}
          >
            <i className="fas fa-envelope"></i> Orçamento por E-mail
          </button>

          <Link
            href="/SpecsPage"
            className={`${styles.actionBtn} ${styles.btnSpec}`}
          >
            <i className="fas fa-info-circle"></i> Especificações Técnicas
          </Link>

          <button
            className={`${styles.actionBtn} ${styles.btnCancel}`}
            onClick={handleFlip}
          >
            <i className="fas fa-undo"></i> Voltar
          </button>
        </div>
      </div>
    </article>
  );
}