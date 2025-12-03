import styles from './Hero.module.css';
import Image from 'next/image';
export default function Hero() {
  const sliderImages = [
    {name:'/9,96mbwebp.webp', alt:'Imagem de equipamento topográfico 1', id: 1},
    {name:'/9,96mbwebp.webp', alt:'Imagem de equipamento topográfico 1', id: 2},
    {name:'/9,96mbwebp.webp', alt:'Imagem de equipamento topográfico 1', id: 2},
    
  ];
  return (
    <section className={styles.hero}>
        <h1 className={styles.title}>Locação de Equipamentos Topográficos</h1>
        <p className={styles.subtitle}>Profissionalismo e precisão para sua obra.</p>
        <div className={styles.slider}>
        {sliderImages.map((sliderImage, index) => (
          sliderImage.name && (
            <Image
              key={index}
              src={sliderImage.name}
              alt={sliderImage.alt}
              width={300}
              height={200}
              style={{ objectFit: 'cover', borderRadius: '8px', priority: 'high' }}
            />
          )
        ))}
        </div>

    </section>
  );
}