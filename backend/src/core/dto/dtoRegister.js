export class RegiterUserdto{
constructor({ user, email, cpf }) {
    if (!user){
        throw new Error("O usuario deve ser informado");
    }
    if (!email){
        throw new Error("O usuario deve ser informado");
    }
    if (!cpf){
        throw new Error("O usuario deve ser informado");
    }

    this.user = user;
    this.email = email;
    this.cpf = cpf;

    Object.freeze(this);//congelar os dados
  
}
}