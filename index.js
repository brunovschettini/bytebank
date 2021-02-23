class Cliente {
    nome;
    cpf;
    contaCorrente = new ContaCorrente();
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 32487178825;
cliente1.contaCorrente.agencia = 1001;
cliente1.contaCorrente.saldo = 100;

cliente1.contaCorrente.sacar(20);

console.log(cliente1);

