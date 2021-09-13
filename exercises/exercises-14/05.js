/**
 *  5. Escreva uma função em JavaScript que aceita uma string como parametro e 
 *  conta o número de vogais presentes na string. (y não conta como vogal). 
 *  Exemplo: "The quick brown fox"      Saida Esperada: 5
 */

const vowels = (str) => {
    return str.match(/[aeiou]/gi).length;
}

console.log(vowels("The quick brown fox"))