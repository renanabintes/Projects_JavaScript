// • Perguntar quantas rodadas você quer fazer;
// • Perguntar quantos jogadores vão jogar;
// • Criar um objeto pra cada jogador com nome e número tirado;
// • Guarda todos os objetos em uma lista;
// • Ordenar esses objetos, sabendo que o vencedor tirou o maior número
// no dado.
// • Mostrar no final qual jogador ganhou mais rodadas e foi o grande
// campeão.

const prompt = require('prompt-sync')();

let rodadas = +prompt("Informe o número de rodadas: ");
for (let i = 0; i < rodadas; i++) {}
let infJogo = [];
let qtdJogadores = +prompt("Informe a quantidade de jogadores: ")
for (let i = 0; i < qtdJogadores; i++) {
    let jogador = {};
    jogador.nome = prompt("Informe o nome do jogador: ");
    jogador.numDado = Math.floor(Math.random() * 6 + 1);
    infJogo.push(jogador);
}
infJogo.sort((a, b) => {
    return b.numDado - a.numDado;
})
console.log(infJogo);
