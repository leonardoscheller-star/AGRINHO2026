
let tamanhoAtual = 16; 

function mudarTamanho(mudanca) {
    tamanhoAtual = tamanhoAtual + (mudanca * 2); 
    if (tamanhoAtual < 12) tamanhoAtual = 12;
    if (tamanhoAtual > 32) tamanhoAtual = 32;

    document.body.style.fontSize = tamanhoAtual + "px";
}

function salvarNome() {
    // 1. O Javascript vai lá no HTML e pega o que está escrito dentro do <input>
    let nomeDigitado = document.getElementById("nome-usuario").value;
    if (nomeDigitado !== "") {
        
        // 3. Esconde a caixinha de pergunta (Display "none" significa sumir)
        document.getElementById("area-pergunta").style.display = "none";
        
        // 4. Pega a nossa tag <h2> vazia e escreve uma mensagem dentro dela juntando com o nome
        let mensagem = document.getElementById("mensagem-saudacao");
        mensagem.innerHTML = "Olá, " + nomeDigitado + "! Que bom ter você aqui aprendendo sobre o Agro.";
        
        // 5. Faz a mensagem aparecer na tela (Display "block" faz aparecer)
        mensagem.style.display = "block";

    } 
}