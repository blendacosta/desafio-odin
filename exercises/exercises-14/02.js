/**
 *  2. Escreva uma função em JavaScript que verifique se uma string passada é um palindromo ou não. 
 *  Um palindromo é uma palavra, frase ou sequencia que é lida da mesma maneira de trás pra frente, 
 *  por exemplo: "madam", "nurses run", "roma me tem amor".
 * 
 *  ~ colocar em 'lowecase' e aplicar regEx;
 *  ~ nessa solução específica, é comparado com 'len/2', então compara 'primeiro' e 'último' usando um loop
 *  ~ nessa comparação, se o caracter naquela posição for diferente da posição oposta partindo do fim, então retorna 'false'
 *  
 *  fonte: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
 */

const palindrome = (str) => {
    const regEx = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regEx,'');
    let len = str.length;
    
    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("never odd or even"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("0_0 (: /-\ :) 0–0"));