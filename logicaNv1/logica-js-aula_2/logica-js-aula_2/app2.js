alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//enquanto chute não for igual ao número Secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10' );
    

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} você acertou com ${tentativas}`);
        
    }else{

        alert('Você errou :(');
        if (chute < numeroSecreto){
            alert(`Número secreto é maior que ${chute}`);
        }else{
            alert(`Número secreto é menor que ${chute}`);
        }
       
    }
    tentativas++;
    console.log(tentativas);
};



//1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número

let contador = 0;

while(contador < 10){
    contador++;
    alert(contador);
    console.log(contador);
}
//4 - Crie um programa de contagem progressiva. 
//Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

//2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador2 = 10;

while(contador2 > -1){
    
    alert(contador2);
    contador2--;
    console.log(contador2);
}

//3 - Crie um programa de contagem regressiva. 
// Peça um número e conte deste número até 0, usando um loop while no console do navegador.
