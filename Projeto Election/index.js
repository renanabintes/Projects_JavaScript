const prompt = require('prompt-sync')();

console.log("Seja bem vindo ao sistema de voto eletrônico.");
console.log("=============================================");
console.log();
let cand1 = 0;
let cand2 = 0;
let cand3 = 0;
let nulo = 0;
let branco = 0;
let autorizaVoto = (anoNascimento) => {
    anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento
    if (idade < 16) {
        return 'NEGADO';
    } else if (idade >= 16 || idade < 18 || idade > 70) {
        return 'OBRIGATÓRIO';
        } else {
        return 'OPCIONAL';
    }
}
let votacao = (autorizacao, voto) => {
    if (autorizacao == 'NEGADO') {
        console.log("Você não pode votar.");
    } else {
        if (voto == 1){
            cand1 += 1;
        } else if (voto == 2) {
            cand2 += 1;
        } else if (voto == 3) {
            cand3 += 1;
        } else if (voto == 4) {
            nulo += 1;
        } else if (voto == 5) {
            branco += 1;
        }
    }
}
let eleitores = +prompt("Insira o total de eleitores: ")
for (let i = 0; i < eleitores; i++) {
    console.log(`
     Nº | Candidato a Presidente
    =============================
     1  -  Lula (PT)
     2  -  Bolsonaro (Sem Partido)
     3  -  Ciro (PDT)
    -----------------------------
     4  -  Nulo
     5  -  Branco
    `)
    let nasc = +prompt("Caro eleitor informe seu ano de nascimento: ")
    autorizacao = autorizaVoto(nasc)
    let urna = +prompt("Digite o número do seu candidato: ")
    votacao(autorizacao, urna)
}
let exibirResultados = () => {
    console.log(`
        O número de votos contabilizados do candidato a presidência Lula é ${cand1} voto(s).
        O número de votos contabilizados do candidato a presidência Bolsonaro é ${cand2} voto(s).
        O número de votos contabilizados do candidato a presidência Ciro é ${cand3} voto(s).
        O número de votos contabilizados nulos é ${nulo} voto(s).
        O número de votos contabilizados brancos é ${branco} voto(s).
        `)
    console.log();
    if (cand1 > cand2 & cand1 > cand3) {
        console.log("Lula foi eleito presidente 2022.")
    } else if (cand2 > cand1 & cand2 > cand3) {
        console.log("Bolsonaro foi eletito presidente 2022.")
    } else if (cand3 > cand1 & cand3 > cand2) {
        console.log("Ciro foi eletito presidente 2022.")
    } else {
        console.log("Ocorreu um empate. Aguarde o segundo turno.")
    }    
}
exibirResultados()

