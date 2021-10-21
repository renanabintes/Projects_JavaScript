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

console.log("Bem vindos ao Jogo Campo de Batalha  - (Viva ou Morra Lutando)");
console.log("Você está em um campo de batalha. Lutando por sua vida e de seus compatriotas.");
console.log("==============================================================================");
let nome = prompt("Digite o nome de seu(sua) personagem: ");
console.log("==============================================================================");
let avancaTempo = (horaAtual) => {
    return horaAtual += 1;
}
let relogio = {hora: 0};
relogio.hora = 8
relogio.hora = avancaTempo(relogio.hora);

let main = () => {
    console.log();
    console.log("São 8:00 da manhã, e está tudo calmo na trincheira.");
    console.log(`${nome} acordou e foi verificar os suprimentos para sua alimentação diáriao da manhã.`);
    console.log("Depois de fazer sua refeição matinal. Vamos escolher o equipamento para mais um dia de luta.");
    console.log("Você tem direito de escolher um item da lista para batalha.");
    let itens = ["Pistola", "Fuzil","Bolsa de remédios", "Bolsa de munição"];
    console.log(`
    Escolha um item abaixo:
    `);
    for (let i = 0; i < itens.length; i++) {
        console.log(`[${i}] - ${itens[i]}`);
    }
    let escolha = prompt("Item (número): ");
    itemEscolhido = itens[escolha];
    console.log("Item escolhido: ", itemEscolhido);
    console.log(relogio.hora + ':00');
    let armaAtaque = () => {
        console.log("Sabia escolha para ficar na linha de frente da batalha.");
    }
    if (itemEscolhido === "Pistola" || itemEscolhido === "Fuzil") {
        armaAtaque();
    }
    console.log("Escolhido o equipamento.");
    console.log("Vamos para batalha.");
    console.log("Sua tropa tem que avançar a linha inimiga para conquistar território.");
    console.log("Seu superior passa as ordens para você.");
    let linhaFrente = prompt(`
    ${nome} vai ficar na linha de frente como ataque:
    [1] - Ofensivo
    [2] - Defensivo
    `);
    console.log(relogio.hora + ':00');
    let ataqueOfensivo = () => {
        console.log("Atacar e aniquilar o inimigo.");
    }
    if (linhaFrente == 1) {
        ataqueOfensivo();
    }
    console.log("Você escolheu avançar com os outros bravos soldados.");
    console.log("Você e seu batalhão vão fazer um ataque rápido com avanço e recuo no terreno para a aniquilação do inimigo.");
    console.log("Nesse ataque você terá duas escolhas.");
    let ataque = prompt(`
    ${nome} escolha uma opção:
    [1] - Penetração (Visa romper uma posição defensiva inimiga para atingir um objectivo na retaguarda desta.)
    [2] - Frontal (Forma de manobra ofensiva em que se ataca o inimigo ao longo de toda a frente.)
    `);
    console.log(relogio.hora + ':00');
    let penetracao = () => {
        console.log("Seu batalhão conseguiu atingir o objetivo, mas infelizmente você foi ferido em combate e não resistiu aos ferimentos.");
        console.log("'FIM DE JOGO'");
    }
    if (ataque == 1) {
        penetracao();
    }
    let frontal = () => {
        console.log("Você conseguiu sobreviver mais um dia. Mas infelizmente o batalhão não conseguiu avançar a linha inimiga e teve muitas baixas, então decidiram recuar.")
        console.log("'FIM DE JOGO'");
    }
    if (ataque == 2) {
        frontal();
    }
    console.log(relogio.hora + ':00');
    let defesaPosicao = () => {
        console.log("Defender para contra-atacar.");
    }
    if (linhaFrente == 2) {
        defesaPosicao();
    }
    console.log("Você escolheu defender sua trincheira com os outros soldados.");
    console.log("De repente você é supreendido, com um aataque surpresa pelos soldados inimigos.");
    let defesa = prompt(`
    ${nome} escolha uma opção:
    [1] - Render (É a renúncia ao controle sobre território, fortificações para uma outra potência.)
    [2] - Resistir (Resistir aos ataques do inimigo.)
    `);
    console.log(relogio.hora + ':00');
    let render = () => {
        console.log("Você sobreviveu a mais um dia, mesmo sendo um prisionerio de guerra.");
        console.log("'FIM DE JOGO'");
    }
    if (defesa == 1) {
        render();
    }
    let resistir = () => {
        console.log("Você infelizmente não sobreviveu ao ataque dos inimigos.");
        console.log("'FIM DE JOGO'");
    }
    if (defesa == 2) {
        resistir();
    }
    let abastecer = () => {
        console.log("Ótima escolha para ficar na batalha mais recuado");
    }
    if (itemEscolhido === "Bolsa de remédios" || itemEscolhido === "Bolsa de munição") {
        abastecer();
    }   
    console.log("Escolhido o equipamento.");
    console.log('São ' + relogio.hora + ':00.');
    console.log("Vamos para batalha.");
    console.log("Sua tropa vai abastaecer os soldados para proteger a trincheira e atacar linha inimiga para conquistar território.");
    console.log("Seu superior passa as ordens para você.");
    let linhaPosterior = prompt(`
    ${nome} vai ficar no municiamento dos soldados:
    [1] - Ataque rápido
    [2] - Trincheira
    `);
    console.log(relogio.hora + ':00');
    let ataqueRapido = () => {
        console.log("Infelizmente foi surpreendido por uma mina terretre e não sobreviveu. Seu batalhão batalhão teve que recuar devdio aa linha inimiga estar bem fortificada.");
        console.log("'FIM DE JOGO'");
    }
    if (linhaPosterior == 1) {
        ataqueRapido();
    }
    let trincheira = () => {
        console.log("Seu batalhão conseguiu proteger bem a trincheira e você sobreviveu a mais um dia nessa guerra.");
        console.log("'FIM DE JOGO'");
    }
    if (linhaPosterior == 2) {
        trincheira();
    }
}
main();

