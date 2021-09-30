// Utilizando os conceitos aprendidos até estruturas de repetição, crie um
// programa que jogue pedra, papel e tesoura (Jokenpô) com você.
// O programa tem que:
// ● Permitir que eu decida quantas rodadas iremos fazer;
// ● Ler a minha escolha (Pedra, papel ou tesoura);
// ● Decidir de forma aleatória a decisão do computador;
// ● Mostrar quantas rodadas cada jogador ganhou;
// ● Determinar quem foi o grande campeão de acordo com a quantidade de
// vitórias de cada um (computador e jogador);
// ● Perguntar se o Jogador quer jogar novamente, se sim inicie volte a
// escolha de quantidade de rodadas, se não finalize o programa

// Você conhece o Jokenpô? É um jogo bem antigo que tem sua origem na China mas foi no Japão que recebeu esse nome “Jokenpô” e se popularizou para o mundo todo. Aqui em nosso país é conhecida como Pedra, Papel ou Tesoura. ... Pedra quebra Tesoura, Papel embrulha a Pedra e Tesoura corta papel.

const prompt = require('prompt-sync')();

let rodadas = prompt("Quantas rodadas irá jogar? ");

for (i = 0; i < rodadas; i++) {
    console.log (i);
}
