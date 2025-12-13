import Catalog from "../components/Catalog/Catalog";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./CatalogPage.module.css";
export default function CatalogPage() {
  return (
    <div className={styles.mainSection}>
      <Catalog />
      <ContactForm />
    </div>
  );
}
