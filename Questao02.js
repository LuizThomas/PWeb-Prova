const rs = require('readline-sync');

let av1 = parseFloat(rs.question("Digite a nota da AV1: "));
let av2 = parseFloat(rs.question("Digite a nota da AV2: "));
let av3 = parseFloat(rs.question("Digite a nota da AV3 "));
let av4 = parseFloat(rs.question("Digite a nota da AV4: "));

let nf = (n1 * 2) + (n2 * 3) / 5;

console.log("A nota da Avaliação 1 foi " + av1 + ", a nota da Avaliação 2 foi " + av2 + ", a nota da Avaliação 3 foi " + av3 + ", a nota da Avaliação 4 foi " + av4 + ", e a Nota Final foi de " + nf);