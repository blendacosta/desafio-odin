/**
 *  8. Escreva uma função para gerar um array entre dois inteiros (valores positivos 
 *  e negativos são aceitos).
 */

// 8.1
const newArr = (start, end) => {
    const arr = [];
    const diff = Math.abs(end-start) + 1;
    for (let i = 0; i < diff; i++) {
        arr.push(start);
        start++;
    }
    return arr;
}

//8.2
const rangeBetween = (start, end) => {
    const array = [];
  
    for(i = start; i <= end; i++) {
      array.push(i);
    }
  
    return array;
}

//console.log(newArr(-1, 3));
//console.log(newArr(10, 20));

//console.log(rangeBetween(-1, 3));
//console.log(rangeBetween(10, 20));