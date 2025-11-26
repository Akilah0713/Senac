document.getElementById("btnCalcular").addEventListener("click", function () {

    const pratoSelect = document.getElementById("prato");
    const bebidaSelect = document.getElementById("bebidas"); // id original
    const adicionais = document.querySelectorAll(".adic:checked");
    const erro = document.getElementById("erro");

    // Preços atualizados usando os valores reais do HTML
    const precos = {
        prato: {
            strogonoff: 20,
            lasanha: 25,
            fricasse: 22
        },
        bebida: {
            coca: 6,
            guarana: 5,
            agua: 3
        },
        adicional: {
            sobra: 8,
            extra: 4
        }
    };

    erro.classList.add("hidden");
    erro.textContent = "";

    // validação
    if (pratoSelect.value === "" || bebidaSelect.value === "") {
        erro.textContent = "Por favor, selecione um prato e uma bebida.";
        erro.classList.remove("hidden");
        return;
    }

    // calcular valores
    let total = 0;

    const pratoEscolhido = pratoSelect.value;
    const bebidaEscolhida = bebidaSelect.value;

    total += precos.prato[pratoEscolhido];
    total += precos.bebida[bebidaEscolhida];

    let adicionaisEscolhidos = [];

    adicionais.forEach((item) => {
        adicionaisEscolhidos.push(item.value);
        total += precos.adicional[item.value];
    });

    // Mostrar resultado
    document.getElementById("resPrato").textContent = "Prato: " + pratoEscolhido;
    document.getElementById("resBebida").textContent = "Bebida: " + bebidaEscolhida;

    if (adicionaisEscolhidos.length > 0) {
        document.getElementById("resAdicionais").textContent =
            "Adicionais: " + adicionaisEscolhidos.join(", ");
    } else {
        document.getElementById("resAdicionais").textContent = "Adicionais: Nenhum";
    }

    document.getElementById("total").textContent = "Total: R$ " + total.toFixed(2);

    document.getElementById("formulario").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");
});

// Botão Novo Pedido
document.getElementById("btnNovo").addEventListener("click", function () {
    document.getElementById("formulario").classList.remove("hidden");
    document.getElementById("resultado").classList.add("hidden");
});
