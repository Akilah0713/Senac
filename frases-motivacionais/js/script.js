const frases = [
    "Actredite no seu potencial!",
    "Você é capaz de ir além!",
    "Nunca desista dos seus sonhos!",
    "A persistência é a chave do sucesso!",
    "Você é mais forte do que pensa!",
    "Acredite em si mesmo!"
];

const botao = document.querySelector('button');
const paragrafo = document.querySelector('#frase');

function gerarFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    paragrafo.innerText = frases[indiceAleatorio];
}

botao.addEventListener('click', gerarFrase);