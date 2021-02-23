class Cliente {
    nome;
    cpf;
    contaCorrente = new ContaCorrente();
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    deposicar(valor) {
        if(valor > 0) {
            this._saldo += valor;
            console.log(this._saldo);
        }
    }    
}

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 32487178825;
cliente1.contaCorrente.agencia = 1001;
// # cliente1.contaCorrente.saldo = 100;

cliente1.contaCorrente.deposicar(100);
cliente1.contaCorrente.deposicar(200);
cliente1.contaCorrente.deposicar(-1);

cliente1.contaCorrente.sacar(20);

console.log(cliente1);

