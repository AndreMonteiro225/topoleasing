import Catalog from '../components/Catalog/Catalog';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './CatalogPage.module.css';

export default function CatalogPage() {
    return (
        <main className={styles.main}>
            <Catalog />
            <div className={styles.spacer}></div>
            <ContactForm />
        </main>
    );
}