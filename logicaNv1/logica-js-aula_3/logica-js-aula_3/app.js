/*alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute;
let tentativas = 1;
*/
// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}
//Operador Ternário ex:= variavel > 1?      "Sim"   :    "Não"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
 if(tentativa > 1){
   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
 }else{
   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`)
 }

    // ----------DESAFIO_________________



//1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

    console.log("Boas-vindas");

// 2 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

    let nome = "Allef";

    console.log(`Olá, ${nome}`);



// 3 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

  

    alert(`Olá, ${nome}`);

// 4 Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

    let pergunta = prompt("Qual linguagem de programação que você mais gosta?")

    console.log(pergunta);

/// 5 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

    let valor1 = 6; 
    let valor2 = 5;
    resultado = valor1 + valor2;

    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.


    resultadoSub = valor1 - valor2;

    console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultadoSub}.`);


// 7 Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

    let idade = prompt(`Qual sua idade?`);

    if(idade>=18){
        console.log(`${nome} você é maior de idade!!`);
    }else{
        console.log(`${nome} você é menor de idade`)
    };

// 8 Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

    let numero = prompt(`Digite um número`);

    if(numero > 0){
        console.log(`${numero} número é Positivo`);
    }else if(numero < 0){
        console.log(`${numero} número é Negativo`);
    }else{
        console.log(`${numero} número é Zero`);
    };



// 9 Use um loop while para imprimir os números de 1 a 10 no console.
    let contador = 0;
    
            // loop  de condição verdadeira, só para quando a condição for falsa
    while (contador < 10) {
        contador++;
        console.log(contador);

       

    };


// 10 Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
    let nota = 5;
    if(nota>=7){
        console.log("Aprovado");
    }else{
        console.log("Reprovado");
    }

// 11 Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
    let aleat = Math.random();
    console.log(aleat);

// 12 Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
    let aleat2 = parseInt(Math.random()*10+1);
    console.log(aleat2);

// 13 Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
    let aleat3 = parseInt(Math.random()*1000+1);
    console.log(aleat3);


