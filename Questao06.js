const rs = require('readline-sync');

let salario = parseFloat(rs.question("Digite quanto você ganha por mês: "));

if (salario <= 2.000) {
    console.log("O Sálario Bruto foi de R$" + salario + ", a Alíquota e o Imposto foram isentos!");
} else if ( salario >= 2.001 && salario <= 3.500) {
    let imposto = salario % 7.5;
    console.log("O Sálario Bruto foi de R$" + salario + ", a Alíquota foi de 7,5% e você terá R$" + imposto + " de imposto.");
} else if ( salario >= 3.501 && salario <= 5.000) {
    let imposto = salario % 15;
    console.log("O Sálario Bruto foi de R$" + salario + ", a Alíquota foi de 15% e você terá R$" + imposto + " de imposto.");
} else if ( salario > 5.000) {
    let imposto = salario % 22.5;
    console.log("O Sálario Bruto foi de R$" + salario + ", a Alíquota foi de 22,5% e você terá R$" + imposto + " de imposto.");
}