import ContactForm from '../components/ContactForm/ContactForm';
import SpecsTable from '../components/SpecsTable/SpecsTable';
import styles from './SpecsPage.module.css';
export default function SpecsPage() {
  return(
    <div>
        
        <SpecsTable />
        <ContactForm/>
    </div>
    );
};