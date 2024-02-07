



function Status(tag,texto)
{

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function alterarStatus(num)
{
    
    
    let gameClicado = document.getElementById(`game-${num}`);
    // let botao = gameClicado.querySelector('a');
    // let imagem = gameClicado.querySelector('div');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    

 
        if(imagem.classList.contains('dashboard__item__img--rented')==false)
        {   console.log('teste')
            botao.innerHTML = "Devolver";
            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
        }else
        {
            botao.innerHTML = "Alugar";
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
           
        }
    }
    


    
