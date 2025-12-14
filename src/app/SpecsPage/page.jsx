import ContactForm from '../components/ContactForm/ContactForm';
import SpecsTable from '../components/SpecsTable/SpecsTable';
import styles from './SpecsPage.module.css';
export default function SpecsPage() {
  return(
    <div className={styles.main}>
        <SpecsTable />
        <div className={styles.spacer}></div>
        <ContactForm/>
    </div>
    );
};