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
    <section id="catalog">
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
      {/* Adicionamos key={filter} para forçar o re-render e disparar a animação CSS */}
      <div key={filter} className={styles.catalogContainer}>
        {filteredItems.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}