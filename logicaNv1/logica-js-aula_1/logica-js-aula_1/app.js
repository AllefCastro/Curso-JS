/*alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 10;
let chute = prompt('Escolha um número entre 1 e 10');
console.log(numeroSecreto);
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
}else{
    alert("Você errou!");
};*/



//------------ Desafio


let nomeUsuario = prompt("Qual seu nome?");

alert(`seja bem vindo ${nomeUsuario}`);


let diaSemana = prompt("Qual é o dia da Semana?");

console.log(diaSemana);

if(diaSemana == "Sábado" || diaSemana == "Domingo"){

    alert("Bom fim de semana!");

}else if(diaSemana == "Segunda" || diaSemana == "Terça" || diaSemana == "Quarta" || diaSemana == "Quinta" || diaSemana == "Sexta")
{

    alert("Boa semana!");

}else{

    alert("Não existe esse dia da Semana");

}

let numeroDigitado = prompt(`Digite um número ${nomeUsuario}`);

if(numeroDigitado >= 0){

    alert(`Número ${numeroDigitado} é Positivo`);

}else{
    alert(`Número ${numeroDigitado} é Negativo`);
}

let pontuacao = numeroDigitado;
if(pontuacao >= 100){

    alert(`Parabéns, você venceu!  ${pontuacao}`);

}else{
    alert(`Tente novamente para ganhar. ${pontuacao}`);
}

// Suponha que o saldo seja 1000
let saldo = 1000;

// Criar mensagem com template string
let mensagem = `O saldo da sua conta é $${saldo.toFixed(2)}.`;

// Exibir a mensagem
console.log(mensagem);