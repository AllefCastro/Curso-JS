function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let qtdPista ="qtd-"+tipoIngresso ;

    if(quantidade<=0 || Number.isInteger(quantidade) === false){
        //isNaN(variavel)
        alert(`Quantidade de ingressos não pode ser menor ou igual a Zero ou vazio`);
    }else{
    comprarIngresso(quantidade,qtdPista);  
    }
}

function comprarIngresso(quantidade,qtdPista){
    let tipoPista = parseInt(document.getElementById(qtdPista).textContent);
    if(quantidade>tipoPista){
        alert(`Quantidade indisponivel`)

    }else{
        alert(`Compra de  efetuada com sucesso!!`)
        tipoPista = tipoPista - quantidade;
        document.getElementById(qtdPista).textContent = tipoPista;
    }
}