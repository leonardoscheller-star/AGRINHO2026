
let tamanhoAtual = 16; 

function mudarTamanho(mudanca) {
    tamanhoAtual = tamanhoAtual + (mudanca * 2); 
    if (tamanhoAtual < 12) tamanhoAtual = 12;
    if (tamanhoAtual > 32) tamanhoAtual = 32;
    // Função de mudar o tamanho da fonte
    document.body.style.fontSize = tamanhoAtual + "px";
}

function mostrarSaudacao() {
    // Pega o que o usuário digitou 
    let nome = document.getElementById("campo-nome").value;

    // Confere se o usuário realmente digitou algo 
    if (nome !== "") {
        // Esconde a caixinha de pergunta inteira
        document.getElementById("caixa-interacao").style.display = "none";
        
        // Pega o nosso título
        let saudacao = document.getElementById("texto-saudacao");
        
        // Escreve a mensagem personalizada dentro dele
        saudacao.innerHTML = "Olá, " + nome + "! Bem-vindo(a) ao meu site.";
        
        // Faz a mensagem aparecer na tela
        saudacao.style.display = "block";
        
    }
}