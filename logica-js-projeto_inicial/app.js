alert('Bem vindo! Jogo do número secreto!');

let numeroEscolha = 100;
let numeroSecreto = parseInt(Math.random() * numeroEscolha + 1);

let palpite;
let tentativas = 1;

console.log('O número secreto é o', numeroSecreto);
//console.log(`O número secreto é o ${numeroSecreto}`)

while (palpite != numeroSecreto) {
    palpite = prompt(`Escolha um número entre 1 e ${numeroEscolha}`);
    if (palpite == numeroSecreto) {
        break;
    } else {
        if (palpite > numeroSecreto) {
            alert(`O número secreto é menor que ${palpite}`);
        } else {
            alert(`O número secreto é maior que ${palpite}`);
        }
    }
    tentativas++; 
}

let tentativaPalavra = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto com ${tentativas} ${tentativaPalavra}.`);

//if (tentativas > 1) {
//    alert(`Você acertou o número secreto com ${tentativas} tentativas.`);
//} else {
//    alert(`Você acertou o número secreto com ${tentativas} tentativa.`);
//}

