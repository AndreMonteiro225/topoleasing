'use client';
import { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleFillForm = (e) => {
      setMessage(`Olá, tenho interesse no equipamento: ${e.detail}. Gostaria de saber valores e disponibilidade.`);
      const nameInput = document.getElementById('name');
      if(nameInput) setTimeout(() => nameInput.focus(), 500);
    };

    window.addEventListener('fillForm', handleFillForm);
    return () => window.removeEventListener('fillForm', handleFillForm);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! (Simulação)');
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.formContainer}>
        <h2>Solicitar Orçamento</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" placeholder="Ex: João Silva" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Ex: joao@empresa.com" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone / WhatsApp</label>
            <input type="tel" id="phone" placeholder="(11) 99999-9999" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              rows="4" 
              placeholder="Como podemos ajudar?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className={styles.btnSubmit}>Enviar Solicitação</button>
        </form>
      </div>
    </section>
  );
}