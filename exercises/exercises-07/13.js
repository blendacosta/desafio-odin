/**
 *  13. Crie uma função que calcule a idade de uma pessoas, dado o dia do seu 
 *  nascimento.
 */

const getAge = (date) => {
    const msYear = 31104000000; //1000 ms * 60 s * 60 m * 24 h * 30 d * 12 m
    const now = new Date();
    const birthDate = new Date(date);

    const diff = Math.abs(now.getTime() - birthDate.getTime());
    const age = Math.floor(diff/msYear);    

    return age;
}

console.log("Age: " + getAge('1996-10-14'));