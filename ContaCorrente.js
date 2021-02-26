export class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if(valor <= 0) {
            return;
        }
        if(this._saldo < valor) {
            return;
        }
        this._saldo -= valor;     
        return this._saldo;
    }

    deposicar(valor) {
        if(valor > 0) {
            this._saldo += valor;
            console.log(this._saldo);
        }
    }    
}