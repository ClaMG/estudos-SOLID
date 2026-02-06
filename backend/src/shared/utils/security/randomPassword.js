import crypto from 'crypto';
//Gerar senha aleatoria
export const generateRandomPassword = (size) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    return Array.from({ length: size }, () => {
        const randomIndex = crypto.randomInt(0, caracteres.length);
        return caracteres[randomIndex];
    }).join('');
};