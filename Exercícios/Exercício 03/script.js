const nomeCliente = prompt('Digite o seu nome:');
const saldoInicial = Number(prompt('Digite o saldo inicial da conta.'));
const valorSaque = Number(prompt('Digite o valor que deseja sacar.'));

let mensagem = "";
let saldoFinal = saldoInicial;

if(valorSaque > saldoInicial){
    mensagem = `Saldo Insuficiente! Você tem apenas R$${saldoInicial.toFixed(2)}`;
} else {
    saldoFinal = saldoInicial - valorSaque;
    mensagem = `Saque realizado com Sucesso!! Seu novo saldo é: R$${saldoFinal.toFixed(2)}`;
}

document.body.innerHTML = `<h2>Resumo da Operação</h2>Cliente: ${nomeCliente}<br>Saldo Inicial: R$${saldoInicial.toFixed(2)}<br>Saque: R$${valorSaque.toFixed(2)}<br>${mensagem}`;