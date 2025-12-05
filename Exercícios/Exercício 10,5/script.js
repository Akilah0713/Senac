// ENUNCIADO:
    // Crie uma página HTML simples.
    // Vamos criar um sistema de caixa de supermecado que calcula descontos.
    // 1. O usuário deve informar 3 produtos diferentes.
    //    Para cada produto, pergunte:
    //       - Nome do produto
    //       - Categoria (Alimento, Limpeza ou Higiene)
    //       - Preço unitário 
    //       - Quantidade comprada
    // 2. O sistema deve:
    //       - Calcular o subtotal de casa produto (preço * quantidade).
    //       - Calcular o valor total da compra (soma dos subtotais).
    //       - Verificar se há pelo menos 1 produto da categoria "Alimento".
    //       - Se tiver, aplicar 5% de desconto no total.
    //       - Se o valor total ultrapassar R$500, aplicar também mais 10% de desconto.
    //          (os descontos são acumulativos).
    // 3. Mostrar na tela:
    //       - Lista de produtos com nome, categoria, quantidade e subtotal.
    //       - Valor total SEM desconto.
    //       - Valor do desconto aplicado.
    //       - Valor final COM desconto.
    //
    // EXEMPLO:
    // Produto 1: Arroz (Alimento), preço 20, quantidade 5 → subtotal = 100
    // Produto 2: Sabão (Limpeza), preço 15, quantidade 2 → subtotal = 30
    // Produto 3: Shampoo (Higiene), preço 30, quantidade 3 → subtotal = 90
    // Total = 220
    // Como tem "Alimento", aplica 5% = 11 de desconto.
    // Valor final = 209.

////////////////SOLUCAO/////////////////
const produtos = [];

for (let contador = 1; contador <=3; contador++){
    const nome = prompt(`Digite o nome do produto: ${contador}`);
    const categoria = prompt(`Digite a categoria do produto: ${contador}`);
    const preço = Number(prompt(`Digite o preço do produto: ${contador}`));
    const qnt = Number(prompt(`Digite a quantidade do produto: ${contador}`));
    produtos.push({nome, categoria, preco, qnt});
}

let total = 0;
let temAlimento = false;
let listaProdutos = ``;

for (let contador = 0; contador < produtos.length; contador++){
    const p = produtos[contador];
    const subTotal = p.preco * p.qnt;
    total += subTotal;

    if(p.categoria.toLowerCase() === `alimento`){
        temAlimento = true;
    }

    listaProdutos += `-${p.nome}(${p.categoria}) → ${p.qnt} x R${p.preço.toFixed(2)} = R${subTotal.toFixed(2)}<br>`;

}

let desconto = 0;
if(temAlimento){
    desconto += total * 0.05;
}
if(total > 500) {
    desconto += total * 0.10;
}

const valorFinal = total - desconto;

document.body.innerHTML += `<h2>Resumo da compra </h2>
${listaProdutos}<br>
Valor total: R$${total.toFixed(2)}<br>
Desconto aplicado: R$${desconto.toFixed(2)}<br>
Valor final: <br> R$${valorFinal.toFixed(2)}<br>`;