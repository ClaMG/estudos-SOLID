export class RegiterUserdto{
constructor({ user, email, cpf, admin }) {
    if (!user){
        throw new Error("O usuário deve ser informado");
    }
    if (!email){
        throw new Error("O email deve ser informado");
    }
    if (!cpf){
        throw new Error("O cpf deve ser informado");
    }
    if(!admin){
        throw new Error("O admin deve ser informado");
    }

    this.user = user;
    this.email = email;
    this.cpf = cpf;
    this.admin = admin;

    Object.freeze(this);//congelar os dados
  
}
}