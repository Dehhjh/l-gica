const prompt = require("prompt-sync")(); 
let nome = prompt("Digite o seu nome:");
let numero = Number(prompt ("Digite a sua nota do trabalho :")); 
let valor2 = Number(prompt("Digite a sua nota da prova :")); 
let valor3 = Number(prompt("Digite a sua nota da outra prova:")); 
console.log(nome + "sua média aritmética é:" + (numero+valor2+valor3 ) / 3);3