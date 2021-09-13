/**
 *  6. Escreva uma função em JavaScript que extraia os caracteres unicos de uma string. 
    Exemplo: "thequickbrownfoxjumpsoverthelazydog" 
    Saida Esperada: "thequickbrownfxjmpsvlazydg"
 */

const uniqueCharacter = (str) => {
    const set = new Set();

    for(let i = 0; i < str.length; i++) {
        const letter = str[i];
        set.add(letter);
    }
    return [...set].join('');
}

console.log(uniqueCharacter("thequickbrownfoxjumpsoverthelazydog"))