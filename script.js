// Começamos dizendo que o tamanho padrão é 16
let tamanhoAtual = 16; 

// Função que aumenta ou diminui o texto
function mudarTamanho(mudanca) {
    // Adiciona ou subtrai 2 pontos no tamanho da fonte
    tamanhoAtual = tamanhoAtual + (mudanca * 2); 
    
    // Travas de segurança para a letra não sumir ou ficar gigante demais
    if (tamanhoAtual < 12) tamanhoAtual = 12;
    if (tamanhoAtual > 32) tamanhoAtual = 32;

    // Aplica o novo tamanho no site inteiro
    document.body.style.fontSize = tamanhoAtual + "px";
}