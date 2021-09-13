/**
 *  7. Escreva uma função em JavaScript que aceita dois parametros, uma string e 
 *  uma letra, a função vai contar o número de ocorrência da letra na string passada.
 * 
 *  Exemplo:: 'w3resource.com', 'o'         Saida Esperada: 2
 */

const appears = (str, letter) => {
    const re = new RegExp(letter, 'g');
    return str.match(re).length;

}
console.log(appears('w3resource.com', 'o'));