export class IAdapterDb {
    async createUsers(data) {
        throw new Error("O método createUsers(data) deve ser implementado pelo adaptador de saída.");
    }
    async findAllUsers() {
        throw new Error("O método findAllUsers() deve ser implementado pelo adaptador de saída.");
    }
    async deleteUser(id) {
        throw new Error("O método deleteUser(id) deve ser implementado pelo adaptador de saída.");
    }
    async updateUser(id, data) {
        throw new Error("O método updateUser(id, data) deve ser implementado pelo adaptador de saída.");
    }
    async findByUser(user) {
        throw new Error("O método findByUser(user) deve ser implementado pelo adaptador de saída.");
    }
    async findById(id) {
        throw new Error("O método findById(id) deve ser implementado pelo adaptador de saída.");
    }
    async findByEmail(email) {
        throw new Error("O método findByEmail(email) deve ser implementado pelo adaptador de saída.");
    }
    
}