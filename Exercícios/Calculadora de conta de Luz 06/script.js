// ENUNCIADO:
    // Vamos criar uma calculadora de conta de luz.
    // 1. Pergunte ao usuário (com prompt):
    //       - Quantidade de kWh consumidos (KILOWATTS HORA)
    //       - Tipo de cliente (Residencial, Comercial ou Industrial)
    // 2. Regras de preço:
    //       - Residencial = R$ 0.60 por kWh
    //       - Comercial = R$ 0.75 por kWh
    //       - Industrial = R$ 0.90 por kWh 
    // 3. Se o consumo for maior que 500 kWh:
    //       - Aplique um acréscimo de 15% sobre o valor final
    // 4. Exiba na tela:
    //       - Tipo de cliente
    //       - Consumo informado
    //       - Valor base (sem acréscimo)
    //       - Acréscimo (se houver) 
    //       - Valor final (com acréscimo)

    /////////////////SOLUÇÃO///////////////////

    const consumo = prompt(`Digite a quantidade de kWh consumidos`);
    const tipoCliente = prompt("Você é cliente: Residencial, Comercial ouIndustrial ?");

    let desconto = 0;

if (tipoCliente.toLowerCase() === "residencial") {
    precokWh = 0.60;
} else if (tipoCliente.toLowerCase() === "comercial") {
    precokWh = 0.75;
} else if (tipoCliente.toLowerCase()=== "industrial") {
    precokWh = 0.90;
} else {
    alert("Tipo de cliente inválido!")
};

let valorBase = consumo * precokWh;

let acrescimo = 0;
if (consumo > 500 ){
    acrescimo = valorBase * 0.15;
}

let valorFinal = valorBase + acrescimo;

document.body.innerHTML += `
<p><strong>Tipo de cliente:</strong> ${tipoCliente}</p>
<p><strong>Consumo informado:</strong>${consumo}</p>
<p><strong>Valor base:</strong>R$${valorBase.toFixed(2)}</p>
<p><strong>Acrescimo:</strong>R$${acrescimo.toFixed(2)}</p>
<p><strong>Valor final:</strong>R$${valorFinal.toFixed(2)}</p>`;






