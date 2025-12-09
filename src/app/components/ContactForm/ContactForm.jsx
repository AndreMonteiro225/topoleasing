'use client';
import { inventory } from '../../../data/inventory';
import { useState, useEffect } from 'react';
import { sendEmail } from '../../../actions/send-email'; // Importamos a Server Action (caminho corrigido)
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ loading: false, success: null, msg: '' });

  useEffect(() => {
    const handleFillForm = (e) => {
      const raw = String(e.detail || '').trim();

      // Detecta se o detail corresponde a algum item do inventário (catalog)
      const isCatalogItem = inventory.some(
        (it) => it.name === raw || raw.includes(it.name)
      );

      let messageText;
      if (isCatalogItem) {
        // Para itens do catálogo mantemos "equipamento"
        messageText = `Olá, tenho interesse no equipamento ${raw}. Gostaria de saber valores e disponibilidade.`;
      } else {
        // Para serviços/outros, removemos um "equipamento" inicial acidental
        const cleaned = raw.replace(/^equipamento\s*/i, '');
        messageText = `Olá, tenho interesse no ${cleaned}. Gostaria de saber valores e disponibilidade.`;
      }

      setMessage(messageText);

      const nameInput = document.getElementById('name');
      if (nameInput) setTimeout(() => nameInput.focus(), 500);
    };

    window.addEventListener('fillForm', handleFillForm);
    return () => window.removeEventListener('fillForm', handleFillForm);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, msg: '' });

    // Criamos um objeto FormData a partir do evento do formulário
    const formData = new FormData(e.target);
    
    // Como o textarea é controlado pelo React (value={message}), garantimos que ele vá no formData
    formData.set('message', message);

    // Chamamos a Server Action
    const result = await sendEmail(formData);

    setStatus({ 
      loading: false, 
      success: result.success, 
      msg: result.message 
    });

    if (result.success) {
      // Limpar formulário se sucesso
      e.target.reset();
      setMessage('');
    }
  };

  return (
    <section id="budget-form" className={styles.contactSection}>
      <div className={styles.formContainer}>
        <h2>Solicitar Orçamento</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome Completo</label>
            <input name="name" type="text" id="name" placeholder="Ex: Nome completo" required disabled={status.loading} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email" id="email" placeholder="Ex: contato@dominio.com" required disabled={status.loading} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone / WhatsApp</label>
            <input name="phone" type="tel" id="phone" placeholder="(11) 99999-9999" required disabled={status.loading} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              name="message"
              rows="5" 
              placeholder="Faça sua solicitação ou tire suas dúvidas aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status.loading}
            ></textarea>
          </div>

          <button type="submit" className={styles.btnSubmit} disabled={status.loading}>
            {status.loading ? 'Enviando...' : 'Enviar Solicitação'}
          </button>

          {/* Feedback Visual */}
          {status.msg && (
            <p style={{ 
              marginTop: '15px', 
              textAlign: 'center', 
              color: status.success ? 'green' : 'red', 
              fontWeight: 'bold' 
            }}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}