import {Cliente} from "./Cliente.js";

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 32487178825;
cliente1.contaCorrente.agencia = 1001;
// # cliente1.contaCorrente.saldo = 100;

cliente1.contaCorrente.deposicar(100);
cliente1.contaCorrente.deposicar(200);
cliente1.contaCorrente.deposicar(-1);

let valorSacado = cliente1.contaCorrente.sacar(1000);

console.log(cliente1);
console.log(`Sacado ${valorSacado}`);

