export class DeletUserdto{
constructor({id, idUser}) {
    if (!id){
        throw new Error("O id para deletar deve ser informado");
    }
    if (!idUser){
        throw new Error("O id do usuario logado deve ser informado");
    }
    
    this.id = id;
    this.idUser = idUser;

    Object.freeze(this);//congelar os dados
  
}
}