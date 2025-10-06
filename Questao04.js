const rs = require('readline-sync');

let c = parseFloat(rs.question("Digite um valor em celsius para ser convertido: "));

let f = (9 * c) / 5 + 32;
let k = c + 273.15;

console.log("A temperatura em Celsius foi de " + c + ", em Fahrenheit foi de " + f + " e em Kelvin foi de " + k);