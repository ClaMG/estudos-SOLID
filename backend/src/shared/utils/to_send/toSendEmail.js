import nodemailer from 'nodemailer';
import configEmai from '../../../config/configEmai';

class MailProvider {
    constructor() {
        // Criamos o transportador usando aquela config que você fez
        this.transporter = nodemailer.createTransport(configEmai);
    }

    async enviarBoasVindas(emailRecipient, nameUser, passwordUser) {
        try {
            const info = await this.transporter.sendMail({
                from: `"MemberBuddy" <${configEmai.auth.user}>`, // Quem envia
                to: emailRecipient, // Quem recebe
                subject: "Bem-vindo à Família MemberBuddy!", // Assunto
                text: `Olá ${nameUser}, sua matrícula foi realizada com sucesso!`, // Versão em texto simples
                html: `
                    <div style="font-family: sans-serif; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px;">
                    <h1 style="color: #2c3e50;">Olá, ${nameUser}!</h1>
                    <p>É um prazer ter você conosco na <b>MemberBuddy</b>. Sua jornada fitness começa agora!</p>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px dashed #27ae60; margin: 20px 0;">
                        <p style="margin: 0; font-size: 14px;">Estes são seus dados de acesso:</p>
                        <p style="margin: 5px 0;"><strong>E-mail:</strong> ${emailRecipient}</p>
                        <p style="margin: 5px 0;"><strong>Senha Temporária:</strong> <span style="font-family: monospace; font-size: 18px; color: #e74c3c;">${passwordUser}</span></p>
                    </div>

                    <p style="font-size: 12px; color: #7f8c8d;">Dica: Recomendamos alterar sua senha no primeiro acesso.</p>
                    <hr style="border: 0; border-top: 1px solid #eee;" />
                    <small>Este é um e-mail automático do sistema MemberBuddy, por favor não responda.</small>
                </div>
            `, // Versão em HTML (mais bonita)
            });

            console.log("E-mail enviado: %s", info.messageId);
            return true;
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error);
            return false;
        }
    }
}

export default new MailProvider();