// Criem uma página HTML simples que:
     // Pergunte ao Usuário 
        // O nome do produto 
        // O preço do produto 
        // O tipo de cliente (Comum, Estudante, Assinante) // const tipoCliente = prompt  ('Você é cliente: Comum, Estudante ou Assinante:');

     // Faça uma verificação 
        // Se for cliente comum - Não aplica desconto
        // Se for cliente estudante - Aplica 10% de desconto 
        // Se o cliente for assinante - Aplica 20% de desconto

     // Exibe na tela (imprime dentro do HTML)
        // Nome do produto
        // Tipo de cliente 
        // Preço original
        // Valor do desconto aplicado
        // Preço com desconto
        
//////////////////////////////////////////////////////////////////////////////////////////////


const nomeProduto = prompt("Qual o nome do produto?");
const precoProduto = parseFloat (prompt("Qual o preço do produto?"));
const tipoCliente = prompt("Você é cliente: Comum, Estudante ou Assinante?").toLowerCase();

let desconto = 0;

if (tipoCliente === "estudante") {
    desconto = 0.10;
} else if (tipoCliente === "assinante") {
    desconto = 0.20;
} else {
    desconto = 0;
}

const valorDesconto = precoProduto * desconto;
const precoFinal = precoProduto - valorDesconto;

document.getElementById("resultado").innerHTML = `
<p><strong>Nome do Produto:</strong> ${nomeProduto}</p>
<p><strong>Tipo do produto:</strong>${tipoCliente}</p>
<p><strong>Preço Original:</strong>R$${precoProduto.toFixed(2)}</p>
<p><strong>Valor do desconto aplicado:</strong>R$${valorDesconto.toFixed(2)}</p>
<p><strong>Preço com desconto:</strong>R$${precoFinal.toFixed(2)}</p>`;