export class DeletUserdto{
constructor({id, user, admin}) {
    if (!id){
        throw new Error("O id para deletar deve ser informado");
    }
    if (!user){
        throw new Error("O usuário logado deve ser informado");
    }
    if (admin == undefined || admin == null){
        throw new Error("Deve ser informado se o usuário é um admin");
    }
    
    
    this.id = id;
    this.user = user;
    this.admin = admin;

    Object.freeze(this);//congelar os dados
  
}
}