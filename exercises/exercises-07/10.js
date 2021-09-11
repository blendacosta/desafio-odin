/**
 *  10. Crie uma função para verificar se uma data é fim de semana ou não.
 * 
 *  Uso do getDay(), se for 0 ou 6 é final de semana.
 */

function weekend(date) {
    const day = new Date(date).getUTCDay();
    day == 0 || day == 6 ? console.log('Sim') : console.log('Não');
}

weekend('2021-09-10');
weekend('2021-09-11');