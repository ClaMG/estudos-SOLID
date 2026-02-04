//Validar cnpj
export function validateCNPJ(cnpj) {
    const limpo = String(cnpj).replace(/\D/g, ''); // Remove pontos, barras e traços

    // Verifica se tem 14 dígitos ou se todos os dígitos são iguais (ex: 00000000000000)
    if (limpo.length !== 14 || /^(\d)\1{13}$/.test(limpo)) return false;

    // Cálculo do primeiro dígito verificador
    let tamanho = limpo.length - 2;
    let numeros = limpo.substring(0, tamanho);
    let digitos = limpo.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    // Cálculo do segundo dígito verificador
    tamanho = tamanho + 1;
    numeros = limpo.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(1))) return false;

    return true;
}