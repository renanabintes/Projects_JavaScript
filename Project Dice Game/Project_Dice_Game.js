const prompt = require('prompt-sync')();

let rodadas = +prompt("Informe o número de rodadas: ");
let qtdJogadores = +prompt("Informe a quantidade de jogadores: ");
let jogador = {};
let infJogo = [];
for (let i = 0; i < rodadas; i++) {
    jogador.nome = prompt("Informe o nome do jogador: ");
    numero = Math.floor(Math.random() * 6 + 1);
}   
let jogadas = [];
for (let j = 0; j < qtdJogadores; j++) {
    jogador.dado = jogadas;
    jogadas.push(numero);
    infJogo.push(jogador);
}
infJogo.sort((a, b) => {
    return b.nome - a.nome;
});
console.log(infJogo);

console.log("\n O campeão é "+ infJogo[0]["nome"]);
// -1 ponto: Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado
// >> vc inverteu usou rodadas no for errado
// -2 pontos: Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão
