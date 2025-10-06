const rs = require('readline-sync');

let km = parseFloat(rs.question("Digite quantos Km o carro percorreu: "));
let ltr = parseFloat(rs.question("Digite quantos litros o carro consumiu: "));

cm = km / ltr;

console.log("O consumo médio de um carro que percorre " + km  + " Km e consome " + ltr + " L é de " + cm + " Km/L.");