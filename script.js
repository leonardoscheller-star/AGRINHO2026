
let tamanhoAtual = 16; 

function mudarTamanho(mudanca) {
    tamanhoAtual = tamanhoAtual + (mudanca * 2); 
    if (tamanhoAtual < 12) tamanhoAtual = 12;
    if (tamanhoAtual > 32) tamanhoAtual = 32;

    document.body.style.fontSize = tamanhoAtual + "px";
}