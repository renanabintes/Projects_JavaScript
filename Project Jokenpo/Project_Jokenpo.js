const prompt = require('prompt-sync')();

while (true) {
    console.log('\n>>>>>>>>>>>>>>>>>>>>>>Você conhece o Jokenpô?<<<<<<<<<<<<<<<<<<<<<<\nÉ um jogo bem antigo que tem sua origem na China, mas foi no Japão\nque recebeu esse nome “Jokenpô” e se popularizou para o mundo todo.\nAqui em nosso país é conhecida como Pedra, Papel ou Tesoura.\n"Pedra quebra Tesoura, Papel embrulha a Pedra e Tesoura corta Papel"');
    console.log('\n----------------------------VAMOS JOGAR----------------------------');
    let rodadas = +prompt('\nQuantas rodadas deseja jogar? ');
    var cont_jogador = 0
    var cont_computador = 0
    var empate = 0

    for(let i = 0; i < rodadas; i++) {
        console.log('\nVamos começar a rodada!');
        let computador = Math.floor(Math.random() * 3 + 1);
        console.log('[1] - Pedra');
        console.log('[2] - Papel');
        console.log('[3] - Tesoura');
        let escolha = +prompt('\nQual opção você escolhe(número): ');

        if (escolha == 1 && computador == 2) {
            cont_computador += 1;
            console.log(`Você escolheu [${escolha}] Pedra, e o computador escolheu [2] Papel.`);
            console.log("Você perdeu!!!.");
        }
        if (escolha == 1 && computador == 3) {
            cont_jogador += 1;
            console.log(`Você escolheu [${escolha}] Pedra, e o computador escolheu [3] Tesoura.`);
            console.log("Você ganhou!!!");
        }
        if (escolha == 2 && computador == 3) {
            cont_computador += 1;
            console.log(`Você escolheu [${escolha}] Papel, e o computador escolheu [3] Tesoura.`);
            console.log("Você perdeu!!!");
        }
        if (escolha == 2 && computador == 1) {
            cont_jogador += 1;
            console.log(`Você escolheu [${escolha}] Papel, e o computador escolheu [1] Pedra.`);
            console.log("Você ganhou!!!");
        }
        if (escolha == 3 && computador == 1) {
            cont_computador += 1;
            console.log(`Você escolheu [${escolha}] Tesoura, e o computador escolheu [1] Pedra.`);
            console.log("Você perdeu!!!");
        }
        if (escolha == 3 && computador == 2) {
            cont_jogador += 1;
            console.log(`Você escolheu [${escolha}] Tesoura, e o computador escolheu [1] Papel.`);
            console.log("Você ganhou!!!");
        }
        if (escolha == 1 && computador == 1) {
            empate += 1;
            console.log(`\nVocê escolheu [${escolha}] Pedra, e o computador escolheu [1] Pedra.`);
            console.log("Empate!!!");
        }
        if (escolha == 2 && computador == 2) {
            empate += 1;
            console.log(`\nVocê escolheu [${escolha}] Papel, e o computador escolheu [2] Papel.`);
            console.log("Empate!!!");
        }
        if (escolha == 3 && computador == 3) {
            empate += 1;
            console.log(`\nVocê escolheu [${escolha}] Tesoura, e o computador escolheu [3] Tesoura.`);
            console.log("Empate!!!");
        }
    }
    console.log(`Em ${rodadas} rodada(s)...`);

    console.log(`
    Você venceu ${cont_jogador} rodada(s).
    Você perdeu ${cont_computador} rodada(s).
    Você empatou ${empate} rodada(s).`
    );

    if (cont_jogador > cont_computador) {
        console.log("\nVocê foi o grande campeão!!!");
    } else if (cont_computador > cont_jogador) {
        console.log("\nA máquina superou você!!!");
    } else console.log("\nInfelizmente, ninguém ganhou!!!");

    let pergunta = prompt('\nVamos jogar novamente?[sim/não]').slice(0).toLowerCase();
    if (pergunta == 'sim'){
        continue;
    } else {
        console.log('\n"Um jogo só acaba quando termina."');
        break;
    }
}

