// Criem uma página HTML simples que :
    // Peça o *Nome do Aluno*
    // Peça as 4 notas desse aluno, uma por vez
    // Realiza o calculo da média final desse aluno
    // Exibe na tela (impresso no HTMl)
        // Nome do aluno
        // As 4 notas digitadas
        // Média final 
            //Situação desse aluno 
                // Aprovado com mérito (nota igual ou acima de 9)
                // Aprovado (média entre 7 e 8.9)
                // Recuperação (média entre 5 e 6.9)
                // Reprovado (média menor que 5)

// Exemplo de impressão:
     // Aluno: Nome do Aluno
     // Notas: 8, 7, 6, 6
     // Média Final: 7.5
     //Situação: Aprovado 


const nomeAluno = prompt(`Digite o nome do Aluno`);
const nota1 = Number(prompt(`Digite a 1ª nota`));     
const nota2 = Number(prompt(`Digite a 2ª nota`));   
const nota3 = Number(prompt(`Digite a 3ª nota`));  
const nota4 = Number(prompt(`Digite a 4ª nota`));  

const media = (nota1 + nota2 + nota3 + nota4) / 4;

let situacao = "";

if(media >=9) {
    situacao = "Aprovado com Mérito";
} else if (media >= 7 ){
    situacao = "Aprovado";
} else if (media >= 5){
    situacao = "Recuperação";
} else {
    situacao = "Reprovado"
}

document.getElementById.innerHTML =
`<p><strong>Aluno:</strong>${nome}</p>;`
`<p><strong>Notas:</strong>${notas('','')}</p>;`
`<p><strong>Média final</strong>${media.toFixed(1)}</strong:></p>;`
`<p><strong>Situação:</strong>${situacao}</p>;`

