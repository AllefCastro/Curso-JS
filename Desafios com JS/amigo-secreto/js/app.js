let amigoSecreto = [];

function adicionar()
{
    let nomeAmigo = document.getElementById('nome-amigo').value;
    // if(amigoSecreto.includes(nomeAmigo))
    // {
    //     alert("Esse nome já existe");
    //         return;
    // }

    for(let cont = 0; cont<amigoSecreto.length; cont++)
    {
        if(amigoSecreto[cont]==nomeAmigo.toUpperCase())
        {
            alert("Esse nome já existe");
            return;
        }
    }
    if(nomeAmigo == ''){
        alert("Escreva um nome");
        // return; --> retorna direto para fim da função.
    }else{
    
    amigoSecreto.push(nomeAmigo.toUpperCase());
    let listaAmigo = document.getElementById('lista-amigos');
    
    if(listaAmigo.textContent == '')
    {
        listaAmigo.textContent = nomeAmigo;
    }else
    {
    listaAmigo.textContent = listaAmigo.textContent + ", " + nomeAmigo;
    } 
}  
    // alert(nomeAmigo);
    // console.log(amigoSecreto);
    document.getElementById('nome-amigo').value ='';
}

function sortear()
{
    if(amigoSecreto.length < 4 ){
        alert("Precisa conter pelo menos 4 nomes");
        return;
    }
    document.getElementById('lista-sorteio').textContent = '';
    embaralha(amigoSecreto); 
    let cont = 0;
    console.log(amigoSecreto);
    let listaSorteio = document.getElementById('lista-sorteio');
    while(cont< amigoSecreto.length)
    {
        if(cont == amigoSecreto.length-1){
        listaSorteio.innerHTML = listaSorteio.innerHTML  + amigoSecreto[cont] + " --> " + amigoSecreto[0] +'<br/>';
       }else{
        listaSorteio.innerHTML = listaSorteio.innerHTML  + amigoSecreto[cont] + " --> " + amigoSecreto[cont + 1] +'<br/>';
       }
        cont++;
    }

}

function reiniciar()
{
    document.getElementById('nome-amigo').textContent = '';
    document.getElementById('lista-amigos').textContent = '';    
    amigoSecreto = [];
    document.getElementById('lista-sorteio').innerHTML='';

}



function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
