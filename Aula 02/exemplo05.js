const prompt = require("prompt-sync")(); 
let largura = Number (prompt("Digite a largura do terreno:")); 
let profundidade = Number (prompt("Digite profundidade:")); 
console.log(largura*profundidade+"m²"); 