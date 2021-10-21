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

// , 1 cranberries desidratadas, 1 cidra de maçã (sem álcool), 1 manteiga de amendoim e biscoitos cream cracker. Como prato principal, há pasta com vegetais em molho picante de tomate.")

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
    console.log(`${nome} acordou e foi ver o que tinha de suprimnento para o café da manhã.`);
    console.log("Você tem que escolher um único tipo de suprimento para sua alimentação por refeição diária");
    let cafe = prompt(`
    Você escolhe: 
    [1] - bolo integral de amêndoas;
    [2] - cranberries desidrtadas;
    `);
    relogio.hora = avancaTempo(relogio.hora);
    console.log(relogio.hora + ':00');
    console.log("Depois de fazer sua refeição matinal. Vamos escolher o equipamento para mais um dia de luta.");
    console.log("Você tem direito de escolher um item da lista.");
    console.log("Cuidado com suas escolhas, pois não é todo equipamento que será útil na linha de frente da batalha.")
    let itens = ["Bolsa de remédios", "Pistola", "Fuzil", "Bolsa de munição"];
    console.log("Escolha um item abaixo:");
    for (let i = 0; i < itens.length; i++) {
        console.log(`[${i}] - ${itens[i]}`);
    }
    let escolha = prompt("Item (número): ");
    itemEscolhido = itens[escolha];
    console.log("Item escolhido: ", itemEscolhido);
       if (itemEscolhido === "Pistola" || itemEscolhido === "Fuzil") {
           ataque();
        }
    let ataque = () => {
        console.log("Gostaria de matar alguém?");
    }
        if (itemEscolhido === "Bolsa de remédios" || itemEscolhido === "Bolsa de munição") {
            abastecer();
        }
    let abastecer = () => {
        console.log("Gostaria de matar alguém?");
    }
    relogio.hora = avancaTempo(relogio.hora);
    console.log(relogio.hora + ':00');
    console.log("Escolhido o equipamento, vamos para batalha.");
    console.log("Sua tropa tem que avançar a linha inimiga para conquistar território.");
    console.log("Seu superior passa as ordens para você.");
    let linhaFrente = prompt(`
    ${nome} vai ficar na linha de frente:
    [1] - Sim
    [2] - Não
    `);
    if(linhaFrente == 1) {
        console.log("Vamos para a linha de frente.");
    } else if (linhaFrente == 2) {
        console.log("Vamos ajudar os soldados da linha de frente.")
    }
    relogio.hora = avancaTempo(relogio.hora);
    console.log(relogio.hora + ':00');
    console.log("Você está na linha de frente da batalha.")
    let atacar = prompt(`
    ${nome} vai atacar?
    [1] - Sim
    [2] - Não
    `);
    if (atacar == 1) {
        console.log("Avance as linhas inimigas.")
    } else if (atacar == 2) {
        console.log("Aguarde a tropa inimiga atacar.")
    }
    console.log("Você escolheu se defender de um ataque")
    relogio.hora = avancaTempo(relogio.hora);
    console.log(relogio.hora + ':00');
}

main();
