'use client';
import { inventory } from '../../../data/inventory';
import ContactForm from '../ContactForm/ContactForm';
import styles from './SpecsTable.module.css';

export default function SpecsTable() {

  // Filtra apenas as estações totais para comparação
  const stations = inventory.filter(item => item.type === 'station');

  // Função para preencher o formulário
  const handleRentClick = (modelName) => {
    const formElement = document.getElementById('budget-form'); // ID do formulário na ContactForm
    if (formElement) {
      const event = new CustomEvent('fillForm', { 
        detail: `Aluguel de Estação Total: ${modelName}` 
      });
      window.dispatchEvent(event);
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.container}>
      
      <div className={styles.header}>
        <h2 className={styles.title}>Comparativo Técnico</h2>
        <p className={styles.subtitle}>
          Compare as especificações e encontre o equipamento ideal para a precisão que sua obra exige.
        </p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.specsTable}>
          <thead>
            <tr>
              <th>Modelo</th>
              {stations.map(station => (
                <th key={station.id}>
                  {/* Placeholder ou Imagem Real se houver */}
                  {/* <img src={station.img} alt={station.name} className={styles.modelImage} /> */}
                  <div className={styles.modelImage} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem', textAlign: 'center'}}>
                     [Foto {station.img}]
                  </div>
                  {station.name.replace('Estação Total ', '')} {/* Encurta o nome para caber melhor */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Precisão Angular</td>
              {stations.map(s => <td key={s.id}>{s.specs.precisionAngular || '-'}</td>)}
            </tr>
            <tr>
              <td>Precisão Linear</td>
              {stations.map(s => <td key={s.id}>{s.specs.precisionLinear || '-'}</td>)}
            </tr>
            <tr>
              <td>Alcance s/ Prisma</td>
              {stations.map(s => <td key={s.id}>{s.specs.rangeNonPrism || 'N/A'}</td>)}
            </tr>
            <tr>
              <td>Alcance c/ Prisma</td>
              {stations.map(s => <td key={s.id}>{s.specs.rangePrism || 'Até 3.000m'}</td>)}
            </tr>
            <tr>
              <td>Conectividade</td>
              {stations.map(s => (
                <td key={s.id}>
                  {s.specs.connectivity || s.specs.communication || 'Serial'}
                </td>
              ))}
            </tr>
            <tr>
              <td>Proteção IP</td>
              {stations.map(s => <td key={s.id}>{s.specs.protection || '-'}</td>)}
            </tr>
            <tr>
              <td>Bateria</td>
              {stations.map(s => <td key={s.id}>{s.specs.battery || '-'}</td>)}
            </tr>
            {/* Linha de Ação (Botão) */}
            <tr>
              <td>Disponibilidade</td>
              {stations.map(s => (
                <td key={s.id}>
                  <button 
                    className={styles.btnRent}
                    onClick={() => handleRentClick(s.name)}
                  >
                    Cotar
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}