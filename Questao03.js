const rs = require('readline-sync');

let m = parseFloat(rs.question("Digite um valor em metros para ser convertido: "));

let cm = m * 100;
let mm = m * 1000;
let km = m / 1000; 

console.log(" O valor em metros foi " + m + " metros, o valor em centímetros foi " + cm + "centímetros, o valor em milímetros foi " + mm + "milímetros e o valor em kilômetros foi de " + km + "kilômetros.");