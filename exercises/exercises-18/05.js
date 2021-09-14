// 5. Escrever uma Console Simples.

// Nosso console precisa ter três funções:

// log -> recebe um argumento e retorna ele como string.
// history -> mostra tudo o que foi executado no log como
// string (cada log é separado por uma quebra de linha \n)
// clearHistory -> limpar tudo o que foi mostrado no log

// myConsole.log([0, 1, 2, 3]) -> '[0, 1, 2, 3]'
// myConsole.history() -> '[0, 1, 2, 3]'
// myConsole.log('Marcle') -> 'Marcle'
// myConsole.history() -> '[0, 1, 2, 3]\nMarcle'
// myConsole.clearHistory() -> true
// myConsole.history() => ''

class myConsole {
    static l = '';

    static log(str) {
        console.log(str);
        myConsole.l += `> ${str}\n`
    }

    static history() {
        console.log(myConsole.l.toString());
    }

    static clearHistory() {
        myConsole.l = '';
        return true;
    }
}

myConsole.log('[0,1,2,3]');
myConsole.history();

myConsole.log('Diana Marcus');
myConsole.history();

console.log(myConsole.clearHistory());
myConsole.history();


