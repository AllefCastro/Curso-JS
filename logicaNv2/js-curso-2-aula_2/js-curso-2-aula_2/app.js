let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function telaInicial(){

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}
telaInicial();
let tentativa = 1;


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
    let acertou = tentativa > 1 ? 'tentativas':'tentativa'
    exibirTextoNaTela('p',`Você acertou com ${tentativa} ${acertou}`);
    novoJogo()
    }else{
        if(numeroSecreto > chute){
            exibirTextoNaTela('p','O número secreto é maior');
        }else{
            exibirTextoNaTela('p','O número secreto é menor'); 
        }
        tentativa++;
        
        limparCampo()
        
    }
}

function limparCampo(){

    let limpo = document.querySelector('input');
    limpo.value ='' ;

    // exibirTextoNaTela('input','');
    // console.log('teste');

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function novoJogo(){

    document.getElementById('reiniciar').removeAttribute('disabled');
   

}

function jogarNovamente(){

    numeroSecreto =gerarNumeroAleatorio();
    telaInicial();
    limparCampo();
    tentativa = 1;
    console.log('teste');
    document.geteElementById('reiniciar').setAttribute('disabled',true);

}


















// Teste de mesa

function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return parseInt(media);
  }

console.log(calcularMedia(7, 6, 5, 3));

  function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}

console.log(verificarAprovacao(calcularMedia(7, 6, 5, 3)));


