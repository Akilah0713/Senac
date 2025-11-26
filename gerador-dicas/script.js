const frases = [
    "Crie um Ambiente de Estudo Adequado!",
    "Estabeleça um Cronograma e Metas Claras!",
    "Utilize a Técnica Pomodoro!",
    "Aplique a Recuperação Ativa!",
    "Use a Técnica da Autoexplicação!",
    "Cuide da Saúde Física e Mental!"
];

const botao = document.querySelector('button');
const paragrafo = document.querySelector('#frase');

function gerarDica() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    paragrafo.innerText = frases[indiceAleatorio];
}

botao.addEventListener('click', gerarDica);