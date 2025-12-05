// ENUNCIADO 
// CRIEM UM SISTEMA DE RESERVA DE VIAGENS 
// 1 - No arquivo index.html, criem um formulário com os campos: Nome do passageiro, Data da viagem e Destino 
// 2 - No script.js - Cada reserva deve ser salva em um array de objetos {nome, data, destino}
// 3 - Liste todas as reservas cadastradas  no DOM (no HTML)
// 4 - Ainda no JS, faça uma verificvação que 
//    // Se a data da viagem for anterior à data atual, mostrar em vermelho com a mensagem "Data inválida" 
//    // Se a data da viagem for igual ao dia de hoje, mostrar em amarelo com a mensagem "A viagem é hoje!"
//    // Se a data da viagem for futura, mostrar em verde com a mensagem "Viagem confirmada"
// 5 - Ao final, estilize a página com style.css esterno

//////////////////////////////////////////////////////////////////////////////////////////////////////

const form = document.querySelector(`#formReserva`);
const listaReservas = document.querySelector(`#listaReservas`);
const reservas = [];

form.addEventListener(`submit`, function(event){
    event.preventDefault();
    const nome = form.querySelector("#nome").value;
    const data = form.querySelector("#data").value;
    const destino = form.querySelector("#destino").value;

    const reserva = {nome, data, destino};
    reservas.push(reserva);

    mostrarReservas();
    form.reset();
});
function criaTag(){
    const span = document.createElement('span');
    return span;
}
function mostrarReservas(){
    listaReservas.innerHTML = '';
    for(let i = 0; i < reservas.length;i++){
        const reserva = reservas[i];
        const dataViagem = reserva.data;
        let classe = "";
        const hoje = new Date().toISOString().split('T')[0];
        if (dataViagem < hoje) {
            mensagem = "Data inválida";
            classe = "vermelho";
        } else if (dataViagem === hoje){
            mensagem = "A viagem é hoje!";
            classe = "amarelo";
        } else {
            mensagem = "Viagem confirmada";
            classe = "verde";
        }
        listaReservas.innerHTML += `
        <p><strong>Passageiro:</strong> ${reserva.nome}</p>
        <p><strong>Data:</strong> ${reserva.data}</p>
        <p><strong>Destino:</strong> ${reserva.destino}</p>
        <p class="${classe}"><strong> ${mensagem}</strong></p>
        <hr>
        `;
    }
}