/**
 *  3. Dado a classe BasicPlan, escreva duas classes para o plano 
 *  Padrão (StandardPlan) e o plano premium (PremiumPlan). 
 *  
 *  Cada plano tem as seguintes funcionalidades:
 *  BasicPlan: canStream
 *  StandardPlan: canStream, canDownload
 *  Premium: canStream, canDownload, canStream4k
 *  
 *  Números de Dispositivos
 *  Basic: 1
 *  Standard: 2
 *  Premium: 4
 * 
 *  Preço
 *  Basic: R$ 15.00
 *  Standard: R$ 25.00
 *  Premium: R$ 47.90
 */

class BasicPlan {
    canStream = true;
    canDownload = false;
    canStream4K = false;

    numberOfDevices = 1;
    price = 'R$ 15.00';
}

class StandardPlan extends BasicPlan {
    canDownload = true;

    numberOfDevices = 2;
    price = 'R$ 25.00';
}

class PremiumPlan extends StandardPlan {
    canStream4K = true;

    numberOfDevices = 4;
    price = 'R$ 47.90';
}

const contaBasic = new BasicPlan();
const contaStandard = new StandardPlan();
const contaPremium = new PremiumPlan();

console.log(contaBasic);
console.log(contaStandard);
console.log(contaPremium);