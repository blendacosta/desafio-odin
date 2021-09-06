/**
 * Exercícios Aula 02
 * 02. Crie uma função que recebe um array de 3 números e coloque eles em ordem 
 * crescente. Crie sua própria função para isso.
 * 
*/

function ordemCrescente3(arr) {
    let num1 = arr[0], num2 = arr[1], num3 = arr[2];
    const arrOrdenado = [];

    // definir o menor, depois compara os dois numeros restantes

    if ((num1 < num2) && (num1 < num3)) {
        arrOrdenado[0] = num1; 
        if (num2 < num3){
            arrOrdenado[1] = num2; arrOrdenado[2] = num3;
        } else {
            arrOrdenado[1] = num3; arrOrdenado[2] =num2;
        }
    }
    else if ((num2 < num1) && (num2 < num3)) {
        arrOrdenado[0] = num2;
        if (num1 < num3){
            arrOrdenado[1] = num1; arrOrdenado[2] = num3;
        } else {
            arrOrdenado[1] = num3; arrOrdenado[2] =num1;
        }
    }
    else{
        arrOrdenado[0] = num3;
        if (num1 < num2){
            arrOrdenado[1] = num1; arrOrdenado[2] = num2;
        } else {
            arrOrdenado[1] = num2; arrOrdenado[2] =num1;
        }
    }
    return arrOrdenado;    
}

// testes
console.log(ordemCrescente3([1,2,3]));
console.log(ordemCrescente3([3,2,1]));
console.log(ordemCrescente3([1,3,2]));
console.log(ordemCrescente3([3,1,2]));