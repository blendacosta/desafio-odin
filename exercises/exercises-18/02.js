// 2. Criar uma calculadora, onde tenhamos as seguintes funções:

// add -> Soma dois números
// subtract -> Subtrai dois números
// multiply -> Multiplica dois números
// divide -> Divide dois números

class Calculator {
    static add (a,b) {
        return a + b;
    }
    static subtract (a,b) {
        return a - b;
    }
    static multiply (a,b) {
        return a * b;
    }
    static divide (a,b) {
        return a / b;
    }
}

console.log(Calculator.add(1,2));
console.log(Calculator.subtract(1,2));
console.log(Calculator.multiply(1,2));
console.log(Calculator.divide(1,2));