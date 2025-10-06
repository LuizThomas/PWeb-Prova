const rs = require('readline-sync');

let a = parseFloat(rs.question("Digite o valor de a: "));
let b = parseFloat(rs.question("Digite o valor de b: "));
let c = parseFloat(rs.question("Digite o valor de c: "));

let delta = b * 2 - 4 * a * c;

console.log("O valor de delta é igual a: " + delta);