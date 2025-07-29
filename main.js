 const eh1=document.querySelector("h1");
    eh1.textContent="Olá Mundo!";

const eTabuleiro= criaTabuleiro();
document.body.append(eTabuleiro);

function criaTabuleiro(){
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}


