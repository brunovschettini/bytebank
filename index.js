import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

let valor = 200;

// CLIENTE 1
const cliente1 = new Cliente();
cliente1.nome = 'Cliente 1';
cliente1.cpf = 99999999999;

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 1001;
contaCliente1.cliente = cliente1;

contaCliente1.depositar(500);

// CLIENTE 2
const cliente2 = new Cliente();
cliente2.nome = 'Cliente 2';
cliente2.cpf = 88888888888;

const contaCliente2 = new ContaCorrente();
contaCliente2.agencia = 1002;
contaCliente2.cliente = cliente2;


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

