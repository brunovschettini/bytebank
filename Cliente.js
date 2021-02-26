import {ContaCorrente} from "./ContaCorrente.js";

export class Cliente {
    nome;
    cpf;
    contaCorrente = new ContaCorrente();
}