// ENUNCIADO
// CRIEM UM SISTEMA DE BIBLIOTECA
// 1 - No arquivo index.html, criem um formulário com os campos: Título, Autor e Ano de publicação
// 2 - No script.js - Cada livro cadastrado deve ser salvo em um array de objetos {titulo, autor, ano} 
// 3 - Liste todos os livros cadastrados no DOM (no HTML)
// 4 - Ainda no JS, faça uma verificação que 
// // Se o ano for antes de 2000, mostrar em  vermelho com "tag" Clássico
// // Se não, mostrar em verde com a "tag" Moderno
// 5 - Ao final, estilize a página com style.css externo

/////////////////////////////////////////////////////////////////////////////////////////////////////

const biblioteca = [];
const form = document.querySelector(`#form`);
const lista = document.querySelector(`#lista`);

form.addEventListener(`submit`, function(e){
    e.preventDefault();
    const titulo = document.querySelector(`#titulo`).value;
    const autor = document.querySelector(`#descricao`).value;
    const ano = document.querySelector(`#prioridade`).value;
    const livro = {titulo, autor, ano};
    biblioteca.push(livro);
    mostrarLivros();
    form.requestFullscreen();
});
function criaTag(){
    const span = document.createElement('span');
    return span;
}
function mostrarLivros(){
    lista.innerHTML = '';
    for(let i = 0; i <biblioteca.length;~i++){
        const livro = biblioteca[i]
        const card = document.createElement('div');
        card.classList.add('card')
        const span = criaTag();
        if(livro.ano < 2000){
            card.classList.add('classico');
            span.classList.add('tag-classica');
        } else if(livro.ano >= 2000){
            card.classList.add('moderno');
            span.classList.add('tag-moderna');
        }
        card.innerHTML = `
        <div>
            <h3>Título: ${livro.titulo}</h3><hr> `
    }
}