// ENUNCIADO
    // Vamos criar um nsistema de login simples./// criem um index.html simples
    //
    // 1. Crie um array(lista) de objetos com 3 usuários já cadastrados.
    //    Cada objeto deve ter:
    //       - nome
    //       - senha 
    // 
    // 2. Pergunte ao usuário (com prompt):
    //       - Nome de usuário
    //       - Senha 
    //
    // 3. Verifique se existe algum usuário no array com esses dados.
    //       - Se existir, mostre "Bem-vindo, [nome]!"
    //       - Se não existir, mostre "Usuário ou senha incorretos."
    //
    // 4. Exiba o resultado na tela.
    //
    // EXEMPLO:
    // Usuários cadastrados: (joao,1234), (maria,abcd), (ana,senha)
    // Entrada: nome = joao, senha = 1234
    // Saída: "Bem-vindo, joao"
    // Entrada: nome = jose, senha = 0000
    // Saída: "Usuário ou senha incorretos."

    /////////////////SOLUÇÃO////////////////////////

    const usuario = [
        {nome: `joao`, senha: `1234`},
        {nome: `maria`, senha: `5678`},
        {nome: `ana`, senha: `91011`},
    ];

    const nomeUsuario = prompt (`Digite seu nome:`);
    const senhaUsuario = prompt (`Digite sua senha:`);

    let mensagem = `Usuario ou senha incorretos.`;
    for(let contador = 0; contador < usuario.length; contador++){
        if(usuario[contador].nome === nomeUsuario && usuario [contador].senha === senhaUsuario)
        {
            mensagem = `Bem vindo(a) ${usuario[contador].nome}!`;
        }
    }

    document.body.innerHTML += `<h2>${mensagem}<h2>`
       
    


    