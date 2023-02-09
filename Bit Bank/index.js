import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Uelinton", 11122233344);
const cliente2 = new Cliente("Aline", 55566677788);

const contaCorrenteUelinton = new ContaCorrente(cliente1, 1001);
contaCorrenteUelinton.depositar(500);

const contaCorrenteAline = new ContaCorrente(cliente2, 1002);
let valor = 200;
contaCorrenteUelinton.transferir(valor, contaCorrenteAline);

console.log(ContaCorrente.numeroContas);
