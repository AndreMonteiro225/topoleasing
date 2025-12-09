"use client";
import { useState } from "react";
import { inventory } from "../../../data/inventory";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./SpecsTable.module.css";

export default function SpecsTable() {
  // Função para preencher o formulário
  const handleRentClick = (modelName) => {
    const formElement = document.getElementById("budget-form");
    if (formElement) {
      const event = new CustomEvent("fillForm", {
        detail: `${modelName}`,
      });
      window.dispatchEvent(event);
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? inventory
      : inventory.filter((item) => item.type === filter);

  const categories = [
    { id: "all", label: "Todos" },
    { id: "station", label: "Estações Totais" },
    { id: "theodolite", label: "Teodolitos" },
    { id: "level", label: "Níveis" },
    { id: "accessory", label: "Acessórios" },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Comparativo de Estações Totais</h1>
        <p className={styles.subtitle}>
          Encontre o equipamento ideal para a precisão que sua obra exige.
        </p>
      </div>
      <section id="catalog">
        {/* Filtros */}
        <div className={styles.categoriesContainer}>
          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.catBtn} ${
                  filter === cat.id ? styles.active : ""
                }`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.tableWrapper}>
        <table className={styles.specsTable}>
          <thead>
            <tr>
              <th style={{ position: "sticky", left: 0 }}>Especificações</th>
              {filteredItems.map((station) => (
                <th key={station.id}>
                  {/* Placeholder de imagem - idealmente usaria station.img se fosse um path real */}
                  <div
                    className={styles.modelImage}
                    style={{
                      background: "#fff",
                      color: "#333",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                    }}
                  >
                    [Foto {station.img}]
                  </div>
                  {station.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ position: "sticky" }}>Precisão Angular</td>
              {filteredItems.map((s) => (
                <td key={s.id}>{s.specs.precisionAngular || "-"}</td>
              ))}
            </tr>
            <tr>
              <td style={{ position: "sticky" }}>Precisão Linear (EDM)</td>
              {filteredItems.map((s) => (
                <td key={s.id}>{s.specs.precisionLinear || "-"}</td>
              ))}
            </tr>
            <tr>
              <td style={{ position: "sticky" }}>Alcance Sem Prisma</td>
              {filteredItems.map((s) => (
                <td key={s.id}>{s.specs.rangeNonPrism || "N/A"}</td>
              ))}
            </tr>
            <tr>
              <td style={{ position: "sticky" }}>Alcance Com Prisma</td>
              {filteredItems.map((s) => (
                <td key={s.id}>{s.specs.rangePrism || "Até 3.000m"}</td>
              ))}
            </tr>
            <tr>
              <td style={{ position: "sticky" }}>Conectividade</td>
              {filteredItems.map((s) => (
                <td key={s.id}>
                  {s.specs.connectivity ||
                    s.specs.communication ||
                    "Serial RS-232"}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ position: "sticky" }}>Proteção IP</td>
              {filteredItems.map((s) => (
                <td key={s.id}>{s.specs.protection || "-"}</td>
              ))}
            </tr>
            <tr>
              <td style={{ position: "sticky" }}>Bateria</td>
              {filteredItems.map((s) => (
                <td key={s.id}>{s.specs.battery || "-"}</td>
              ))}
            </tr>
            {/* Linha de Ação (Botão) */}
            <tr>
              <td style={{ position: "sticky" }}></td>
              {filteredItems.map((s) => (
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
