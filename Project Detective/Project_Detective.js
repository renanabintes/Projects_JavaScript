const prompt = require('prompt-sync')();
console.log("Vamos jogar de detetive? Responda às perguntas para descobrir se você é 'Suspeito', 'Cúmplice', 'Assassino' ou 'Inocente'.");
console.log("-------------------------------------------------------------------------------------------------------------------")
console.log("Você foi notificado a prestar informações sobre o seu paradeiro, pois era uma pessoa próxima da vítima..");
console.log("")
let resposta = 0
let pergunta1 = prompt("Telefonou para a vítima?[sim/não]").slice(0).toLowerCase();
if (pergunta1 == 'sim') {
    resposta += 1;
}
let pergunta2 = prompt("Esteve no local do crime?[sim/não]").slice(0).toLowerCase();
if (pergunta2 == 'sim') {
    resposta += 1;
}
let pergunta3 = prompt("Mora perto da vítima?[sim/não]").slice(0).toLowerCase();
if (pergunta3 == 'sim') {
    resposta += 1;
}
let pergunta4 = prompt("Devia para a vítima?[sim/não]").slice(0).toLowerCase();
if (pergunta4 == 'sim') {
    resposta += 1;
}
let pergunta5 = prompt("Já trabalhou com a vítima?[sim/não]").slice(0).toLowerCase();
if (pergunta5 == 'sim') {
    resposta += 1;
}

if (resposta == 2) {
    console.log("Você é 'Suspeito'.");
} else if (resposta == 3 || resposta == 4) {
    console.log("Você é 'Cúmplice'.");
} else if (resposta == 5) {
    console.log("Você é o 'Assassino'.");
} else {
    console.log("Voê é 'Inocente'.");
};