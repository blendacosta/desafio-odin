/*
 * 06. Peça ao usuário uma quantidade de linhas e outra de colunas, depois declare
 * tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'
 */

// pedir ao user: qte linhas, qte colunas
// declarar matriz
// inicializar matriz [l][c]

const readlineSync = require('readline-sync');
let linhas;
let colunas;


for (let i = 0; i < 2; i++)
{
    if (i == 0){ console.log("Inserir qte linha,") };
    if (i == 1){ console.log("Inserir qte coluna,") };
    
    const input = readlineSync.question("Enter: ");
    if (i == 0){ linhas = input; }
    if (i == 1) { colunas = input; }
}

function inicializarMatriz(l,c)
{
    const matriz = [ ];
    let num = 1;

    for (let i = 0; i < l; i++)
    {
        const linha = [ ];

        for (let j = 0; j < c; j++)
        {
            linha.push(num);
            num++;
        }
        matriz.push(linha);
    }

    return matriz;
}

console.log(inicializarMatriz(linhas,colunas));