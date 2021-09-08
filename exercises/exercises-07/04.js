/**
 *  4. Encontre o número de dias entre hoje e 1 de Janeiro de 2017.
 */
const msDay = 86400000; //1000 ms * 60 s * 60 m * 24 h
const now = new Date();
const past = new Date(2017, 0, 1);

const diff = Math.abs(now.getTime() - past.getTime());
const days = Math.floor(diff/msDay);

console.log("A diferença de dias é: " + days);