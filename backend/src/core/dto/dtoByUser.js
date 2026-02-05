export class ByUserdto{
constructor({user}) {
    if (!user){
        throw new Error("O id para deletar deve ser informado");
    }
    
    this.user = user;

    Object.freeze(this);//congelar os dados
  
}
}