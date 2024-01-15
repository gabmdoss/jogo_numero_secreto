//atividade 01
alert('Boas vindas ao nosso site!')

//let nome = "Lua";
//let idade = 25;
//let numeroDeVendas = 50;
//let saldoDisponivel = 1000;

//alert('Erro! Preencha todos os campos.');

//let mensagemDeErro = "Erro! Preencha todos os campos."

//alert(mensagemDeErro);

//let nomeUser = prompt('Digite o seu nome:');;
//let idadeUser = prompt('Digite a sua idade:')

//if (idadeUser >= 18){
//    alert("Pode tirar a habilitação!")
//};

//atividade 02
//let diaUser = prompt('Que dia da semana é hoje?');
//if (diaUser != "Sábado" || "Domingo") {
//    alert('Bom trabalho!')
//}else{
//    alert('Bom final de semana!')
//}

//let numero = prompt('Digite um número positivo ou negativo:')
//if (numero < 0) {
//    alert('Seu número é negativo!')
//}if (numero >= 0) {
//    alert('Seu número é positivo!')
//};

//let pontuacao = prompt('Digite a sua pontuação:')
//if (pontuacao < 100) {
//    alert('Tente novamente para ganhar.')
//}else {
//    alert('Você venceu!')
//};

//nome = prompt('Qual o seu nome?')
//alert(`Olá ${nome} seja muito bem vinda(o).`)

//let saldo = 150;
//alert(`O seu saldo é de ${saldo}`)

//atividade 03
//contador = 0;
//while (contador < 10){
//    contador++;
//    alert(contador);
//}

//contador = 10;
//while (contador >= 0) {
//    alert(contador);
//    contador--;
//}

//contador = prompt('Digite um número:')
//while (contador >= 0) {
//    console.log(contador);
//    contador--;
//}


//contador = 0;
//numeroDigitado = prompt('Digite um número:');
//while (contador < numeroDigitado) {
//    contador++;
//    alert(contador);
//}

//atividade 04
console.log('Seja muito bem vindo ao console, desenvolvedor!');
let nome = 'Gabriela';
console.log(`Seu nome é ${nome}`)
alert(`Seu nome é ${nome}`)

let linguagemProgramacao = prompt('Qual linguagem de programação você mais gosta?')
console.log(`${nome} gosta de programar em ${linguagemProgramacao}`)

let valor1 = 2;
let valor2 = 1;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`)

let idade = prompt('Qual a sua idade?')
validacaoIdade = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(`Você é ${validacaoIdade}`)

let numero = prompt('Digite um valor: ')
if (numero == 0) {
    alert('Esse número é o zero.')
} else {
    if (numero >= 1) {
        alert('Esse número é positivo.')
    } else {
        alert('Esse número é negativo.')
    }
}

let numeros = 0;
while (numeros < 10) {
    numeros++;
    console.log(numeros)
}

let numeroAleatorio = parseInt(Math.random() * 10 + 1)
console.log(numeroAleatorio)