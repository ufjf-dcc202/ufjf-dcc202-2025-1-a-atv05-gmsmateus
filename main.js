import { getTabuleiro, seleciona } from "./discos.js";

const eh1=document.querySelector("h1");
eh1.textContent="Olá Mundo!";

const eTabuleiro= criaTabuleiro();
atualizaTabuleiro();
document.body.append(eTabuleiro);

function atualizaTabuleiro(){
    eTabuleiro.innerHTML= "";
    for(let i=0; i<7; i++)
    {
        const tabuleiro = getTabuleiro();
        const disco1=criaDisco(tabuleiro[i], i);
        eTabuleiro.append(disco1);
        disco1.addEventListener("click", cliqueDisco);
    }
}

function cliqueDisco(evento){    
    const posicao=Number(evento.target.dataset.posicao);
    console.log("click na posição: "+posicao);

    seleciona(posicao);
    atualizaTabuleiro();
}

function criaDisco(cor, posicao){
    const novoDisco = document.createElement("div");
    novoDisco.classList.add("disco");
    novoDisco.dataset.cor = cor;
    novoDisco.dataset.posicao = posicao;
    return novoDisco;
}

function criaTabuleiro(){
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

