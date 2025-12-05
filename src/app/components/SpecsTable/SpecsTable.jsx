'use client';
import { inventory } from '../../data/inventory';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './SpecsTable.module.css';

export default function SpecsTable() {

    const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'station', label: 'Estações Totais' },
    { id: 'theodolite', label: 'Teodolitos' },
    { id: 'level', label: 'Níveis' },
    { id: 'accessory', label: 'Acessórios' },
  ];

  const stations = inventory.filter(item => item.type === 'station');
  const theodolites = inventory.filter(item => item.type === 'theodolite');
  const levels = inventory.filter(item => item.type === 'level');
  const accessories = inventory.filter(item => item.type === 'accessory');

  // Função para preencher o formulário
  const handleRentClick = (modelName) => {
    const formElement = document.getElementById('budget-form');
    if (formElement) {
      const event = new CustomEvent('fillForm', { 
        detail: `Aluguel de Estação Total: ${modelName}` 
      });
      window.dispatchEvent(event);
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.container}>
      
      <div className={styles.header}>
        <h1 className={styles.title}>Comparativo de Estações Totais</h1>
        <p className={styles.subtitle}>Encontre o equipamento ideal para a precisão que sua obra exige.</p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.specsTable}>
          <thead>
            <tr>
              <th>Especificações</th>
              {stations.map(station => (
                <th key={station.id}>
                  {/* Placeholder de imagem - idealmente usaria station.img se fosse um path real */}
                  <div className={styles.modelImage} style={{background: '#fff', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem'}}>
                    [Foto {station.img}]
                  </div>
                  {station.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{position: 'sticky'}}>Precisão Angular</td>
              {stations.map(s => <td key={s.id}>{s.specs.precisionAngular || '-'}</td>)}
            </tr>
            <tr>
              <td style={{position: 'sticky'}}>Precisão Linear (EDM)</td>
              {stations.map(s => <td key={s.id}>{s.specs.precisionLinear || '-'}</td>)}
            </tr>
            <tr>
              <td style={{position: 'sticky'}}>Alcance Sem Prisma</td>
              {stations.map(s => <td key={s.id}>{s.specs.rangeNonPrism || 'N/A'}</td>)}
            </tr>
            <tr>
              <td style={{position: 'sticky'}}>Alcance Com Prisma</td>
              {stations.map(s => <td key={s.id}>{s.specs.rangePrism || 'Até 3.000m'}</td>)}
            </tr>
            <tr>
              <td style={{position: 'sticky'}}>Conectividade</td>
              {stations.map(s => (
                <td key={s.id}>
                  {s.specs.connectivity || s.specs.communication || 'Serial RS-232'}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{position: 'sticky'}}>Proteção IP</td>
              {stations.map(s => <td key={s.id}>{s.specs.protection || '-'}</td>)}
            </tr>
            <tr>
              <td style={{position: 'sticky'}}>Bateria</td>
              {stations.map(s => <td key={s.id}>{s.specs.battery || '-'}</td>)}
            </tr>
            {/* Linha de Ação (Botão) */}
            <tr>
              <td></td>
              {stations.map(s => (
                <td key={s.id}>
                  <button 
                    className={styles.btnRent}
                    onClick={() => handleRentClick(s.name)}
                  >
                    Solicitar
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <ContactForm />
    </main>
  );
}