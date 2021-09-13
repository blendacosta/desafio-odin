/**
 *  4. Escreva uma função em JavaScript que aceita uma string como parametro e 
 *  encontra a maior palavra contida na string. 
 *  Exemplo: "Web Development Tutorial"     Saida Esperada: "Development"
 */

const biggestWord = (str) => {
    const words = str.split(' ');
    let biggest = '';
    for (let word of words) {
        if (word.length > biggest.length) {
            biggest = word;
        }
    }
    return biggest;
}

console.log(biggestWord("Web Development Tutorial"));
