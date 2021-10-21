// 1. Sistema de escolhas e consequências (2 pontos)
// 2. Pelo menos 10 consequências baseadas nas escolhas (2 pontos)
// 3. Mecanismo de controle do dia do personagem (1 ponto)
// 4. Cada escolha avança no tempo (1 ponto)
// 5. Utilização das declarações: 
// Laços de repetição (1 ponto)
// Funções (1 ponto)
// Condicionais (1 ponto)
// Objetos (1 ponto)

const prompt = require('prompt-sync')();

console.log("Bem vindos ao Campo de Batalha - (Viva ou Morra Lutando)");
console.log("Você está em um campo de batalha. Lutando por sua vida e de seus compatriotas.");
let nome = prompt("Digite o nome de seu(sua) personagem: ");

let avancaTempo = (horaAtual) => {
    return horaAtual += 1;
}
let relogio = {hora: 0};
relogio.hora = 8
relogio.hora = avancaTempo(relogio.hora);

let main = () => {
    console.log("São 8:00 da manhã, e está tudo calmo na trincheira.");
    console.log(`${nome} acordou e foi verificar os suprimentos para sua alimentação diáriao da manhã.`);
    console.log("Depois de fazer sua refeição matinal. Vamos escolher o equipamento para mais um dia de luta.");
    console.log("Você tem direito de escolher um item da lista para batalha.");
    let itens = ["Pistola", "Fuzil","Bolsa de remédios", "Bolsa de munição"];
    console.log("Escolha um item abaixo:");
    for (let i = 0; i < itens.length; i++) {
        console.log(`[${i}] - ${itens[i]}`);
    }
    let escolha = prompt("Item (número): ");
    itemEscolhido = itens[escolha];
    console.log("Item escolhido: ", itemEscolhido);
    console.log(relogio.hora + ':00');
    let ataque = () => {
        console.log("Sabia escolha para ficar na linha de frente da batalha.");
    }
       if (itemEscolhido === "Pistola" || itemEscolhido === "Fuzil") {
           ataque();
        }
    let abastecer = () => {
        console.log("Ótima escolha para ficar na batalha mais recuado");
    }
        if (itemEscolhido === "Bolsa de remédios" || itemEscolhido === "Bolsa de munição") {
            abastecer();
        }
    relogio.hora = avancaTempo(relogio.hora);
    console.log(relogio.hora + ':00');
    console.log("Escolhido o equipamento, vamos para batalha.");
    console.log("Sua tropa tem que avançar a linha inimiga para conquistar território.");
    console.log("Seu superior passa as ordens para você.");
    let linhaFrente = prompt(`
    ${nome} vai ficar na linha de frente como ataque:
    [1] - Ofensivo
    [2] - Defensivo
    `);
    let ataqueOfensivo = () => {
        console.log("Atacar e aniquilar o inimigo.");
    }
        if (linhaFrente == 1) {
            ataqueOfensivo();
        }
    let defesaPosicao = () => {
        console.log("Defender para contra-atacar.");
    }
        if (linhaFrente == 2) {
            defesaPosicao();
        }
    console.log(relogio.hora + ':00');
    console.log("Você escolheu avançar com os outros bravos soldados.");
    console.log("");

    console.log("Você escolheu defender sua trincheira com os outros soldades.");
    console.log("De repente você é supreendido, com um aataque surpresa pelos soldados inimigos.");
    let defesa = prompt(`
    ${nome} escolha uma opção:
    [1] - Render
    [2] - Revidar
    `);
    let render = () => {
        console.log("Você sobreviveu a mais um dia, mesmo sendo um prisionerio de guerra.");
    }
        if (defesa == 1) {
            render()
        }
    let revidar = () => {
        console.log("Você infelizmente não sobreviveu ao ataque dos inimigos.");
    }
        if (defesa == 2) {
            revidar()
        }
    console.log(relogio.hora + ':00');
    console.log("'FIM DE JOGO'")
    console.log("Seu superior passa as ordens para você.");
    let linhaPosterior = prompt(`
    ${nome} vai ficar na linha de trás como abastecimento:
    [1] - Ofensivo
    [2] - Defensivo
    `);
    let equipeOfensivo = () => {
        console.log("Atacar e aniquilar o inimigo.");
    }
        if (linhaPosterior == 1) {
            equipeOfensivo();
        }
    let equipeDefensivo = () => {
        console.log("Defender para contra-atacar.");
    }
        if (linhaPosterior == 2) {
            equipeDefensivo;
        }
    console.log(relogio.hora + ':00');
}

main();
