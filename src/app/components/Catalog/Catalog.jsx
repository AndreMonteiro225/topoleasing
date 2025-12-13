'use client';
import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { inventory } from '../../../data/inventory';
import styles from './Catalog.module.css';

export default function Catalog() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? inventory 
    : inventory.filter(item => item.type === filter);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'station', label: 'Estações Totais' },
    { id: 'theodolite', label: 'Teodolitos' },
    { id: 'level', label: 'Níveis' },
    { id: 'accessory', label: 'Acessórios' },
  ];

  return (
    <section id="catalog" className={styles.catalogSection}>
      
      {/* Header da Seção */}
      <div className={styles.header}>
        <h2 className={styles.title}>Nossa Frota de Equipamentos</h2>
        <p className={styles.subtitle}>
          Selecione a categoria abaixo e encontre a tecnologia ideal para elevar a precisão da sua obra.
        </p>
      </div>

      {/* Filtros */}
      <div className={styles.categoriesContainer}>
        <div className={styles.categories}>
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`${styles.catBtn} ${filter === cat.id ? styles.active : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Cards */}
      {/* key={filter} força a recriação do container para disparar a animação CSS a cada troca */}
      <div key={filter} className={styles.catalogContainer}>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <div className={styles.emptyState}>
            <i className={`fas fa-search ${styles.emptyStateIcon}`}></i>
            <h3>Nenhum equipamento encontrado</h3>
            <p>Não há itens disponíveis nesta categoria no momento.</p>
          </div>
        )}
      </div>
    </section>
  );
}