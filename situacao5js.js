function verificarPalavras() {
    // Solicita a palavra inicial
    let palavraInicial = prompt("Digite a palavra inicial:");

    // Verifica se a palavra inicial não está vazia
    if (!palavraInicial) {
        alert("A palavra inicial não pode ser vazia.");
        return;
    }

    // Loop para solicitar 10 novas palavras
    for (let i = 1; i <= 10; i++) {
        // Solicita uma nova palavra
        let novaPalavra = prompt(`Digite a ${i}ª palavra:`);

        // Verifica se a nova palavra é igual à palavra inicial
        if (novaPalavra === palavraInicial) {
            alert("Erro: A palavra digitada é igual à palavra inicial.");
            return;
        }
    }

    // Se nenhuma palavra for igual à inicial
    alert("Nenhuma das palavras digitadas é igual à palavra inicial.");
}

// Chama a função para iniciar o processo
verificarPalavras();
