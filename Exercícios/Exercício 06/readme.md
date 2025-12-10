# Projeto Calculadora de conta de luz

Este projeto é uma calculadora simples criada com JavaScript para simular o valor da conta de luz de acordo com o consumo em kWh e o tipo de cliente (Residencial, Comercial ou Industrial).
A aplicação solicita informações via prompt e exibe o resultado detalhado diretamente no HTML.

![Prévia do Projeto](../Imagens%202/Print%20do%20projeto.png)
![Prévia do Projeto](../Imagens%202//print%202.png)
![Prévia do Projeto](../Imagens%202/print%203.png)

## Funcionalidades 

- Captura o consumo em kWh via prompt()
- Captura o tipo de cliente
- Calcula o valor conforme a tabela:
- Residencial → R$ 0,60 por kWh
- Comercial → R$ 0,75 por kWh
- Industrial → R$ 0,90 por kWh
- Adiciona 15% de acréscimo quando o consumo ultrapassa 500 kWh
- Exibe no HTML:
- Tipo de cliente
- Consumo informado
- Valor base
- Acréscimo (se houver)
- Valor final a pagar
- Formatação em duas casas decimais

## Tecnologias utilizadas 

- HTML
- CSS
- JavaScript
- Git e GitHub

## Como rodar
1. Baixe o repositório (Clique no Botão “Code” > Download ZIP)
2. Extraia a pasta
3. Abra o arquivo index.html no navegador

## Como clonar 
No terminal do VS Code digite:
    git clone https://github.com/Akilah0713/Senac.git
No GitHub Desktop:
    No menu: File(Arquivo) > Clone a repositor(Clonar repositório) > Selecione a aba URL, no campo URL, cole o link do repositório https://github.com/Akilah0713/Senac.git

## Melhorias futuras

- Criar um formulário visual (inputs e botões) em vez de prompts
- Adicionar cores e layout responsivo
- Mensagens de erro para digitação inválida
- Adicionar outros tipos de clientes
- Criar um histórico das últimas contas calculadas
- Permitir cálculo para vários meses
- Adicionar gráficos de consumo
- Integrar com uma API de tarifas reais
- Transformar em PWA (aplicativo instalável)
- Modo claro/escuro

## O que aprendi 
- Manipular DOM
- Criar eventos no JavaScript
- Organizar minhas pastas em um projeto real
- Subir projetos no GitHub

## Autor
Akilah Bianca
Turma de Tecnologia em Informática para internet
Vespertino - Senac DF