import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

let valor = 200;

// CLIENTE 1
const cliente1 = new Cliente('Cliente 1', 99999999999);

const contaCliente1 = new ContaCorrente(1001, cliente1);

contaCliente1.depositar(500);

// CLIENTE 2
const cliente2 = new Cliente('Cliente 2', 88888888888);
const contaCliente2 = new ContaCorrente(1002, cliente2);


// CLIENTES ANTES DO SAQUE 
console.log('CLIENTES ANTES DA TRANSFERÊNCIA\n');
console.log(contaCliente1);
console.log(``);
console.log(contaCliente2);

// CLIENTE 1 TRANSFERE PARA CLIENTE 2

console.log('\n\nCLIENTES APÓS DA TRANSFERÊNCIA\n');
contaCliente1.transferir(valor, contaCliente2);

console.log(contaCliente1);
console.log(``);
console.log(contaCliente2);
console.log("valor: ", valor);
console.log("Número de contas: ", contaCliente1.numeroDeContas);


