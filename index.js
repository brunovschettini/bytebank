class Cliente {
    nome;
    cpf;
    agencia;
    saldo;

    constructor() {
        
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 32487178825;
cliente1.agencia = 1001;
cliente1.saldo = 0;

console.log(cliente1);

