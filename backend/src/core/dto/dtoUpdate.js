export class UpdateUserdto{
constructor({ id, user, email, cpf }) {
    if (!id){
        throw new Error("O id do usuario para atualizar deve ser informado");
    }
    if (!user){
        throw new Error("O usuario deve ser informado");
    }
    if (!email){
        throw new Error("O usuario deve ser informado");
    }
    if (!cpf){
        throw new Error("O usuario deve ser informado");
    }

    this.id = id;
    this.user = user;
    this.email = email;
    this.cpf = cpf;

    Object.freeze(this);//congelar os dados
  
}
}