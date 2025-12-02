import styles from "./TopoleasingServices.module.css";
import Link from "next/link";

export default function TopoleasingServices() {
  const services = [
    {
      id: 1,
      name: "Locação de Equipamentos",
      description:
        "Oferecemos uma ampla variedade de equipamentos para locação.",
      aboutBtn: "/CatalogPage",
    },
    {
      id: 2,
      description:
        "Oferecemos serviços de manutenção e suporte para garantir o funcionamento ideal dos equipamentos.",
      name: "Manutenção e Suporte",
      aboutBtn: "/CatalogPage",
    },
    {
      id: 3,
      name: "Levantamento planialtimétrico cadastral",
      description:
        "Realizamos levantamentos topográficos precisos para diversos fins.",
      aboutBtn: "/CatalogPage",
    },
    {
      id: 4,
      name: "Conferencias diárias",
      description:
        "Serviço de conferência diária para monitoramento e controle de obras.",
      aboutBtn: "/CatalogPage",
    },
    {
      id: 5,
      name: "Loteamentos",
      description:
        "Serviço especializado em loteamentos para desenvolvimento urbano.",
      aboutBtn: "/CatalogPage",
    },
    {
      id: 6,
      name: "Nivelamento industrial",
      description:
        "Oferecemos serviços de nivelamento industrial para garantir a precisão em projetos industriais.",
      aboutBtn: "/CatalogPage",
    },
    {
      id: 7,
      name: "Alinhamento industrial de máquinas",
      description:
        "Oferecemos serviços de alinhamento industrial de máquinas para garantir a eficiência e precisão.",
      aboutBtn: "/CatalogPage",
    },
  ];
  return (
    <main>
      <div className={styles.header}>
        <h1>Nossos Serviços</h1>
        <p>Conheça nossos serviços topográficos.</p>
      </div>

      <section className={styles.servicesContainer}>
        {services.map((service) => (
          <div className={styles.serviceCard} key={service.id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <nav className={styles.serviceLinks}>
              <Link href={service.aboutBtn} className={styles.btnRequest}>
                Solicitar
              </Link>
              <Link href={service.aboutBtn} className={styles.btnRequest}>
                Sobre
              </Link>
            </nav>
          </div>
        ))}
      </section>
    </main>
  );
}
