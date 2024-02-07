// Crie uma função que valide se um número é positivo, negativo ou zero.
    let num = 0;
    teste();
    function teste(){
      num = prompt("Digite um número");
      if(isNaN(num)){
      alert(`${num} não é considerado número`);  
    }else{
    if(num<0){
        alert(`${num} é negativo`);
        
    }else if(num>0){
         alert(`${num} é Positivo`);
         
    }else{
        alert(`${num} é Zero`);
        
    }}
    }
    
// Implemente uma função que verifique se uma pessoa é maior de idade.
    let idade = prompt("Digite sua idade");

    maiorDeIdade();
    function maiorDeIdade(){
        if(isNaN(idade) || idade < 0){
            alert("Você digitou um número negativo ou número não legivel");
            return;
        }
        if(idade >= 18){
           alert("Você é maior de idade");
        }else{
            alert("Você é menor de idade")
        }

}
// Desenvolva uma função que valide se uma string é vazia ou não.
    let campo = "teste";
    validacaoDeCampo(campo);
    function validacaoDeCampo(texto){
        if(texto == ""){
            alert("Você não digitou nada");
        }else if(typeof texto == "string"){
            alert("Isso é uma string ");
        }else{
            alert("Não é uma string")
            alert(typeof texto);
        }


    }


// Crie uma função que determine se um ano é bissexto
    let ano = 366;
    bissexto();
    function bissexto(){
        if(ano === 366){
            alert("Ano bissexto");
            return;
        }alert("Ano normal");


    }

// Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
    let numeroUm = prompt("Digite o primeiro número");
    let numeroDois = prompt("Digite o segundo número");
    divisao(numeroUm,numeroDois);
    function divisao(num1,num2){
        if(isNaN(num1)||isNaN(num2)||num1 == 0||num2==0){
            alert("ERRO!");
            return;
        }alert(num1/num2);
    }

// Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
    let arrayTam = [5,6];
    arrayTam.push(prompt("Retorno o tamanho do array"));
    alert(arrayTam.length);

// Crie um array e utilize a função includes para verificar se um elemento específico está presente
// Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
// Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
    let arrayTabela = ['teste','teste2'];
    let verificar = prompt("Verifique se tem no array");

    verificaSeTem(arrayTabela,verificar)

    function verificaSeTem(tabela,verificaSeTem){
        if(tabela.includes(verificaSeTem)){
            alert("Já tem esse cadastro!!");
        }else{
            tabela.push(verificaSeTem);
            alert("Incluido com Sucesso!!!");
            alert(`${tabela}`);
        }
    }





// Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.
  // Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// Exibindo o resultado
if (objetoEstaPresente) {
    console.log('O aluno está presente no array.');
} else {
    console.log('O aluno não está presente no array.');
}




// Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
// Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos2 = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado2 = { id: 2, nome: 'Maria', idade: 22 };

// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente2 = verificarObjetoNoArray(alunos2, alunoProcurado2);

// Exibindo o resultado
if (objetoEstaPresente) {
    console.log('O aluno está presente no array.');
} else {
    console.log('O aluno não está presente no array.');
}

