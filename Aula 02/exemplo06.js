const prompt = require("prompt-sync")(); 
let anos = Number (prompt("Digite quanto tempo em anos voce trabalhou:"));
let meses = Number(prompt ("Digite o total dos meses:")); 
let numeromeses = anos*12; 
console.log(numeromeses+meses); 