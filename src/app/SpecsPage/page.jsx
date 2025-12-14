import SpecsTable from '../components/SpecsTable/SpecsTable';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './SpecsPage.module.css';

export default function SpecsPage() {
    return (
        <main className={styles.main}>
            {/* A tabela já contém seu próprio header (título e subtítulo) */}
            <SpecsTable />
            
            <div className={styles.spacer}></div>
            
            {/* Formulário de contato ao final para quem decidir após ver as specs */}
            <ContactForm />
        </main>
    );
}