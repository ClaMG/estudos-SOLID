export class LoginUserdto{
constructor({ user, password}) {
    if (!user){
        throw new Error("O usuário deve ser informado");
    }
    if (!password){
        throw new Error("A Senha deve ser informado");
    }

    this.user = user;
    this.password = password;

    Object.freeze(this);//congelar os dados
  
}
}