export class UpdateUserdto{
constructor({ requestUserAdmin, id, user, email, cpf, admin }) {
    if(!requestUserAdmin){
        throw new Error("O usuário que está editando deve ser informado");
    }
    if (!id){
        throw new Error("O id do usuário para atualizar deve ser informado");
    }
    if (!user){
        throw new Error("O usuário deve ser informado");
    }
    if (!email){
        throw new Error("O email deve ser informado");
    }
    if (!cpf){
        throw new Error("O cpf deve ser informado");
    }
    if (!admin){
        throw new Error("O cpf deve ser informado");
    }

    this.requestUserAdmin = requestUserAdmin;
    this.id = id;
    this.user = user;
    this.email = email;
    this.cpf = cpf;
    this.admin = admin;

    Object.freeze(this);//congelar os dados
  
}
}