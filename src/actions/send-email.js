"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  // 1. Extrair dados do formulário
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  // 2. Validação básica
  if (!rawFormData.name || !rawFormData.email || !rawFormData.message) {
    return { success: false, message: "Campos obrigatórios faltando." };
  }

  try {
    // 3. Configurar o transporte (Exemplo com Yahoo SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true,
        auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    // Verifica a conexão/auth antes de enviar — ajuda a identificar problemas cedo
    try {
      await transporter.verify();
      console.log("SMTP transporter verificado com sucesso.");
    } catch (verifyErr) {
      console.error("Falha ao verificar transporter SMTP:", verifyErr);
      throw verifyErr; // rethrow para cair no catch externo e retornar erro ao front
    }

    // 4. Configurar o conteúdo do e-mail
    // Para evitar que provedores (ex.: Yahoo) rejeitem envios quando o Reply-To
    // é um e-mail externo, definimos replyTo como o próprio EMAIL_USER.
    // O e-mail do cliente é incluído no corpo para contato manual.
    const mailOptions = {
      from: `"Site Topoleasing" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // O e-mail que receberá os leads
      replyTo: process.env.EMAIL_USER,
      subject: `Novo Orçamento: ${rawFormData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0044cc;">Nova Solicitação de Orçamento</h2>
          <p><strong>Nome:</strong> ${rawFormData.name}</p>
          <p><strong>Email:</strong> ${rawFormData.email}</p>
          <p><strong>Telefone:</strong> ${rawFormData.phone}</p>
          <p><strong>Contato do cliente:</strong> ${rawFormData.email} (use este e-mail para responder manualmente)</p>
          <hr/>
          <p><strong>Mensagem:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${rawFormData.message}</p>
        </div>
      `,
    };

    // 5. Enviar
    const info = await transporter.sendMail(mailOptions);
    console.log("sendMail info:", info);
    return { success: true, message: "E-mail enviado com sucesso!" };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return {
      success: false,
      message: "Erro ao enviar e-mail. Tente novamente.",
    };
  }
}
