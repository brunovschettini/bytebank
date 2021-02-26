import {Cliente} from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    
    _saldo = 0;

    get agencia() {
        return this._saldo;
    }    

    set cliente(__cliente) {
        if(__cliente instanceof Cliente) this._cliente = __cliente;
    }
    
    get cliente() {
        return this._cliente;
    }    

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if(valor <= 0) {
            return;
        }
        if(this._saldo < valor) {
            return;
        }
        this._saldo -= valor;     
        return valor;
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
            console.log(this._saldo);
        }
    }

    transferir(valor, conta) {
        // conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }   

}